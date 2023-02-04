<script setup lang="ts">
useHead({
  title: 'Vernaillen.dev',
  meta: [
    {
      name: 'description',
      content: 'Wouter Vernaillen - Freelance Full Stack Java & Vue Developer',
    },
  ],
})
</script>

<template>
  <router-view />
  <footer-component />
  <easy-lightbox />
</template>
