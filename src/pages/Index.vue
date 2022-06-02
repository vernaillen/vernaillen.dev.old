<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const SVGHomeLeft = defineAsyncComponent(
  () => import("@/assets/svg/home-left.svg")
);
const SVGHomeRight = defineAsyncComponent(
  () => import("@/assets/svg/home-right.svg")
);
</script>

<template>
  <header-component />
  <section
    id="home"
    class="ud-relative ud-z-10 ud-pt-[160px] ud-pb-[120px] xl:ud-pt-[190px] xl:ud-pb-[160px] 2xl:ud-pt-[220px] 2xl:ud-pb-[200px]"
  >
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-px-4">
          <div
            class="ud-mx-auto ud-max-w-[570px] ud-text-center animated fadeIn"
          >
            <h1
              class="ud-text-black dark:ud-text-white ud-font-bold ud-text-3xl sm:ud-text-4xl md:ud-text-5xl ud-leading-tight sm:ud-leading-tight md:ud-leading-tight ud-mb-20"
            >
              Wouter Vernaillen
            </h1>
            <p
              class="ud-font-medium ud-text-lg md:ud-text-xl ud-leading-relaxed md:ud-leading-relaxed ud-text-body-color dark:ud-text-white dark:ud-opacity-90 ud-mt-24 ud-mb-10"
            >
              Freelance Full Stack Developer
            </p>
            <p
              class="ud-font-medium ud-text-md md:ud-text-lg ud-leading-relaxed md:ud-leading-relaxed ud-text-body-color dark:ud-text-white dark:ud-opacity-90 ud-mb-10"
            >
              Java, Spring, Vue & Liferay
            </p>
            <div class="ud-flex ud-items-center ud-justify-center ud-mt-10">
              <router-link
                to="/about"
                class="ud-text-base ud-font-semibold ud-text-white ud-bg-primary ud-py-3 ud-px-6 hover:ud-bg-opacity-80 ud-mx-2 ud-my-10 ud-rounded-md animated-duration-3s animated fadeIn"
              >
                About Wouter
              </router-link>
              <router-link
                to="/blog"
                class="ud-text-base ud-font-semibold ud-text-black ud-bg-black ud-bg-opacity-10 dark:ud-text-white dark:ud-bg-white dark:ud-bg-opacity-20 ud-py-3 ud-px-6 hover:ud-bg-opacity-20 dark:hover:ud-bg-opacity-20 ud-mx-2 ud-my-10 ud-rounded-md animated-duration-3s animated fadeIn"
              >
                Blog
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div> -->
    <div class="svg-right ud-absolute ud-top-0 ud-right-0 ud-z-[-1]">
      <SVGHomeRight />
    </div>
    <div class="svg-left ud-absolute ud-bottom-0 ud-left-0 ud-z-[-1]">
      <SVGHomeLeft />
    </div>
  </section>
  <footer-component />
</template>

<style scoped>
@media (max-width: 959px) {
  .svg-right svg,
  .svg-left svg {
    width: 50%;
  }
  .svg-right svg {
    margin-left: auto;
  }
  .svg-left svg {
    margin-right: auto;
  }
}
</style>
