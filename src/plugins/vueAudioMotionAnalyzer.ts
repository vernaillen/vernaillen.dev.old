import { defineAsyncComponent } from "vue";
import type { UserModule } from "@/types";

export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    app.use(defineAsyncComponent(() => import("vue-audiomotion-analyzer")));
  }
};
