import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import routes from "~pages";
import { createRouter, createWebHistory } from "vue-router";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";
import ListPosts from "./components/ListPosts.vue";
import NProgress from "nprogress";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import { formatDate } from "@/js/logic";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();

import "./css/main.css";
import "./css/prose.css";
import "./css/markdown.css";
import "./css/animate.css";

const app = createApp(App);
const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
});
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

app.use(router);
app.use(head);

dayjs.extend(LocalizedFormat);
app.config.globalProperties.$formatDate = formatDate;
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("markdown-wrapper", MarkdownWrapper);
app.component("list-posts", ListPosts);
app.mount("#app");
