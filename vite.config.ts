/// <reference types="vitest" />

import { URL, fileURLToPath } from 'url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-vue-markdown'
import LinkAttributes from 'markdown-it-link-attributes'
import Anchor from 'markdown-it-anchor'
import Prism from 'markdown-it-prism'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'
import eslintPlugin from 'vite-plugin-eslint'
import fs from 'fs-extra'
import matter from 'gray-matter'
import SVG from 'vite-svg-loader'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import { configDefaults } from 'vitest/config'

import 'prismjs/components/prism-regex'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-xml-doc'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-javadoclike'
import 'prismjs/components/prism-javadoc'
import 'prismjs/components/prism-jsdoc'

export default defineConfig({
  plugins: [
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
      exclude: ['**/components/*.vue'],
      onRoutesGenerated: routes =>
        generateSitemap({
          hostname: 'https://vernaillen.dev/',
          routes,
        }),
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, 'utf-8')
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        return route
      },
    }),
    Markdown({
      wrapperComponent: 'markdown-wrapper',
      markdownItSetup(md) {
        md.use(Anchor)
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
      headEnabled: true,
    }),

    eslintPlugin({
      exclude: ['/node_modules/', '**/vue-audiomotion-analyzer/dist/*.js'],
      failOnWarning: false,
      failOnError: false,
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'vitest'],
      dts: true, // generate TypeScript declaration
    }),
    Components({
      extensions: ['vue', 'md', 'svg', 'mock'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.svg$/, /\.mock$/],
    }),
    Inspect(), // only applies in dev mode
    SVG({
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
    coverage: {
      reporter: ['text', 'lcov'],
      all: true,
      include: ['src/**/*.vue'],
    },
    globals: true,
    setupFiles: ['test/vue-router-mock.setup.ts', 'test/matchMedia.setup.ts'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})
