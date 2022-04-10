import { ViteSSG } from 'vite-ssg'
import { createPinia } from "pinia";
import NProgress from "nprogress";
import days from "@/js/days";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import ListPosts from "@/components/ListPosts.vue";
import App from "@/App.vue";
import routes from "~pages";

import "@/css/main.css";
import "@/css/prose.css";
import "@/css/markdown.css";
import 'animate.css/animate.compat.css';

const scrollBehavior = (_to, _from, _savedPosition) => {
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  // function to have custom setups
  ({ app, router, isClient }) => {
    if (isClient) {
      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
    app.use(createPinia());
    app.use(days);
    app.component("markdown-wrapper", MarkdownWrapper);
    app.component("list-posts", ListPosts);
  },
)
