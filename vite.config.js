import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import Prism from "markdown-it-prism";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import { VitePWA } from "vite-plugin-pwa";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism);
      },
    }),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/*.vue"],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

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
    include: ["src/**/*.spec.js"],
    excludeNodeModules: true,
    environment: "jsdom",
    coverage: {
      all: true,
      include: ["src/**/*.js", "src/**/*.vue"],
    },
    extension: [".js", ".vue"],
  },
});
