import { defineStore } from "pinia";
import { useDark, usePreferredDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  valueDark: "ud-dark",
  valueLight: "ud-light",
});
const toggleUseDark = useToggle(isDark);

export const usePreferences = defineStore("preferences", {
  state: () => ({
    dark: usePreferredDark().value,
  }),
  actions: {
    toggleDark() {
      toggleUseDark();
      this.dark = isDark.value;
    },
  },
});
