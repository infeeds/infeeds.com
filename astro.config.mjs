// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://infeeds.com',
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: true
    }
  }
});
