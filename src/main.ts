/* eslint-disable @typescript-eslint/no-unused-vars */
import { ViteSSG } from "vite-ssg";
import routes from "~pages";
import "@/css/markdown.css";
import "@/css/main.css";
import "@/css/prose.css";
import "animate.css/animate.compat.css";
import App from "@/App.vue";

const scrollBehavior = (
  _to: unknown,
  _from: unknown,
  _savedPosition: unknown
) => {
  return { top: 0 };
};

export const createApp = ViteSSG(App, { routes, scrollBehavior }, (ctx) => {
  Object.values(import.meta.globEager("./plugins/*.ts")).forEach((plugin) =>
    plugin.install?.(ctx)
  );
});
