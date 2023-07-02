// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@vernaillen/nuxt-base-layer'
  ],

  modules: [
    '@nuxt/content',
    '@nuxthq/studio',
    '@nuxthq/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    'nuxt-icon',
    'nuxt-svgo',
    'nuxt-vitest'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/markdown.css',
    '~/assets/css/prose.css',
    'animate.css/animate.min.css'
  ],

  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillendev'
    }
  },

  svgo: {
    svgo: true,
    autoImportPath: './assets/svg/',

    defaultImport: 'component',
    svgoConfig: {
      multipass: true
    }
  },

  plausible: {
    apiHost: 'https://vernaillen.dev/plio'
  },

  colorMode: {
    classSuffix: ''
  },

  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false,
      remarkPlugins: [
        'remark-breaks',
        'remark-directive-rehype'
      ],
      rehypePlugins: {
        'rehype-external-links': {
          target: '_blank'
        }
      }
    }
  },

  devtools: { enabled: true },
  plugins: [
    '~/plugins/pageHooks.ts',
    '~/plugins/global.ts'
  ]
})
