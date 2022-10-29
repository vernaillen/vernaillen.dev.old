<script setup lang="ts">
import SvgHomeLeft from '@/components/svg/svg-home-left.svg?component'
import SvgHomeRight from '@/components/svg/svg-home-right.svg?component'
</script>

<template>
  <header-component />
  <section
    id="home"
    class="relative z-10 pt-[160px] pb-[120px] xl:pt-[190px] xl:pb-[160px] 2xl:pt-[220px] 2xl:pb-[200px]"
  >
    <div class="container">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full px-4">
          <div
            class="mx-auto max-w-[570px] text-center animated fadeIn"
          >
            <h1
              class="text-black dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-20 animated pulse"
            >
              Wouter Vernaillen
            </h1>
            <p
              class="font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mt-24 mb-10"
            >
              Freelance Full Stack Developer
            </p>
            <p
              class="font-medium text-md md:text-lg leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mb-10"
            >
              Java, Spring, Vue & Liferay
            </p>
            <div class="flex items-center justify-center mt-10">
              <router-link
                to="/blog"
                class="text-base font-semibold text-white bg-primary py-3 px-6 hover:bg-opacity-80 mx-2 my-10 rounded-md animated-duration-3s animated fadeIn"
              >
                Blog
              </router-link>
              <router-link
                to="/about"
                class="text-base font-semibold text-black bg-black bg-opacity-10 dark:text-white dark:bg-white dark:bg-opacity-20 py-3 px-6 hover:bg-opacity-20 dark:hover:bg-opacity-20 mx-2 my-10 rounded-md animated-duration-3s animated fadeIn"
              >
                About Wouter
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div> -->
    <div class="svg-right absolute top-0 right-0 z-[-1]">
      <SvgHomeRight />
    </div>
    <div class="svg-left absolute bottom-0 left-0 z-[-1]">
      <SvgHomeLeft />
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
