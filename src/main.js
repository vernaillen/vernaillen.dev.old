import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./css/tailwind.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

const routes = setupLayouts(generatedRoutes);
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
