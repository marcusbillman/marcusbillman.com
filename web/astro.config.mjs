import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: '2l3afo6f',
      dataset: 'production',
      useCdn: false,
    }),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
