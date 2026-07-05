// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Sitemap is generated manually in src/pages/sitemap.xml.ts so we can read
// collection frontmatter and emit <lastmod>, <changefreq>, <priority> and
// <image:image> entries. The default @astrojs/sitemap only emits <loc>.
export default defineConfig({
  site: 'https://infeeds.com',
  vite: {
    build: {
      cssMinify: true
    }
  }
});
