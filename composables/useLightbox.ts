import { createSharedComposable } from '@vueuse/core'

const _useLightbox = () => {
  const images: string[] = ['']
  const index = ref(0)
  const visible = ref(false)

  return {
    images, index, visible
  }
}

export const useLightbox = createSharedComposable(_useLightbox)
