import type { UserModule } from "@/types";
import VueAudiomotionAnalyzerPlugin from "vue-audiomotion-analyzer";

export const install: UserModule = ({ app }) => {
  app.use(VueAudiomotionAnalyzerPlugin);
};
