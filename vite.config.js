import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown, { link, meta } from "vite-plugin-md";
import Anchor from "markdown-it-anchor";
import Prism from "markdown-it-prism";
import Pages from "vite-plugin-pages";
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
      },
      headEnabled: true,
      linkTransforms: link(),
    }),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        const md = fs.readFileSync(path, "utf-8");
        const { data } = matter(md);
        route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        return route;
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA(),
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
    include: ["src/**/*.spec.js","test/**/*.spec.js"],
    excludeNodeModules: true,
    environment: "jsdom",
    coverage: {
      reporter: ['text', 'lcov'],
      all: true,
      include: ["src/**/*.js", "src/**/*.vue"],
    },
    extension: [".js", ".vue"],
  },
  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
});
