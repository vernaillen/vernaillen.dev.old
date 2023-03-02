<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => `${title} - Wouter Vernaillen: Freelance Full Stack Java, Vue & Nuxt Developer`,
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'dark:bg-black',
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Wouter Vernaillen - Freelance Full Stack Java, Vue & Nuxt Developer',
    },
    {
      property: 'og:title',
      content: (title?: string) => `${title} - Wouter Vernaille: Freelance Full Stack Java, Vue & Nuxt Developer`,
    },
    {
      property: 'og:description',
      content: 'Wouter Vernaillen - Freelance Full Stack Java, Vue & Nuxt Developer',
    },
    {
      property: 'og:image',
      content: 'https://vernaillen.dev/vernaillendev-website.png',
    },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,rgb(156 142 27/40%) 0%,rgb(156 142 27/60%) 80%,rgb(156 142 27/40%) 100%)" />
  <header-component />
  <NuxtPage />
  <footer-component />
  <easy-lightbox />
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}
</style>
