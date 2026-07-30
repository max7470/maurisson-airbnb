// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://maurisson.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-BE',
          nl: 'nl-BE',
          en: 'en',
          de: 'de',
        },
      },
      // `trailingSlash: 'ignore'` fait émettre au sitemap des URLs en `/room/`,
      // alors que le <link rel="canonical"> de BaseLayout déclare `/room`. Les
      // deux répondent 200 : Google indexait `/room` et classait `/room/` en
      // « page en double, URL canonique différente de celle de l'utilisateur ».
      // On aligne le sitemap sur la canonical. Les racines (`/`, `/en/`…)
      // gardent leur slash — c'est exactement ce que leur canonical déclare.
      serialize: (item) => {
        const strip = (u) => {
          const parsed = new URL(u);
          if (!/^\/(?:[a-z]{2}\/)?$/.test(parsed.pathname)) {
            parsed.pathname = parsed.pathname.replace(/\/$/, '');
          }
          return parsed.toString();
        };
        item.url = strip(item.url);
        if (item.links) {
          item.links = item.links.map((l) => ({ ...l, url: strip(l.url) }));
        }
        return item;
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'nl', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
