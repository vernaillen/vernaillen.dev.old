import { defineStore } from "pinia";
import { useDark } from "@vueuse/core";

const isDark = useDark({
  valueDark: "ud-dark",
  valueLight: "ud-light",
});

export const usePreferences = defineStore("preferences", {
  state: () => ({
    dark: isDark.value,
  }),
  actions: {
    toggleDark() {
      isDark.value = !isDark.value;
      this.dark = isDark.value;
    },
  },
});
