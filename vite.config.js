import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown, { link, meta } from "vite-plugin-md";
import LinkAttributes from 'markdown-it-link-attributes'
import Anchor from "markdown-it-anchor";
import Prism from "markdown-it-prism";
import Pages from "vite-plugin-pages";
import generateSitemap from 'vite-plugin-pages-sitemap'
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperComponent: "markdown-wrapper",
      wrapperClasses: "prose m-auto",
      builders: [link(), meta()],
      markdownItSetup(md) {
        md.use(Anchor);
        md.use(Prism);
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
      },
      headEnabled: true,
      linkTransforms: link(),
    }),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
      onRoutesGenerated: routes => (generateSitemap({ 
        hostname: 'https://vernaillen.dev/',
        routes 
      })),
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Vernaillen.dev',
        short_name: 'Vernaillen.dev',
        description: 'Wouter Vernaillen - Full Stack Java & JavaScript Developer',
        background_color: '#eeeeee',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
  },
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["src/**/*.test.ts","test/**/*.test.ts"],
    excludeNodeModules: true,
    environment: "jsdom",
    coverage: {
      reporter: ['text', 'lcov'],
      all: true,
      include: ["src/**/*.vue"],
    },
    extension: [".vue"],
  },
  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
});
