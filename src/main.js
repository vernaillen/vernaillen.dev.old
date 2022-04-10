import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { createPinia } from "pinia";
import days from "@/js/days";
import fontAwesome from "@/js/fontAwesome";
import pagesRouter from "@/js/pagesRouter";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import ListPosts from "@/components/ListPosts.vue";
import App from "@/App.vue";

import "@/css/main.css";
import "@/css/prose.css";
import "@/css/markdown.css";
import 'animate.css/animate.compat.css';

const app = createApp(App);
app.use(createPinia());
app.use(createHead());
app.use(days);
app.use(fontAwesome);
app.use(pagesRouter);
app.component("markdown-wrapper", MarkdownWrapper);
app.component("list-posts", ListPosts);
app.mount("#app");
