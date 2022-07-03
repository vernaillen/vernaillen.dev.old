import type { UserModule } from "./userModule";
import VueEasyLightbox from "vue-easy-lightbox";

export const install: UserModule = ({ app }) => {
  app.use(VueEasyLightbox);
};
