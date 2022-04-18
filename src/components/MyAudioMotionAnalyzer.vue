<template>
  <vueAudioMotionAnalyzer :options="options" />
</template>
<script setup lang="ts">
import { inject, onMounted, ref } from 'vue'
const stopColor = ref('#9C8E1B')
const audioMotion = inject('audioMotion')
const audioPlayer = inject('audioPlayer')

const options = 
  { 
    alphaBars: false,
    barSpace: 0.5,
    bgAlpha: 0.5,
    sensitivity: 2,
    smoothing: 0.5,
    showBgColor: false,
    overlay: true,
    showLeds: false,
    showPeaks: true,
    showScale: false,
    gradient: 'classic',
    mode: 1,
    fftSize: 8192,  
    height: 60,
    showScaleX: false,
    showScaleY: false,
    colorStops: [
      stopColor,
      stopColor
    ]
  }

onMounted(() => {
  audioPlayer.connectAnalyzer(audioMotion.getAnalyzer()[0])
})
</script>

<style scoped>
  #audioMotionAnalyzer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
  }
</style>