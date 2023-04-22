// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@vernaillen/nuxt-base-layer',
  ],

  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    '@pinia/nuxt',
    'nuxt-svgo',
    'nuxt-vitest',
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: [
    '~/assets/css/markdown.css',
    '~/assets/css/main.css',
    '~/assets/css/prose.css',
  ],

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillendev',
    },
  },

  svgo: {
    autoImportPath: './assets/svg/',
    simpleAutoImport: true,
  },

  plausible: {
    apiHost: 'https://www.vernaillen.dev/plio',
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-breaks',
        'remark-directive-rehype',
      ],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank',
        },
      },
    },
  },

  devtools: { enabled: true },
})
