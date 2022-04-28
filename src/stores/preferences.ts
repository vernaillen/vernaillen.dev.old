import { defineStore } from "pinia";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  valueDark: "ud-dark",
  valueLight: "ud-light",
});
const toggleUseDark = useToggle(isDark);

export const usePreferences = defineStore("preferences", {
  state: () => ({
    dark: isDark.value,
  }),
  actions: {
    toggleDark() {
      this.dark = !this.dark;
      toggleUseDark();
    },
  },
});
