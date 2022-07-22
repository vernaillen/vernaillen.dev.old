<script setup lang="ts">
import type { GradientOptions } from 'vue-audiomotion-analyzer'
import type { AudioPlayer } from '@/logics/audio'
import { usePlayerState } from '@/stores/playerState'

const playerState = usePlayerState()

const audioPlayer: AudioPlayer = inject('audioPlayer')!
let options = {
  alphaBars: false,
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
}
if (window.innerWidth < 960)
  options = { ...options, mode: 6 }

const gradientOptions: GradientOptions = {
  bgColor: '#FFFFFF',
  colorStops: [
    { pos: 0, color: '#9C8E1B' },
    { pos: 1, color: '#9C8E1B' },
  ],
}
</script>

<template>
  <VueAudioMotionAnalyzer
    v-if="playerState.isPlaying"
    :options="options"
    :source="audioPlayer.getAudioNode()"
    :gradient="gradientOptions"
    class="z-20 bg-transparent"
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
