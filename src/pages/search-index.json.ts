// Build-time search index. Only title + tags + URL — nothing else.
// Keeps the JSON small (a few hundred KB instead of 900 KB) and the
// /search page still gives a fast, relevant result.
import { getCollection } from 'astro:content';
import { getCleanSlug } from '../utils/slug';
import type { APIRoute } from 'astro';

interface SearchEntry {
  t: string;       // title
  u: string;       // url
  g?: string[];    // tags
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('posts');
  const entries: SearchEntry[] = posts.map((p) => ({
    t: p.data.title ?? '',
    u: `/${getCleanSlug(p.id)}/`,
    ...(p.data.tags?.length ? { g: p.data.tags.map((t) => String(t)) } : {}),
  }));

  return new Response(JSON.stringify(entries), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
