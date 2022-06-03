import { useDark } from "@vueuse/core";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";

export const isDark = useDark({
  valueDark: "ud-dark",
  valueLight: "ud-light",
});

dayjs.extend(LocalizedFormat);
export function formatDate(d: string) {
  const date = dayjs(d);
  return date.format("D MMM YYYY");
}
export function currentYear() {
  const date = dayjs();
  return date.format("YYYY");
}
export function yearsOfExperience() {
  const startYear: number = parseInt(dayjs("01/02/1999").format("YYYY"));
  const currentYear: number = parseInt(dayjs().format("YYYY"));
  return currentYear - startYear;
}
