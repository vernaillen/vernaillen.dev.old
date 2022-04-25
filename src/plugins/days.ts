import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";
import type { UserModule } from '~/types'

function formatDate (d: string) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
}

export const install: UserModule = ({ app }) => {
  dayjs.extend(LocalizedFormat);
  app.config.globalProperties.$formatDate = formatDate;
}
