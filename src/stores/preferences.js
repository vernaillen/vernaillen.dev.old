import { defineStore } from "pinia";

export const usePreferences = defineStore("preferences", {
  state: () => ({
    dark: true,
  }),
  actions: {
    toggleDark() {
      this.dark = !this.dark;
    },
  },
});
