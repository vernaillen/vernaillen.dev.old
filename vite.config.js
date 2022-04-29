/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Markdown, { link, meta } from "vite-plugin-md";
import LinkAttributes from "markdown-it-link-attributes";
import Anchor from "markdown-it-anchor";
import Prism from "markdown-it-prism";
import Pages from "vite-plugin-pages";
import generateSitemap from "vite-plugin-pages-sitemap";
import eslintPlugin from "vite-plugin-eslint";
import { VitePWA } from "vite-plugin-pwa";
import { fileURLToPath, URL } from "url";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import svgLoader from "vite-svg-loader";

import "prismjs/components/prism-regex";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-xml-doc";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-json";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-java";
import "prismjs/components/prism-javadoclike";
import "prismjs/components/prism-javadoc";
import "prismjs/components/prism-jsdoc";

export default defineConfig({
  plugins: [
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/],
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
            target: "_blank",
            rel: "noopener",
          },
        });
      },
      headEnabled: true,
      linkTransforms: link(),
    }),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
      onRoutesGenerated: (routes) =>
        generateSitemap({
          hostname: "https://vernaillen.dev/",
          routes,
        }),
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
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "Wouter Vernaillen",
        short_name: "Vernaillen.dev",
        description: "Full Stack Java & JavaScript Developer",
        theme_color: "#ffffff",
        background_color: "#231f20",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    eslintPlugin(),
    svgLoader({
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["src/**/*.test.ts", "test/**/*.test.ts"],
    excludeNodeModules: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "lcov"],
      all: true,
      include: ["src/**/*.vue"],
    },
    extension: [".vue"],
    globals: true,
  },
  build: {
    rollupOptions: {
      external: ["virtual:pwa-register/vue"],
    },
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    format: "cjs",
  },
});
