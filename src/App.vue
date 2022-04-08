<template>
  <router-view />
</template>

<script setup>
  import { useHead } from '@vueuse/head';
  import WOW from "wow.js";
  useHead({
    title: 'Vernaillen.dev',
    meta: [
      { name: 'description', content: 'Wouter Vernaillen - Freelance Full Stack Java & JavaScript Developer' },
    ],
  })
  new WOW().init();
</script>
