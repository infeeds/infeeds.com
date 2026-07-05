// Custom content loader that strips a wrapping markdown code fence from each
// post before parsing frontmatter. Articles in this repo are sometimes pasted
// as a single fenced block (` ```markdown ... ``` `), which would otherwise
// fail Astro's frontmatter parser.
import type { Loader, LoaderContext } from 'astro/loaders';
import { readFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { glob as tinyglobby } from 'tinyglobby';
import matter from 'gray-matter';

const FENCE_RE = /^```[a-zA-Z0-9_-]{0,11}$/;

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

const makeDigest = (content: string): string =>
  createHash('sha256').update(content).digest('hex').slice(0, 16);

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
      const { store, logger, parseData, renderMarkdown } = context;
      // tinyglobby returns paths relative to `cwd`; resolve them against fullBase.
      const files = await tinyglobby(patterns, { cwd: fullBase, absolute: true });
      const untouched = new Set(store.keys());
      for (const filePath of files) {
        // tinyglobby returns absolute paths when `absolute: true`.
        const raw = await readFile(filePath, 'utf-8').catch((err) => {
          logger.error(`Error reading ${filePath}: ${err.message}`);
          return '';
        });
        if (!raw) continue;
        const stripped = stripWrappedFence(raw);
        const { data, content } = matter(stripped);
        if (!data || typeof data !== 'object') {
          logger.warn(`Skipping ${filePath}: no frontmatter found`);
          continue;
        }
        const id = makeId(fullBase, filePath);
        untouched.delete(id);
        const parsed = await parseData({ id, data, filePath });
        const rendered = await renderMarkdown(content, { fileURL: pathToFileURL(filePath) });
        store.set({
          id,
          data: parsed,
          body: content,
          filePath: relative(process.cwd(), filePath),
          digest: makeDigest(content),
          rendered,
          assetImports: rendered.metadata?.imagePaths,
        });
      }
      // Clear entries from files that no longer match the pattern.
      for (const stale of untouched) {
        store.set({ id: stale, data: {} as Record<string, unknown>, body: '', digest: '' });
      }
    },
  };
}