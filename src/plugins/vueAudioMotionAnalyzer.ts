import type { UserModule } from "@/types";
import VueAudiomotionAnalyzer from "vue-audiomotion-analyzer";

export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    app.component("vue-audiomotion-analyzer", VueAudiomotionAnalyzer);
  }
};
