<script setup lang="ts">
import svgDarkToggler from "@/assets/svg/darkToggler.svg";
import { usePreferences } from "@/stores/preferences";

const preferences = usePreferences();
const props = defineProps({
  inline: {
    type: Boolean,
    default: false,
    required: false,
  },
});
const classBase =
  "ud-cursor-pointer ud-rounded-full ud-items-center ud-justify-center ud-bg-gray-2 dark:ud-bg-dark-bg ud-text-black dark:ud-text-white";
const darkTogglerClass = props.inline
  ? classBase + " ud-inline-block ud-w-5 ud-h-5"
  : classBase + " ud-flex ud-w-10 ud-h-14 ";

const toggleDark = () => {
  preferences.toggleDark();
};
</script>
<template>
  <label for="toggleDark" :class="darkTogglerClass" @click="toggleDark()">
    <svg-dark-toggler />
  </label>
</template>
