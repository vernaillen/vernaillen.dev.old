import VueLazyLoad from 'vue3-lazyload'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyLoad, {
    /* loading: '',
        error: '',
        lifecycle: {
            loading: (el) => {
                el
                console.log('loading', el)
            },
            error: (el) => {
                console.log('error', el)
            },
            loaded: (el) => {
                console.log('loaded', el)
            }
        } */
  })
})
