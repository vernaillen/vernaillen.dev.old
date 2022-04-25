<script setup lang="ts">
import { useHead } from "@vueuse/head";
import MyAudioMotionAnalyzer from "~/components/MyAudioMotionAnalyzer.vue";

useHead({
  title: "Vernaillen.dev",
  meta: [
    {
      name: "description",
      content: "Wouter Vernaillen - Freelance Full Stack Java & JavaScript Developer",
    },
  ],
});
</script>

<template>
  <router-view />
  <client-only>
    <MyAudioMotionAnalyzer />
  </client-only>
</template>
