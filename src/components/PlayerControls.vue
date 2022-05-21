<script setup lang="ts">
import { inject, ref } from "vue";
import { usePlayerState } from "@/stores/playerState";
import type { AudioPlayer } from "@/classes/audio";

const props = defineProps({
  extended: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const playerState = usePlayerState();
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const audioPlayer: AudioPlayer = inject("audioPlayer")!;
let isLoaded = ref(false);

async function checkIsBufferLoaded() {
  (await audioPlayer) && (await audioPlayer.isLoaded());
  isLoaded.value = true;
}
checkIsBufferLoaded();

const back = () => {
  const wasPlaying = playerState.isPlaying;
  audioPlayer.stop();
  if (wasPlaying) {
    audioPlayer.play();
  }
};

const labelBase =
  "ud-cursor-pointer ud-w-10 ud-h-14 ud-items-center ud-justify-center ud-bg-gray-2 dark:ud-bg-dark-bg ud-text-black dark:ud-text-white";
const labelClass = props.extended
  ? labelBase + " ud-inline-block"
  : labelBase + " ud-flex";

const iconClass =
  "ud-rounded-full ud-bg-primary ud-bg-opacity-10 dark:ud-bg-opacity-20 ud-p-2 ud-w-4 ud-h-4";
</script>

<template>
  <label v-if="props.extended" :class="labelClass">
    <font-awesome-icon
      v-if="playerState.time == 0"
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
    class="ud-px-2 ud-inline-block ud-text-gray-500 dark:ud-text-gray-400"
  >
    {{ playerState.time }} sec
  </label>
</template>
