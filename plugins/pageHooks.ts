const { isMobileNavOpen } = useMobileNav()
const { isPageLoading, referrerIsHome } = usePageHooks()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    isPageLoading.value = true
  })
  nuxtApp.hook('page:finish', () => {
    isMobileNavOpen.value = false
    isPageLoading.value = false
    referrerIsHome.value = false
  })
})
