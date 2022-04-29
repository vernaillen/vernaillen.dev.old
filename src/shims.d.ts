import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    frontmatter: any;
  }
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module "*.md" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export default component;
}

declare module "*.svg?component" {
  import { FunctionalComponent, SVGAttributes } from "vue";
  const src: FunctionalComponent<SVGAttributes>;
  export default src;
}

declare module "*.svg" {
  import { FunctionalComponent, SVGAttributes } from "vue";
  const src: FunctionalComponent<SVGAttributes>;
  export default src;
}

declare module "vite-svg-loader" {
  import { Plugin } from "vite";
  function svgLoader(options?: { svgoConfig?: Object; svgo?: boolean }): Plugin;
  export default svgLoader;
}

declare module "virtual:pwa-register/vue" {
  // @ts-ignore ignore when vue is not installed
  import type { Ref } from "vue";

  export type RegisterSWOptions = {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (
      registration: ServiceWorkerRegistration | undefined
    ) => void;
    onRegisterError?: (error: any) => void;
  };

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>;
    offlineReady: Ref<boolean>;
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
