import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";

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
  return parseInt(currentYear()) - startYear;
}
