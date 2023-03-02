<script setup lang="ts">
import type { GradientOptions } from 'vite-plugin-vue-audiomotion'
import { VueAudioMotionAnalyzer } from 'vite-plugin-vue-audiomotion'
import { usePlayerState } from '@/stores/playerState'

const playerState = usePlayerState()
const audioPlayer = useAudioPlayer()

const audioRef = ref<HTMLMediaElement>()
const isPlaying = ref(false)
onMounted(() => {
  if (audioRef.value) {
    // audioRef.value = document.getElementById('audio') as HTMLMediaElement
    audioPlayer.setHTMLAudioElement(audioRef.value)
    audioRef.value.onplaying = () => {
      isPlaying.value = true
      playerState.updatePlaying(true)
    }
    audioRef.value.onpause = () => {
      isPlaying.value = false
    }
  }
})

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
  height: 60,
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
  <div class="relative z-20">
    <audio id="audio" ref="audioRef" src="/music/RackNomad-MeditativeMelody.mp3" crossorigin="anonymous" />
    <VueAudioMotionAnalyzer
      :options="options"
      :source="audioRef"
      :gradient="gradientOptions"
      class="bg-transparent opacity-70"
    />
  </div>
</template>

<style scoped>
#vueAudioMotionAnalyzer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
