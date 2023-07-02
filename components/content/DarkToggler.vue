<script setup lang="ts">
const props = defineProps({
  inline: {
    type: Boolean,
    default: false,
    required: false
  }
})
const darkTogglerClass = props.inline
  ? 'inline-block w-5 h-5'
  : 'flex w-10 h-10'

const colorMode = useColorMode()
function toggleColorMode () {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
function iconClass (color: string) {
  if (colorMode.value === color) { return 'opacity-50 hover:opacity-100' }
  return 'opacity-0 hover:opacity-0'
}
</script>

<template>
  <label
    for="toggleDark"
    class="cursor-pointer rounded-full items-center justify-center text-dark dark:text-white"
    :class="darkTogglerClass"
  >
    <ClientOnly>
      <Icon
        v-for="color of ['light', 'dark']"
        :key="color"
        :class="iconClass(color)"
        :name="`material-symbols:${color}-mode`"
        size="1.5em"
        class="absolute cursor-pointer hover:text-primary-500 hover:fill-primary-500"
        @click="toggleColorMode"
      />
    </ClientOnly>
  </label>
</template>
