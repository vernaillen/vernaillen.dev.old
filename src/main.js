import { ViteSSG } from 'vite-ssg'
import { createPinia } from "pinia";
import NProgress from "nprogress";
import days from "@/js/days";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import ListPosts from "@/components/ListPosts.vue";
import App from "@/App.vue";
import routes from "~pages";

import "@/css/markdown.css";
import "@/css/main.css";
import "@/css/prose.css";
import 'animate.css/animate.compat.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarDays, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCalendarDays, faLocationPin, faInstagram, faLinkedin);

const scrollBehavior = (_to, _from, _savedPosition) => {
    return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient }) => {
    if (isClient) {
      router.beforeEach(() => { NProgress.start() })
      router.afterEach(() => { NProgress.done() })
    }
    app.use(createPinia());
    app.use(days);
    app.component("markdown-wrapper", MarkdownWrapper);
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.component("list-posts", ListPosts);
  }
)
