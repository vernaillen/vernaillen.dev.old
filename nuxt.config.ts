// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    '@vernaillen/nuxt-base-layer'
  ],

  modules: [
    '@hypernym/nuxt-anime',
    '@nuxt/content',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/color-mode',
    '@nuxtjs/plausible',
    'nuxt-svgo',
    'nuxt-time'
  ],

  css: [
    '~/assets/css/main.css',
    '~/assets/css/markdown.css',
    '~/assets/css/prose.css',
    'animate.css/animate.min.css'
  ],

  image: {
    domains: ['cdn.fosstodon.org'],
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillendev'
    }
  },

  anime: {
    composables: true
  },

  social: {
    networks: {
      mastodon: {
        identifier: 'vernaillen@fosstodon.org',
        options: {
          excludeReplies: true,
          excludeReblogs: false,
          limit: 100
        }
      }
    }
  },

  ui: {
    icons: ['heroicons', 'lucide', 'mdi', 'twemoji', 'uil', 'logos']
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

  devtools: { enabled: false },
  plugins: [
    '~/plugins/pageHooks.ts',
    '~/plugins/easyLightbox.ts',
    '~/plugins/global.ts'
  ]
})
