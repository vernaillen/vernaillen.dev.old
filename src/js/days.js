import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat.js";

function formatDate(d) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
}

export default {
  install(app, _options) {
    dayjs.extend(LocalizedFormat);
    app.config.globalProperties.$formatDate = formatDate;
  }
}