<template>
  <div id="audioMotionAnalyzer" ref="audioMotionAnalyzer"></div>
</template>
<script setup lang="ts">
import { AudioMotion } from "@/classes/audio";
import { inject, onMounted, ref } from "vue";
const audioMotionAnalyzer = ref(null);
const audioMotion: AudioMotion = inject("audioMotion");
const props = defineProps(["options", "audioEl"]);
onMounted(() => {
  audioMotion.init(audioMotionAnalyzer.value, props.options);
});
</script>
