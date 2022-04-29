import type { UserModule } from "@/types";

const intervalMS: number = 60 * 60 * 1000;

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: UserModule = ({ isClient, router }) => {
  if (!isClient || typeof window !== "undefined") return;

  router.isReady().then(async () => {
    const { useRegisterSW } = await import("virtual:pwa-register/vue");
    console.log("useRegisterSW: " + useRegisterSW);
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
