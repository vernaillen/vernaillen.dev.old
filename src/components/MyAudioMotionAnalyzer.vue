<script setup lang="ts">
import type { AudioPlayer } from "@/classes/audio";
import { inject } from "vue";
import type { GradientOptions } from "vue-audiomotion-analyzer";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const audioPlayer: AudioPlayer = inject("audioPlayer")!;
let options = {
  alphaBars: true,
  ledBars: false,
  barSpace: 0.1,
  bgAlpha: 0.5,
  sensitivity: 2,
  smoothing: 0.3,
  showBgColor: false,
  overlay: true,
  showPeaks: true,
  showScale: false,
  mode: 3,
  fftSize: 8192,
  height: 100,
  showScaleX: false,
  showScaleY: false,
};
if (window.innerWidth < 960) {
  options = { ...options, mode: 6 };
}
const gradientOptions: GradientOptions = {
  bgColor: "#FFFFFF",
  colorStops: [
    { pos: 0, color: "#9C8E1B" },
    { pos: 1, color: "#9C8E1B" },
  ],
};
</script>

<template>
  <VueAudioMotionAnalyzer
    :options="options"
    :source="audioPlayer.getAudioNode()"
    :gradient="gradientOptions"
    class="ud-z-20"
  />
</template>

<style scoped>
#vueAudioMotionAnalyzer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
