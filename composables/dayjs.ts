import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'

dayjs.extend(LocalizedFormat)
export const longDateFormat = (d: string) => {
  const appConfig = useAppConfig()
  const date = dayjs(d)
  return date.format(appConfig.longDateFormat)
}
export const shortDateFormat = (d: string) => {
  const appConfig = useAppConfig()
  const date = dayjs(d)
  return date.format(appConfig.shortDateFormat)
}
export const currentYear = () => {
  const date = dayjs()
  return date.format('YYYY')
}
export const yearsOfExperience = () => {
  const startYear: number = parseInt(dayjs('01/02/1999').format('YYYY'))
  return parseInt(currentYear()) - startYear
}
