import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueReCaptcha, {
    siteKey: '6LeL37UgAAAAAH0D_-DbYjVUKWkZ7K9G4YUSPLwg',
    loaderOptions: {
      useRecaptchaNet: true,
      autoHideBadge: true,
    },
  })
})
