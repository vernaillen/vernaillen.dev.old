import type { UserModule } from "@/types";
import VueEasyLightbox from "vue-easy-lightbox";

export const install: UserModule = ({ app }) => {
  app.use(VueEasyLightbox);
};
