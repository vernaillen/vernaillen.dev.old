<script setup lang="ts">
import { usePlayerState } from '~/stores/playerState'

const props = defineProps({
  extended: {
    type: Boolean,
    default: false,
    required: false,
  },
})

const playerState = usePlayerState()
const audioPlayer = useAudioPlayer()
const isLoaded = ref(false)

async function checkIsBufferLoaded() {
  (audioPlayer) && (await audioPlayer.isLoaded())
  isLoaded.value = true
}
checkIsBufferLoaded()

const back = () => {
  const wasPlaying = playerState.isPlaying
  audioPlayer.load()
  if (wasPlaying)
    audioPlayer.play()
}

const iconClass
  = 'rounded-full bg-primary bg-opacity-10 dark:bg-opacity-20 p-2 w-4 h-4'
</script>

<template>
  <span class="block">
    <label
      v-if="props.extended"
      class="inline cursor-pointer w-10 h-14 items-center justify-center text-dark dark:text-white ml-2"
    >
      <Icon v-if="playerState.time === 0" name="fa6-solid:backward-step" :class="iconClass" />
      <Icon v-if="playerState.time > 0" name="fa6-solid:backward-step" :class="iconClass" @click="back()" />
    </label>
    <label
      class="cursor-pointer w-10 h-14 items-center justify-center text-dark dark:text-white ml-2"
      :class="props.extended ? 'inline' : 'flex'"
    >
      <Icon name="uil:spinner-alt" :class="iconClass" class="animate-spin" size="24" />
      <Icon
        v-if="isLoaded && !playerState.isPlaying"
        name="fa6-solid:play"
        :class="iconClass"
        @click="audioPlayer.play()"
      />
      <Icon
        v-if="isLoaded && playerState.isPlaying"
        name="fa6-solid:pause"
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
