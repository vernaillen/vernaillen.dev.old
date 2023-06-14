import dayjs, { extend } from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'

extend(LocalizedFormat)
export function longDateFormat (d: string) {
  const appConfig = useAppConfig()
  const date = dayjs(d)
  return date.format(appConfig.longDateFormat)
}
export function shortDateFormat (d: string) {
  const appConfig = useAppConfig()
  const date = dayjs(d)
  return date.format(appConfig.shortDateFormat)
}
export function currentYear () {
  const date = dayjs()
  return date.format('YYYY')
}
export function yearsOfExperience () {
  const startYear: number = parseInt(dayjs('01/02/1999').format('YYYY'))
  return parseInt(currentYear()) - startYear
}
