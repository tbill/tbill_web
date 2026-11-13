// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from a custom domain (see public/CNAME),
// so no `base` path is needed.
export default defineConfig({
  site: 'https://www.tbill.us',
  integrations: [
    sitemap({
      // Redirect pages shouldn't be listed for search engines.
      filter: (page) => !/\/(tbills|t-bills|treasury)\/$/.test(page),
    }),
  ],
});
