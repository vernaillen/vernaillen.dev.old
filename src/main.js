import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./router/routes.js";
import { createRouter, createWebHistory } from "vue-router";
import "./css/tailwind.css";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
