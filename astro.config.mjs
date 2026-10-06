// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  site: 'https://ritmos.devparada.dev/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
