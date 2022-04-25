<script setup lang="ts">
import { inject, onMounted } from "vue";
const audioMotion = inject("audioMotion");
const audioPlayer = inject("audioPlayer");

const options = {
  alphaBars: false,
  ledBars: true,
  barSpace: 0,
  bgAlpha: 0.5,
  sensitivity: 2,
  smoothing: 0.5,
  showBgColor: false,
  overlay: true,
  showLeds: false,
  showPeaks: true,
  showScale: false,
  gradient: "classic",
  mode: 2,
  fftSize: 8192,
  height: 100,
  showScaleX: false,
  showScaleY: false,
};

onMounted(() => {
  audioPlayer.connectAnalyzer(audioMotion.getAnalyzer()[0]);
});
</script>

<template>
  <vueAudioMotionAnalyzer :options="options" />
</template>

<style scoped>
#audioMotionAnalyzer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
