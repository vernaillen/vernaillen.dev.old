import { defineStore } from 'pinia'

export const usePlayerState = defineStore('playerState', {
  state: () => ({
    isPlaying: false,
    time: 0
  }),
  actions: {
    updatePlaying (isPlaying: boolean) {
      this.isPlaying = isPlaying
    },
    updateTime (newTime: number) {
      this.time = newTime
    }
  }
})
