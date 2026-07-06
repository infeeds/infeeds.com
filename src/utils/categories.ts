// Derive the top tags from the post collection, used by both the header
// menu and the homepage category sections.
import { getCollection } from 'astro:content';

interface TagEntry {
  tag: string;
  slug: string;
  count: number;
}

export const getTopCategories = async (limit = 6): Promise<TagEntry[]> => {
  const posts = await getCollection('posts');
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const raw of post.data.tags ?? []) {
      const tag = String(raw).trim();
      if (!tag) continue;
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({
      tag,
      slug: tag.toLowerCase().replace(/\s+/g, '-'),
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
};