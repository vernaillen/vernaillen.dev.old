import { useDark } from "@vueuse/core";

export const isDark = useDark({
  valueDark: "ud-dark",
  valueLight: "ud-light",
});
