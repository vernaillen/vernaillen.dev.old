<script setup lang="ts">
const props = defineProps({
  inline: {
    type: Boolean,
    default: false,
    required: false,
  },
})
const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
const classBase
  = 'cursor-pointer rounded-full items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white'
const darkTogglerClass = props.inline
  ? `${classBase} inline-block w-5 h-5`
  : `${classBase} flex w-10 h-14 `
</script>

<template>
  <label for="toggleDark" :class="darkTogglerClass" @click="toggleDark()">
    <svg-dark-toggler />
  </label>
</template>
