/// <reference types="vite-svg-loader" />

<script setup lang="ts">
import { useRoute } from '#imports'
const { isMobileNavOpen } = useMobileNav()

useHead({
  titleTemplate: (title?: string) => `${title} - Wouter Vernaillen: Freelance Full Stack Java, Vue & Nuxt Developer`,
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'dark:bg-black'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml'
    }
  ]
})
onMounted(() => {
  window.addEventListener('resize', () => { isMobileNavOpen.value = false })
})
const route = useRoute()
const isIG = computed(() => {
  return route.path.startsWith('/instagram')
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator v-if="!isIG" color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />
    <header-component v-if="!isIG" />
    <NuxtPage />
    <footer-component v-if="!isIG" />
  </div>
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}
</style>
