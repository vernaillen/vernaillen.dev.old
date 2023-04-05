import { useMobileNav } from '@/stores/mobileNav'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:transition:finish', () => {
    const mobileNav = useMobileNav()
    mobileNav.hide()
  })
})
