// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-gtag',
    'nuxt-icon',
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
    'animate.css/animate.min.css',
  ],
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/vernaillendev',
    },
  },
  gtag: {
    id: 'G-7E8842XFRB',
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
})
