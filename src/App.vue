<script setup lang="ts">
import { useHead } from "@vueuse/head";
import MyAudioMotionAnalyzer from "@/components/MyAudioMotionAnalyzer.vue";
import ReloadPrompt from "@/components/ReloadPrompt.vue";

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
</script>

<template>
  <router-view />
  <client-only>
    <my-audio-motion-analyzer />
    <reload-prompt />
  </client-only>
</template>
