import { createSharedComposable } from '@vueuse/core'

const _useMobileNav = () => {
  const isMobileNavOpen = ref(false)

  return {
    isMobileNavOpen
  }
}

export const useMobileNav = createSharedComposable(_useMobileNav)
