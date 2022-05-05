<script setup lang="ts">
import { AudioPlayer } from "@/classes/audio";
import { inject, onMounted } from "vue";
const audioPlayer: AudioPlayer = inject("audioPlayer");

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

let analyzer;
const getAnalyzer = (a) => {
  analyzer = a;
};
onMounted(() => {
  if (analyzer) audioPlayer.connectAnalyzer(analyzer);
});
</script>

<template>
  <vue-audiomotion-analyzer
    :options="options"
    :audioCtx="audioPlayer.getAudioContext()"
    @analyzer="getAnalyzer"
  />
</template>

<style scoped>
#audioMotionAnalyzer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
