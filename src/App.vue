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
  <client-only>
    <my-audio-motion-analyzer />
  </client-only>
  <easy-lightbox />
</template>
