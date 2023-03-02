<script setup lang="ts">
import SvgHomeLeft from '@/components/svg/svg-home-left.svg?component'
import SvgHomeRight from '@/components/svg/svg-home-right.svg?component'
import SvgNuxtIconGreen from '@/components/svg/svg-nuxt-icon-green.svg?component'

definePageMeta({
  documentDriven: false,
})
useHead({
  title: 'Home',
})
setMetaData('Home')
</script>

<template>
  <div>
    <NuxtLayout>
      <main
        id="home"
        class="flex flex-col z-10 pt-[160px] pb-[120px] xl:pt-[190px] xl:pb-[160px] 2xl:pt-[220px] 2xl:pb-[200px] mb-100"
      >
        <div class="container">
          <div class="flex flex-wrap mx-[-16px]">
            <div class="w-full px-4">
              <div
                class="mx-auto max-w-[570px] text-center animate__animated animate__fadeIn"
              >
                <h1
                  class="text-dark dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-20 animate__animated animate__pulse"
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
                  Java, Spring, Vue, Nuxt <a href="https://nuxt.com" target="_blank">
                    <SvgNuxtIconGreen class="inline-block mt-[-1px]" width="18" height="18" viewBox="0 0 900 900" />
                  </a> + DevOps
                </p>
                <div id="action-buttons" class="flex items-center justify-center mt-10">
                  <NuxtLink
                    to="/blog"
                    class="text-base font-semibold text-white bg-primary py-3 px-6 hover:bg-opacity-80 mx-2 my-10 rounded-md animated-duration-3s animate__animated animate__fadeIn"
                  >
                    Blog
                  </NuxtLink>
                  <NuxtLink
                    to="/about"
                    class="text-base font-semibold text-dark bg-black bg-opacity-10 dark:text-white dark:bg-white dark:bg-opacity-20 py-3 px-6 hover:bg-opacity-20 dark:hover:bg-opacity-20 mx-2 my-10 rounded-md animated-duration-3s animate__animated animate__fadeIn"
                  >
                    About Wouter
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div> -->
        <div class="svg-right absolute top-0 right-0 left-1/2 md:left-auto z-[-1]">
          <SvgHomeRight />
        </div>
        <div class="svg-left absolute bottom-20 left-10 z-[-1] opacity-30 hidden md:block">
          <SvgHomeLeft />
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
