<script setup lang="ts">
definePageMeta({
  documentDriven: false,
})
setMetaData('Home', false)
</script>

<template>
  <div>
    <NuxtLayout>
      <main id="home" class="flex flex-col z-10 pt-[160px] pb-[100px] xl:pt-[190px] xl:pb-[160px] 2xl:pt-[220px] 2xl:pb-[200px]">
        <div class="container">
          <div class="flex flex-wrap mx-[-16px]">
            <div class="w-full px-4">
              <div class="mx-auto max-w-[570px] text-center animate__animated animate__fadeIn">
                <h1 class="text-dark dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-tight md:leading-tight mb-20 animate__animated animate__pulse">
                  Wouter Vernaillen
                </h1>
                <p class="font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mt-24 mb-10">
                  Freelance Full Stack Developer
                </p>
                <p class="font-medium text-md md:text-lg leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 mb-10">
                  Java, Spring, Vue, Nuxt <NuxtLink href="https://nuxt.com" target="_blank">
                    <SvgoNuxtIconGreen class="!inline-block !mt-[-1px]" filled="false" width="18" height="18" viewBox="0 0 900 900" />
                  </NuxtLink> + DevOps
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

        <section id="instagram" class="container mx-auto pt-52 px-10">
          <div class="flex flex-wrap justify-center">
            <NuxtLink to="https://www.instagram.com/woutervernaillen/" target="_blank">
              <Icon name="mdi:instagram" class="block text-gray-500 hover:text-primary" size="24" />
            </NuxtLink>
          </div>
          <div class="flex flex-wrap justify-center mx-[-34px]">
            <InstagramIframe />
          </div>
        </section>
        <div class="svg-right absolute top-0 right-0 left-1/2 lg:left-2/3 pl-8 sm:pl-14 z-[-1] overflow-hidden">
          <SvgoHomeRight class="!w-full !h-screen" filled="false" />
        </div>
        <div class="svg-left absolute bottom-24 left-10 z-[-1] opacity-30 block overflow-hidden">
          <SvgoHomeLeft class="!w-full !h-auto" filled="false" />
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
