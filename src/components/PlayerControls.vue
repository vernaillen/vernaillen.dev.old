<template>
  <label
    v-if="!isLoaded"
    class="ud-p-2 ud-cursor-pointer dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
  >
    <font-awesome-icon :icon="['fas', 'spinner']" class="fa-spin" />
  </label>
  <label
    v-if="isLoaded && !isPlaying"
    class="ud-p-2 ud-cursor-pointer dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
    @click="audioPlayer.play(), checkState()"
  >
    <font-awesome-icon :icon="['fas', 'play']" />
  </label>
  <label
    v-if="isLoaded && isPlaying"
    class="ud-p-2 ud-cursor-pointer dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
    @click="audioPlayer.stop(), checkState()"
  >
    <font-awesome-icon :icon="['fas', 'stop']" />
  </label>
</template>

<script setup>
import { computed, inject, watch, ref } from "vue";
const audioPlayer = inject("audioPlayer");
let isLoaded = ref(false);
let isPlaying = ref(false);
let state = ref("stopped");

async function checkIsBufferLoaded() {
  await audioPlayer.isLoaded();
  isLoaded.value = true;
}
async function checkState() {
  state.value = await audioPlayer.state();
  isPlaying.value = state.value == "started";
}
checkIsBufferLoaded();
checkState();
watch(state, (newState, oldState) => {
  console.log("player " + state.value);
});
</script>
