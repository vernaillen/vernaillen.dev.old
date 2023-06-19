import { createSharedComposable } from '@vueuse/core'

const _isPageLoading = () => {
  const isPageLoading = ref(false)
  const referrerIsHome = ref(false)

  return {
    isPageLoading, referrerIsHome
  }
}
export const usePageHooks = createSharedComposable(_isPageLoading)
