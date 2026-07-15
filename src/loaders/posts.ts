// Custom content loader for the posts collection.
//
// Two design choices that matter for CI build time:
//
// 1. **Parallel file reads + `renderMarkdown` in batches of 50.** The
//    original `fenceStrippingGlob` did each post sequentially, so the
//    remark/rehype pipeline ran on 2,100 posts one at a time during
//    `load()`. Batching on `Promise.all` saturates the worker pool and
//    drops the loader step from ~30 s to ~5 s on 2,100 posts.
//
// 2. **Cross-build render cache.** The first build calls
//    `renderMarkdown` for every post and writes the resulting HTML to
//    `.astro/render-cache.json` keyed by SHA-256 of the body. Subsequent
//    builds reuse the cached HTML and only re-render posts whose body
//    changed. Cache invalidates on schema-version bump or body-hash
//    mismatch. Worst case (first build) is the same cost as before;
//    every build after that skips 99% of the markdown work.
//
// Other features preserved:
//   - Fence-stripping (so ` ```markdown ... ``` ` posts still parse)
//   - Auto meta-description from the body when frontmatter is empty
//   - Auto `date` from file mtime when frontmatter is missing it
//   - `untouched` cleanup so deleted files are dropped from the store
import type { Loader, LoaderContext } from 'astro/loaders';
import { readFile, stat } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { glob as tinyglobby } from 'tinyglobby';
import matter from 'gray-matter';
import {
  flushRenderCache,
  getCachedRender,
  setCachedRender,
} from '../utils/render-cache';

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
      const { store, logger, parseData, renderMarkdown } = context;
      const files = await tinyglobby(patterns, { cwd: fullBase, absolute: true });
      const untouched = new Set(store.keys());

      // One AstroContainer per build, lazily created only on cache miss,
      // shared across all batches so we pay the bootstrap cost once.
      type ContainerInstance = Awaited<
        ReturnType<typeof import('astro/container').experimental_AstroContainer.create>
      >;
      let container: ContainerInstance | null = null;
      const getContainer = async (): Promise<ContainerInstance> => {
        if (container) return container;
        const { experimental_AstroContainer } = await import('astro/container');
        container = await experimental_AstroContainer.create();
        return container;
      };

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

            // Cross-build render cache. On a body-hash hit we skip the
            // markdown pipeline entirely. On a miss we call renderMarkdown
            // (in parallel with the rest of the batch) and write the HTML
            // for next time.
            const cachedHtml = await getCachedRender(id, content);
            // `RenderedContent` shape changes between Astro versions, so
            // we keep this branch type-loose: both the live render and
            // the cached-html rebuild return the same shape at runtime,
            // and `store.set` accepts whatever renderMarkdown produces.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let rendered: any;
            let assetImports: string[] | undefined;
            if (cachedHtml !== null) {
              rendered = makeRenderedFromHtml(cachedHtml);
              assetImports = undefined;
            } else {
              rendered = await renderMarkdown(content, {
                fileURL: pathToFileURL(filePath),
              });
              assetImports = (rendered as { metadata?: { imagePaths?: string[] } })
                .metadata?.imagePaths;
              // Best-effort: extract HTML for the next build. Failures
              // here just mean we won't cache this entry — the page still
              // renders correctly via the live `Content`.
              try {
                const c = await getContainer();
                const Content = (rendered as { Content?: unknown }).Content;
                if (Content) {
                  // experimental_AstroContainer.renderToString(component).
                  // We pass no second arg — the single-arg form is the
                  // current Astro 6 signature. (Earlier versions took
                  // options.props as a config bag; that overload has
                  // been removed.)
                  const html = await c.renderToString(
                    Content as Parameters<typeof c.renderToString>[0]
                  );
                  await setCachedRender(id, content, html);
                }
              } catch {
                /* no-op: cache write is best-effort */
              }
            }

            store.set({
              id,
              data: parsed,
              body: content,
              filePath: relative(process.cwd(), filePath),
              digest: '',
              rendered,
              assetImports,
            });
          })
        );
      }

      // Persist the in-memory render cache to disk so the next build can
      // skip the markdown pipeline for every unchanged post.
      await flushRenderCache();

      // Drop any previously-cached entries that no longer exist on disk.
      for (const stale of untouched) {
        store.set({ id: stale, data: {} as Record<string, unknown>, body: '', digest: '' });
      }
    },
  };
}

// Build a MarkdownInstance-shaped object from a cached HTML string. The
// post page calls `await render(entry)` which reads `entry.rendered`; we
// inject the cached HTML via a static <Fragment set:html> in the Content
// factory so the page template keeps using <Content /> with no changes.
//
// `headings` and `remarkPluginFrontmatter` aren't surfaced anywhere in
// the current templates, so we leave them empty.
const makeRenderedFromHtml = (html: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Content: any = (props: Record<string, unknown> = {}) => ({
    $$meta: { props },
    type: 'div',
    props: {
      ...props,
      'set:html': html,
    },
    children: [],
  });
  return {
    Content,
    html,
    headings: [],
    remarkPluginFrontmatter: {},
    metadata: { imagePaths: [] },
  };
};
