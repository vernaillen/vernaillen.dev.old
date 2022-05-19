import type { UserModule } from "@/types";
import VueAudiomotionAnalyzer from "vue-audiomotion-analyzer";

export const install: UserModule = ({ app }) => {
  app.use(VueAudiomotionAnalyzer);
};
