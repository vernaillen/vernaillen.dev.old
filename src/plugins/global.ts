import { defineAsyncComponent } from "vue";
import type { UserModule } from "@/types";
import MarkdownWrapper from "@/components/MarkdownWrapper.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
import YearsOfExperience from "@/components/YearsOfExperience.vue";
import DarkToggler from "@/components/DarkToggler.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import ContactForm from "@/components/ContactForm.vue";

export const install: UserModule = ({ app }) => {
  /* declare global components */
  app.component("markdown-wrapper", MarkdownWrapper);
  app.component("header-component", HeaderComponent);
  app.component("breadcrumb-component", BreadcrumbComponent);
  app.component("years-of-experience", YearsOfExperience);
  app.component("dark-toggler", DarkToggler);
  app.component("image-gallery", ImageGallery);
  app.component("contact-form", ContactForm);
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
