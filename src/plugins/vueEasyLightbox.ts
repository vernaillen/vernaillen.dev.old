import VueEasyLightbox from 'vue-easy-lightbox'
import type { UserModule } from './userModule'

export const install: UserModule = ({ app }) => {
  app.use(VueEasyLightbox)
}
