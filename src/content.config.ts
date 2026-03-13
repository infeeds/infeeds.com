import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsCollection = defineCollection({
  loader: async () => {
    const postsDir = path.resolve('./src/content/posts');
    const skippedFiles = [];
    const entries = [];

    if (!fs.existsSync(postsDir)) return [];

    const files = fs.readdirSync(postsDir).filter(f =>
      (f.endsWith('.md') || f.endsWith('.markdown')) && !f.startsWith('_')
    );

    for (const file of files) {
      const filePath = path.join(postsDir, file);
      let rawContent = fs.readFileSync(filePath, 'utf8');

      // Sanitization: Remove AI-added code fences if they wrap the entire file
      if (rawContent.trim().startsWith('```markdown') && rawContent.trim().endsWith('```')) {
        rawContent = rawContent.trim().replace(/^```markdown\n?/, '').replace(/\n?```$/, '');
      }

      try {
        const { data, content } = matter(rawContent);

        // Validation: Title is required
        if (!data.title) {
          console.warn(`[Content Loader] Skipping ${file}: Title is missing.`);
          skippedFiles.push(path.relative(process.cwd(), filePath));
          continue;
        }

        entries.push({
          id: file.replace(/\.(md|markdown)$/, ''),
          ...data,
          body: content,
          // We pass the sanitized content if it was modified
          _raw: rawContent
        });
      } catch (e) {
        console.error(`[Content Loader] Error parsing ${file}:`, e);
        skippedFiles.push(path.relative(process.cwd(), filePath));
      }
    }

    // Write skipped files to a temp file for the CI task to pick up
    fs.writeFileSync('./.skipped_files.json', JSON.stringify(skippedFiles, null, 2));

    return entries.map(({ id, ...rest }) => ({
      id,
      ...rest
    }));
  },
  schema: z.object({
    layout: z.string().optional().default('post'),
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.union([z.date(), z.string()]).optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    video_embed: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().default(['lifestyle']),
    tags_color: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }).transform((data) => {
    const char = data.title ? data.title[0].toUpperCase() : 'A';
    const code = char.charCodeAt(0);

    if (!data.author) {
      const authors = ['adam', 'alena', 'tiana'];
      data.author = authors[code % authors.length];
    }

    if (!data.image) {
      const images = [
        "/images/posts/photo-1454923634634-bd1614719a7b.webp",
        "/images/posts/photo-1457369804613-52c61a468e7d.webp",
        "/images/posts/photo-1494253109108-2e30c049369b.webp",
        "/images/posts/photo-1506880018603-83d5b814b5a6.webp",
        "/images/posts/photo-1507925921958-8a62f3d1a50d.webp",
        "/images/posts/photo-1515378791036-0648a3ef77b2.webp",
        "/images/posts/photo-1558376939-7d6cb3025d5c.webp",
        "/images/posts/photo-1585241936939-be4099591252.webp",
        "/images/posts/photo-1603397830143-1a78752fb208.webp",
        "/images/posts/photo-1700421686935-5b0b2e2cc3f0.webp"
      ];
      data.image = images[code % images.length];
    }

    if (!data.tags_color) {
      const colors = [
        '#f74a4aff', // red
        '#9c35c8ff', // purple
        '#303f9f', // indigo
        '#1976d2', // blue
        '#00796b', // teal
        '#388e3c', // green
        '#afb42b', // lime
        '#fbc02d', // yellow
        '#ffa000', // amber
        '#f57c00', // orange
        '#e64a19', // deep orange
        '#5d4037', // brown
        '#455a64', // blue gray
      ];
      data.tags_color = colors[code % colors.length];
    }

    return data;
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/authors" }),
  schema: z.object({
    username: z.string(),
    name: z.string(),
    image: z.string().optional(),
    cover: z.string().optional().nullable(),
    location: z.string().optional(),
    website: z.string().optional().or(z.literal('')).nullable(),
    twitter: z.string().optional().or(z.literal('')).nullable(),
    facebook: z.string().optional().or(z.literal('')).nullable(),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx,html}', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    layout: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
  }),
});

export const collections = {
  'posts': postsCollection,
  'authors': authorsCollection,
  'pages': pagesCollection,
};
