import { defineStore } from "pinia";

export const usePreferences = defineStore("preferences", {
  state: () => ({
    dark: true,
    primaryColor: '#9C8E1B'
  }),
  actions: {
    toggleDark () {
      this.dark = !this.dark;
    }
  },
});
