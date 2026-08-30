// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update if the final domain differs from thegeolog.com
  site: 'https://thegeolog.com',
  integrations: [sitemap()]
});