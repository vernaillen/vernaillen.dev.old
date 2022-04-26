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
