import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  compressHTML: true,
  site: 'https://breant.art',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      // « / » en français, « /en/ » en anglais : une seule langue par page.
      prefixDefaultLocale: false,
    },
  },
});
