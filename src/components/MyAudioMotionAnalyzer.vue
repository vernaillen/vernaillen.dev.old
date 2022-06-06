<script setup lang="ts">
import type { AudioPlayer } from "@/classes/audio";
import { inject } from "vue";
import type { GradientOptions } from "vue-audiomotion-analyzer";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const audioPlayer: AudioPlayer = inject("audioPlayer")!;

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
