import { defineAsyncComponent } from "vue";
import type { UserModule } from "@/types";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
import YearsOfExperience from "@/components/YearsOfExperience.vue";

export const install: UserModule = ({ app }) => {
  /* declare global components */
  app.component("markdown-wrapper", MarkdownWrapper);
  app.component("header-component", HeaderComponent);
  app.component("breadcrumb-component", BreadcrumbComponent);
  app.component("years-of-experience", YearsOfExperience);
  app.component(
    "player-controls",
    defineAsyncComponent(() => import("@/components/PlayerControls.vue"))
  );
  app.component(
    "social-icons",
    defineAsyncComponent(() => import("@/components/SocialIcons.vue"))
  );
  app.component(
    "footer-component",
    defineAsyncComponent(() => import("@/components/FooterComponent.vue"))
  );
  app.component(
    "svg-background-left1",
    defineAsyncComponent(() => import("@/assets/svg/background-left-1.svg"))
  );
  app.component(
    "svg-background-right1",
    defineAsyncComponent(() => import("@/assets/svg/background-right-1.svg"))
  );

  /* declare global properties */
  app.config.globalProperties.$primaryColor = "#9C8E1B";
};
