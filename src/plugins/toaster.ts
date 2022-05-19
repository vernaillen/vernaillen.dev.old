import type { UserModule } from "@/types";
import Toaster from "@meforma/vue-toaster";

export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    app.use(Toaster);
  }
};
