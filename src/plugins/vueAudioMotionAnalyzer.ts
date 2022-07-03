import VueAudiomotionAnalyzerPlugin from 'vue-audiomotion-analyzer'
import type { UserModule } from './userModule'

export const install: UserModule = ({ app }) => {
  app.use(VueAudiomotionAnalyzerPlugin)
}
