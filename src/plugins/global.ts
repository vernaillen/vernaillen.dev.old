import type { UserModule } from './userModule'

export const install: UserModule = ({ app }) => {
  /* declare global properties */
  app.config.globalProperties.$primaryColor = '#9C8E1B'
}
