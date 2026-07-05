// Build a richer sitemap from collection frontmatter.
// Drops the default @astrojs/sitemap output, which only emits <loc>.
// We deliberately do NOT emit <image:image>: third-party image URLs
// (Unsplash, etc.) routinely contain `?` and `&` in query strings that
// would otherwise break XML parsing of the entire file. Image discovery
// is left to crawlers.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getCleanSlug, getDateFromFilename } from '../utils/slug';

const SITE = 'https://infeeds.com';

const VALID_CHANGEFREQ = new Set([
  'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never',
]);

// XML 1.0 escape. Skips already-escaped entities so a stray `&amp;` in
// input does not become `&amp;amp;`. Strips control chars XML forbids.
const xmlEscape = (s: string): string => {
  // eslint-disable-next-line no-control-regex
  const cleaned = s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\uFFFE\uFFFF]/g, '');
  return cleaned
    .replace(/&(?!#?\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

// Validate a URL string. Returns the absolute URL or null on failure.
const safeUrl = (raw: unknown): string | null => {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  // eslint-disable-next-line no-control-regex
  if (/[\x00-\x1F]/.test(raw)) return null;
  try {
    return new URL(raw).toString();
  } catch {
    return null;
  }
};

const toIso = (value: unknown): string | null => {
  if (!value) return null;
  const d = value instanceof Date ? value : new Date(String(value));
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
};

const postMeta = (dateValue: unknown) => {
  const iso = toIso(dateValue) ?? new Date().toISOString();
  const ageDays = (Date.now() - new Date(iso).getTime()) / 86_400_000;
  if (ageDays < 30) return { changefreq: 'daily', priority: 0.9 };
  if (ageDays < 180) return { changefreq: 'weekly', priority: 0.8 };
  if (ageDays < 730) return { changefreq: 'monthly', priority: 0.7 };
  return { changefreq: 'yearly', priority: 0.5 };
};

// Percent-encode path segments so future content with stray characters
// cannot produce invalid URLs.
const pathSafe = (s: string): string =>
  encodeURIComponent(String(s).trim().toLowerCase()).replace(/%2F/g, '-');

type Entry = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
};

const clampPriority = (n: number): string => {
  if (!Number.isFinite(n)) return '0.5';
  return Math.max(0, Math.min(1, n)).toFixed(1);
};

const sanitizeChangefreq = (c: string | undefined): string | undefined => {
  if (!c) return undefined;
  const lower = c.toLowerCase().trim();
  return VALID_CHANGEFREQ.has(lower) ? lower : undefined;
};

export const GET: APIRoute = async () => {
  let posts, pages, authors;
  try {
    [posts, pages, authors] = await Promise.all([
      getCollection('posts'),
      getCollection('pages'),
      getCollection('authors'),
    ]);
  } catch {
    // Collection load failed: return an empty but valid sitemap.
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
      { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
    );
  }

  const entries: Entry[] = [];
  const seen = new Set<string>();
  const addEntry = (entry: Entry) => {
    const loc = safeUrl(entry.loc);
    if (!loc || seen.has(loc)) return;
    seen.add(loc);
    entries.push({ ...entry, loc });
  };

  addEntry({ loc: `${SITE}/`, changefreq: 'daily', priority: '1.0' });
  addEntry({ loc: `${SITE}/blog/`, changefreq: 'daily', priority: '0.9' });

  for (const page of pages) {
    const slug = page.id.replace(/\.(md|markdown|mdx|html)$/, '').trim();
    if (!slug) continue;
    addEntry({
      loc: `${SITE}/${slug}/`,
      changefreq: 'monthly',
      priority: '0.4',
    });
  }

  for (const post of posts) {
    const slug = getCleanSlug(post.id);
    if (!slug) continue;
    const rawDate = post.data.date ?? getDateFromFilename(post.id);
    const lastmod = toIso(rawDate) ?? undefined;
    const meta = postMeta(rawDate);
    addEntry({
      loc: `${SITE}/${slug}/`,
      lastmod,
      changefreq: meta.changefreq,
      priority: clampPriority(meta.priority),
    });
  }

  for (const author of authors) {
    const username = pathSafe(author.data.username ?? '');
    if (!username) continue;
    addEntry({
      loc: `${SITE}/author/${username}/`,
      changefreq: 'weekly',
      priority: '0.6',
    });
  }

  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      const safe = pathSafe(tag);
      if (safe) tagSet.add(safe);
    }
  }
  for (const tag of tagSet) {
    addEntry({
      loc: `${SITE}/tags/${tag}/`,
      changefreq: 'weekly',
      priority: '0.6',
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => {
    const parts: string[] = [`  <loc>${xmlEscape(e.loc)}</loc>`];
    if (e.lastmod) parts.push(`    <lastmod>${xmlEscape(e.lastmod)}</lastmod>`);
    const cf = sanitizeChangefreq(e.changefreq);
    if (cf) parts.push(`    <changefreq>${cf}</changefreq>`);
    if (e.priority) parts.push(`    <priority>${xmlEscape(e.priority)}</priority>`);
    return `  <url>\n${parts.join('\n')}\n  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};