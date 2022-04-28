import { defineAsyncComponent } from "vue";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";

export const install: UserModule = ({ app }) => {
  /* declare global components */
  app.component("markdown-wrapper", MarkdownWrapper);
  app.component(
    "player-controls",
    defineAsyncComponent(() => import("@/components/PlayerControls.vue"))
  );

  /* declare global properties */
  app.config.globalProperties.$primaryColor = "#9C8E1B";
};
