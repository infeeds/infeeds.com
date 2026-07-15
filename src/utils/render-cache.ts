// Persistent body-hash → rendered-HTML cache.
//
// On every build we walk the posts collection, compute SHA-256 of each
// post's markdown body, and look up a cached rendered HTML string. If the
// hash matches we skip Astro's remark/rehype pipeline entirely and re-use
// the cached HTML wrapped in a static <Fragment set:html>.
//
// On a cache miss we call `experimental_AstroContainer.renderToString` on
// the rendered Content to extract the HTML, then write it to disk so the
// next build can skip the work.
//
// Storage: .astro/render-cache.json (gitignored). On a CI runner, the
// user can wire `actions/cache@v4` against the .astro/ directory to keep
// the cache across runs.
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

export interface CachedRender {
  bodyHash: string;
  /** Pre-rendered HTML body for the post. Injected via `<Fragment set:html>` at render time. */
  html: string;
  /** Schema version at cache time. Bump to invalidate everything. */
  schemaVersion: string;
}

const CACHE_PATH = join(process.cwd(), '.astro', 'render-cache.json');
const SCHEMA_VERSION = 'v1';

let _cache: Record<string, CachedRender> | null = null;
let _schemaVersion: string = SCHEMA_VERSION;

export const setSchemaVersion = (v: string): void => {
  _schemaVersion = v;
};

const ensureLoaded = async (): Promise<Record<string, CachedRender>> => {
  if (_cache !== null) return _cache;
  try {
    const raw = await readFile(CACHE_PATH, 'utf-8');
    _cache = JSON.parse(raw) as Record<string, CachedRender>;
  } catch {
    _cache = {};
  }
  return _cache;
};

const hash = (s: string): string =>
  createHash('sha256').update(s).digest('hex');

/**
 * Return the cached rendered HTML for a post, or null if there's no entry
 * (or the body hash changed, or the schema version is stale).
 */
export const getCachedRender = async (
  id: string,
  body: string
): Promise<string | null> => {
  const cache = await ensureLoaded();
  const entry = cache[id];
  if (!entry) return null;
  if (entry.bodyHash !== hash(body)) return null;
  if (entry.schemaVersion !== _schemaVersion) return null;
  return entry.html;
};

/** Persist the rendered HTML so the next build can skip remark/rehype. */
export const setCachedRender = async (
  id: string,
  body: string,
  html: string
): Promise<void> => {
  const cache = await ensureLoaded();
  cache[id] = {
    bodyHash: hash(body),
    html,
    schemaVersion: _schemaVersion,
  };
};

/** Flush the in-memory cache to disk. Call once at the end of the loader. */
export const flushRenderCache = async (): Promise<void> => {
  if (!_cache) return;
  try {
    await mkdir(dirname(CACHE_PATH), { recursive: true });
    await writeFile(CACHE_PATH, JSON.stringify(_cache));
  } catch {
    // Best-effort: cache write failures should not fail the build.
  }
};
