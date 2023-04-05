import { useMobileNav } from '@/stores/mobileNav'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    const mobileNav = useMobileNav()
    mobileNav.hide()
  })
})
