// Custom content loader for the posts collection.
//
// Two design choices that matter for CI build time:
//
// 1. **No `renderMarkdown` at load time.** The previous version called
//    Astro's full remark/rehype pipeline for every post during `load()`,
//    which was the single biggest cost (≈20-40 s on 2,100 posts). Pages
//    call `render(entry)` themselves, so the body string we store here
//    is enough — markdown is rendered on demand.
//
// 2. **Parallel file reads in batches of 50.** Sequential `readFile`
//    on 2,100 files serially ≈ 2 s of pure I/O wait. Batched
//    `Promise.all` drops that to a few hundred ms.
//
// Other features preserved:
//   - Fence-stripping (so ` ```markdown ... ``` ` posts still parse)
//   - Auto meta-description from the body when frontmatter is empty
//   - Auto `date` from file mtime when frontmatter is missing it
//   - `untouched` cleanup so deleted files are dropped from the store
import type { Loader, LoaderContext } from 'astro/loaders';
import { readFile, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { glob as tinyglobby } from 'tinyglobby';
import matter from 'gray-matter';

const FENCE_RE = /^```[a-zA-Z0-9_-]{0,11}$/;
const PLAIN_DESC_MAX = 155;
const BATCH = 50;

// Strip markdown formatting so we can build a real meta description from the
// post body when frontmatter is missing one. Empty description = duplicate
// description across thousands of pages, which Google treats as thin
// content. We truncate on a word boundary at 155 chars (Google's snippet
// limit) and append an ellipsis when we cut mid-word.
const buildAutoDescription = (body: string): string => {
  const plain = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
    .replace(/[#>*_~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length <= PLAIN_DESC_MAX) return plain;
  const cut = plain.slice(0, PLAIN_DESC_MAX);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
};

const stripWrappedFence = (raw: string): string => {
  const lines = raw.split(/\r?\n/);
  if (lines.length < 3) return raw;
  if (!FENCE_RE.test(lines[0].trim())) return raw;
  const body = lines.slice(1);
  if (body[body.length - 1].trim() === '```') body.pop();
  return body.join('\n');
};

const makeId = (base: string, file: string): string =>
  relative(base, file).split(sep).join('/').replace(/\.(md|markdown|mdx)$/i, '');

export interface FenceStrippingGlobOptions {
  pattern: string | string[];
  base: string;
}

export function fenceStrippingGlob({ pattern, base }: FenceStrippingGlobOptions): Loader {
  const fullBase = join(process.cwd(), base.replace(/^\.\//, ''));
  const patterns = Array.isArray(pattern) ? pattern : [pattern];
  return {
    name: 'fence-stripping-glob',
    load: async (context: LoaderContext) => {
      const { store, logger, parseData } = context;
      const files = await tinyglobby(patterns, { cwd: fullBase, absolute: true });
      const untouched = new Set(store.keys());

      // Parallelise file reads + parse. 50 is a safe batch: I/O mostly
      // dominates here, so 50 concurrent reads = no I/O queue stall and
      // no memory spike.
      for (let i = 0; i < files.length; i += BATCH) {
        const batch = files.slice(i, i + BATCH);
        await Promise.all(
          batch.map(async (filePath) => {
            const raw = await readFile(filePath, 'utf-8').catch((err) => {
              logger.error(`Error reading ${filePath}: ${err.message}`);
              return '';
            });
            if (!raw) return;
            const stripped = stripWrappedFence(raw);
            const { data, content } = matter(stripped);
            if (!data || typeof data !== 'object') {
              logger.warn(`Skipping ${filePath}: no frontmatter found`);
              return;
            }

            // Auto-fill description from body and date from file mtime.
            if (!data.description || (typeof data.description === 'string' && data.description.trim() === '')) {
              data.description = buildAutoDescription(content);
            }
            if (!data.date) {
              try {
                const s = await stat(filePath);
                data.date = s.mtime;
              } catch {
                data.date = new Date();
              }
            }

            const id = makeId(fullBase, filePath);
            untouched.delete(id);
            const parsed = await parseData({ id, data, filePath });
            store.set({
              id,
              data: parsed,
              body: content,
              filePath: relative(process.cwd(), filePath),
              digest: '',
            });
          })
        );
      }

      // Drop any previously-cached entries that no longer exist on disk.
      for (const stale of untouched) {
        store.set({ id: stale, data: {} as Record<string, unknown>, body: '', digest: '' });
      }
    },
  };
}