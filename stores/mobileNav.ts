import { defineStore } from 'pinia'

export const useMobileNav = defineStore('mobileNav', {
  state: () => ({
    visible: false,
  }),
  actions: {
    hide() {
      this.visible = false
    },
    show() {
      this.visible = true
    },
    toggle() {
      this.visible = !this.visible
    },
  },
})
