import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages";
import "./css/tailwind.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();
import { createHead } from "@vueuse/head";
import MarkdownWrapper from "./components/MarkdownWrapper.vue";

const app = createApp(App);
const head = createHead();

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.use(head);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("markdownwrapper", MarkdownWrapper);
app.mount("#app");
