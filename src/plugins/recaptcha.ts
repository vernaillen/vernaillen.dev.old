import { VueReCaptcha } from 'vue-recaptcha-v3'
import type { UserModule } from './userModule'

export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    app.use(VueReCaptcha, {
      siteKey: '6LeL37UgAAAAAH0D_-DbYjVUKWkZ7K9G4YUSPLwg',
      loaderOptions: {
        useRecaptchaNet: true,
        autoHideBadge: true,
      },
    })
  }
}
