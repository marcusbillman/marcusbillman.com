import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sanity({
      projectId: '2l3afo6f',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: false,
    }),
  ],
});
