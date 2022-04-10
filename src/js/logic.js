import dayjs from 'dayjs'

export function formatDate(d) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
}
