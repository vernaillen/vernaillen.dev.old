<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
const FooterComponent = defineAsyncComponent(
  () => import("@/components/FooterComponent.vue")
);
const SVG404 = defineAsyncComponent(() => import("@/assets/svg/404.svg"));
const SVG404Background = defineAsyncComponent(
  () => import("@/assets/svg/background-404.svg")
);
</script>

<template>
  <header-component />
  <section class="ud-relative ud-z-10 ud-pt-[180px] ud-pb-[120px]">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-px-4 animated fadeIn">
          <div class="ud-max-w-[530px] ud-mx-auto ud-text-center">
            <div class="mx-auto ud-mb-9 ud-text-center">
              <SVG404 />
            </div>
            <h3
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-3xl sm:ud-text-4xl ud-mb-4"
            >
              Sorry, the page can’t be found
            </h3>
            <p
              class="ud-font-medium ud-text-body-color ud-text-base sm:ud-text-lg ud-leading-relaxed sm:ud-leading-relaxed ud-mb-10"
            >
              The page you were looking for appears to have been moved, deleted
              or does not exist.
            </p>
            <router-link
              to="/"
              class="ud-text-base ud-font-bold ud-text-white ud-bg-primary ud-py-3 ud-px-8 md:ud-px-9 lg:ud-px-8 xl:ud-px-9 hover:ud-bg-white hover:ud-text-primary ud-shadow-signUp ud-rounded-md"
            >
              Back to Homepage
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="ud-hidden sm:ud-block ud-absolute ud-left-0 ud-bottom-0 ud-z-[-1]"
    >
      <SVG404Background />
    </div>
    <div
      class="ud-hidden sm:ud-block ud-absolute ud-top-0 ud-right-0 ud-z-[-1]"
    >
      <SVG404Background />
    </div>
  </section>
  <footer-component />
</template>
