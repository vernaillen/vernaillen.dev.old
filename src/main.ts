import { ViteSSG } from 'vite-ssg'
import App from "@/App.vue";
import routes from "~pages";
import "@/css/markdown.css";
import "@/css/main.css";
import "@/css/prose.css";
import 'animate.css/animate.compat.css';

const scrollBehavior = (_to: any, _from: any, _savedPosition: any) => {
  return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  }
)
