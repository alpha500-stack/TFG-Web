import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static'; // 👈 AÑADE ESTO

export default defineConfig({
  output: 'static',                        // 👈 AÑADE ESTO
  integrations: [tailwind()],
  adapter: vercel(),                       // 👈 AÑADE ESTO
});