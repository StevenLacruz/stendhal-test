// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.elefectostendhal.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    sitemap({
      filter: (page) => !page.includes('/keystatic'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      name: 'Figtree',
      cssVariable: '--font-figtree',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/figtree-latin-400-normal.woff2'],
            weight: '400',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/figtree-latin-600-normal.woff2'],
            weight: '600',
            style: 'normal',
          },
        ],
      },
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/instrument-serif-latin-400-normal.woff2'],
            weight: '400',
            style: 'normal',
          },
        ],
      },
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
  ],
});
