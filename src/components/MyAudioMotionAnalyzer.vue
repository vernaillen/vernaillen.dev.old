<script setup lang="ts">
import type { GradientOptions } from 'vite-plugin-vue-audiomotion'
import { VueAudioMotionAnalyzer } from 'vite-plugin-vue-audiomotion'
import type { AudioPlayer } from '@/logics/audio'
import { usePlayerState } from '@/stores/playerState'

const playerState = usePlayerState()
const audioPlayer: AudioPlayer = inject('audioPlayer')!

const audio = ref<HTMLMediaElement>()
const isPlaying = ref(false)
onMounted(() => {
  audio.value = document.getElementById('audio') as HTMLMediaElement
  audioPlayer.setHTMLAudioElement(audio.value)
  audio.value.onplaying = () => {
    isPlaying.value = true
    playerState.updatePlaying(true)
  }
  audio.value.onpause = () => {
    isPlaying.value = false
  }
})

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
  <div>
    <audio id="audio" ref="audioRef" src="/music/RackNomad-MeditativeMelody.mp3" crossorigin="anonymous" />
    <VueAudioMotionAnalyzer
      :options="options"
      :source="audio"
      :gradient="gradientOptions"
      class="z-20 bg-transparent"
    />
  </div>
</template>

<style scoped>
#vueAudioMotionAnalyzer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}
</style>
