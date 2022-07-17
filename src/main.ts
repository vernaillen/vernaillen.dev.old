import { ViteSSG } from 'vite-ssg'
import type { UserModule } from './plugins/userModule'
import routes from '~pages'
import '@/css/markdown.css'
import '@/css/main.css'
import '@/css/prose.css'
import 'animate.css/animate.compat.css'
import App from '@/App.vue'

const scrollBehavior = (
  _to: unknown,
  _from: unknown,
  _savedPosition: unknown,
) => {
  return { top: 0 }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./plugins/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
