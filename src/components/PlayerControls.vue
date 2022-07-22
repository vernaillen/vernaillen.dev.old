<script setup lang="ts">
import { usePlayerState } from '@/stores/playerState'
import type { AudioPlayer } from '@/logics/audio'

const props = defineProps({
  extended: {
    type: Boolean,
    default: false,
    required: false,
  },
})

const playerState = usePlayerState()

const audioPlayer: AudioPlayer = inject('audioPlayer')!
const isLoaded = ref(false)

async function checkIsBufferLoaded() {
  (await audioPlayer) && (await audioPlayer.isLoaded())
  isLoaded.value = true
}
checkIsBufferLoaded()

const back = () => {
  const wasPlaying = playerState.isPlaying
  audioPlayer.stop()
  if (wasPlaying)
    audioPlayer.play()
}

const labelBase
  = 'cursor-pointer w-10 h-14 items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white ml-2'
const labelClass = props.extended
  ? `${labelBase} inline`
  : `${labelBase} flex `

const iconClass
  = 'rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 p-2 w-4 h-4'
</script>

<template>
  <span class="block">
    <label v-if="props.extended" :class="labelClass">
      <font-awesome-icon
        v-if="playerState.time === 0"
        :icon="['fas', 'backward-step']"
        :class="iconClass"
      />
      <font-awesome-icon
        v-if="playerState.time > 0"
        :icon="['fas', 'backward-step']"
        :class="iconClass"
        @click="back()"
      />
    </label>
    <label :class="labelClass">
      <font-awesome-icon
        v-if="!isLoaded"
        :icon="['fas', 'spinner']"
        :class="iconClass"
        class="fa-spin"
      />
      <font-awesome-icon
        v-if="isLoaded && !playerState.isPlaying"
        :icon="['fas', 'play']"
        :class="iconClass"
        @click="audioPlayer.play()"
      />
      <font-awesome-icon
        v-if="isLoaded && playerState.isPlaying"
        :icon="['fas', 'pause']"
        :class="iconClass"
        @click="audioPlayer.pause()"
      />
    </label>
    <label
      v-if="props.extended"
      class="px-2 inline-block text-gray-500 dark:text-gray-400"
    >
      {{ playerState.time }} sec
    </label>
  </span>
</template>
