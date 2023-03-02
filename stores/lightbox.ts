import { defineStore } from 'pinia'

export const useLightbox = defineStore('lightbox', {
  state: () => ({
    images: [''],
    visible: false,
    index: 0,
  }),
  actions: {
    setImages(imgs: string[]) {
      this.images = imgs
    },
    show(i: number) {
      this.index = i
      this.visible = true
    },
    hide() {
      this.visible = false
    },
  },
})
