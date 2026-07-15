// Build-time memoised index for the homepage + post-page sidebar.
//
// Two views:
//   getPostsByTag()      → tag → PostEntry[]  (slim, sorted by date)
//   getTagCounts()       → tag → post-count  (for TrendingSidebar's tag cloud)
//   getRecentIds(n)      → top-N post IDs by date (resolves in MagazineHero, etc.)
//   resolveEntries(ids)  → full Astro Content Collection entries
//
// Computing these once at module load removes the per-page O(N) scan that
// MagazineHero, CategorySection × 5, LatestGrid, RelatedPosts, and
// TrendingSidebar were each paying independently.
import { getCollection } from 'astro:content';

export type PostEntry = {
  id: string;
  date: number;
  title: string;
  image?: string;
  primaryTag?: string;
  author?: string;
  description?: string;
};

type SlimPost = {
  id: string;
  date: number;
  title: string;
  image?: string;
  tagsLower: string[];
  primaryTag?: string;
  author?: string;
};

let _byTag: Map<string, SlimPost[]> | null = null;
let _ordered: SlimPost[] | null = null;

async function loadIndex(): Promise<Map<string, SlimPost[]>> {
  if (_byTag) return _byTag;
  const all = await getCollection('posts');
  const index = new Map<string, SlimPost[]>();
  const flat: SlimPost[] = [];

  for (const p of all) {
    const tagsLower = (p.data.tags ?? []).map((t) => String(t).toLowerCase());
    const slim: SlimPost = {
      id: p.id,
      date: p.data.date ? new Date(p.data.date).getTime() : 0,
      title: p.data.title ?? '',
      image: p.data.image,
      tagsLower,
      primaryTag: tagsLower[0] || undefined,
      author: p.data.author,
    };
    flat.push(slim);
    for (const tag of tagsLower) {
      const list = index.get(tag);
      if (list) list.push(slim);
      else index.set(tag, [slim]);
    }
  }

  for (const list of index.values()) list.sort((a, b) => b.date - a.date);
  flat.sort((a, b) => b.date - a.date);

  _byTag = index;
  _ordered = flat;
  return index;
}

export async function getPostsByTag(): Promise<Map<string, SlimPost[]>> {
  return loadIndex();
}

export async function resolveEntries(
  ids: readonly string[],
): Promise<Map<string, SlimPost>> {
  await loadIndex();
  const map = new Map<string, SlimPost>();
  for (const e of _ordered ?? []) {
    if (ids.includes(e.id)) map.set(e.id, e);
  }
  return map;
}

// Walk tags in order; each tag-list is pre-sorted by recency. Skip
// already-seen post IDs so the same post never appears twice.
export async function getRelatedSlim(
  tags: readonly string[],
  currentPostId: string,
  count: number,
): Promise<SlimPost[]> {
  const byTag = await getPostsByTag();
  const seen = new Set<string>([currentPostId]);
  const out: SlimPost[] = [];
  for (const tag of tags.map((t) => t.toLowerCase())) {
    for (const entry of byTag.get(tag) ?? []) {
      if (seen.has(entry.id)) continue;
      seen.add(entry.id);
      out.push(entry);
      if (out.length >= count) break;
    }
    if (out.length >= count) break;
  }
  return out;
}

// Top-N posts by date.
export async function getRecentSlim(count: number): Promise<SlimPost[]> {
  await loadIndex();
  return (_ordered ?? []).slice(0, count);
}

// Top tags by post-count, derived from the index size per bucket.
export async function getTopTagsByCount(limit: number): Promise<{ tag: string; count: number }[]> {
  const byTag = await getPostsByTag();
  return [...byTag.entries()]
    .map(([tag, posts]) => ({ tag, count: posts.length }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
