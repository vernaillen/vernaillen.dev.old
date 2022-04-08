<script setup>
  import HeaderComponent from "@/components/Header.vue"
  import FooterComponent from "@/components/Footer.vue"
  import { useHead } from '@vueuse/head';
  useHead({
    title: 'Vernaillen.dev',
    meta: [
      { name: 'description', content: 'Wouter Vernaillen\'s freelance consultancy website' },
    ],
  })
</script>
<template>
  <header-component/>
  <router-view />
  <footer-component/>
</template>
