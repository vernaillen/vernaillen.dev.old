const { isMobileNavOpen } = useMobileNav()
const { isPageLoading, referrerIsHome } = usePageHooks()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    isPageLoading.value = true
  })
  nuxtApp.hook('page:finish', () => {
    setTimeout(() => {
      isMobileNavOpen.value = false
    }, 140) // time for the page transition to finish
    isPageLoading.value = false
    referrerIsHome.value = false
  })
})
