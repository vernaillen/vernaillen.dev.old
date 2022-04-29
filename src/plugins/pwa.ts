import { defineAsyncComponent } from "vue";
import type { UserModule } from "@/types";

const intervalMS: number = 60 * 60 * 1000;

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ app, isClient, router }) => {
  if (!isClient) return;

  router.isReady().then(async () => {
    app.component(
      "reload-prompt",
      defineAsyncComponent(() => import("@/components/ReloadPrompt.vue"))
    );
    const { useRegisterSW } = await import("virtual:pwa-register/vue");
    useRegisterSW({
      immediate: true,
      onRegistered(r: ServiceWorkerRegistration) {
        r &&
          setInterval(() => {
            r.update();
          }, intervalMS);
      },
    });
  });
};
