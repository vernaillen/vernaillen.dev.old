<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { createToaster } from "@meforma/vue-toaster";
import MyAudioMotionAnalyzer from "@/components/MyAudioMotionAnalyzer.vue";

useHead({
  title: "Vernaillen.dev",
  meta: [
    {
      name: "description",
      content:
        "Wouter Vernaillen - Freelance Full Stack Java & JavaScript Developer",
    },
  ],
});
const toaster = createToaster({ queue: true });
toaster.show(`Welcome to Vernaillen.dev!`);
toaster.show(`Hit play in the menu to listen to a song I made`);
</script>

<template>
  <router-view />
  <client-only>
    <my-audio-motion-analyzer />
  </client-only>
</template>
