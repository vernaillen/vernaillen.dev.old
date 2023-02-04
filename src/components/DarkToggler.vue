<script setup lang="ts">
import SvgDarkToggler from '@/components/svg/svg-dark-toggler.svg?component'
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
  = 'cursor-pointer rounded-full items-center justify-center bg-gray-2 dark:bg-dark-bg text-dark dark:text-white'
const darkTogglerClass = props.inline
  ? `${classBase} inline-block w-5 h-5`
  : `${classBase} flex w-10 h-14 `
</script>

<template>
  <label for="toggleDark" :class="darkTogglerClass" @click="toggleDark()">
    <SvgDarkToggler />
  </label>
</template>
