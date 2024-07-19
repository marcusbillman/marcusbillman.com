import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

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
