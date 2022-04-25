import { defineStore } from "pinia";

export const usePlayerState = defineStore("playerState", {
  state: () => ({
    isPlaying: false,
  }),
  actions: {
    updatePlaying (isPlaying: boolean) {
      this.isPlaying = isPlaying
    },
  },
});
