<template>
  <label
    v-if="!isLoaded"
    class="ud-cursor-pointer ud-w-10 ud-h-14 ud-rounded-full ud-flex ud-items-center ud-justify-center ud-bg-gray-2 dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
  >
    <font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin" />
  </label>
  <label
    v-if="isLoaded && !playerState.isPlaying"
    class="ud-cursor-pointer ud-w-10 ud-h-14 ud-rounded-full ud-flex ud-items-center ud-justify-center ud-bg-gray-2 dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
    @click="audioPlayer.play(), checkState()"
  >
    <font-awesome-icon :icon="['fas', 'play']" />
  </label>
  <label
    v-if="isLoaded && playerState.isPlaying"
    class="ud-cursor-pointer ud-w-10 ud-h-14 ud-rounded-full ud-flex ud-items-center ud-justify-center ud-bg-gray-2 dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
    @click="audioPlayer.stop(), checkState()"
  >
    <font-awesome-icon :icon="['fas', 'stop']" />
  </label>
</template>

<script setup>
import { computed, inject, watch, ref } from "vue";
import { usePlayerState } from "@/stores/playerState";

const playerState = usePlayerState();
const audioPlayer = inject("audioPlayer");
let isLoaded = ref(false);
let state = ref(audioPlayer.state());

async function checkIsBufferLoaded() {
  await audioPlayer.isLoaded();
  isLoaded.value = true;
}
async function checkState() {
  state.value = await audioPlayer.state();
  playerState.updatePlaying(state.value == "started");
}
checkIsBufferLoaded();
checkState();
</script>
