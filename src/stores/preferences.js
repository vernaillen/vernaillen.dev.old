import { defineStore } from "pinia";

export const usePreferences = defineStore("preferences", {
  state: () => ({
    dark: true,
  }),
  actions: {
    toggleDark() {
      console.log('toggleDark to: ' + !this.dark);
      this.dark = !this.dark;
    },
  },
});
