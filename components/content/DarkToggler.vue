<script setup lang="ts">
const props = defineProps({
  inline: {
    type: Boolean,
    default: false,
    required: false,
  },
})
const darkTogglerClass = props.inline
  ? 'inline-block w-5 h-5'
  : 'flex w-10 h-14'

const colorMode = useColorMode()
const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
const iconClass = (color: string) => {
  if (colorMode.value === color)
    return 'opacity-50 hover:opacity-100'
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
        :name="`material-symbols:${color}-mode`" size="1.5em"
        class="absolute top-4 right-[80px] cursor-pointer hover:text-primary hover:fill-primary"
        @click="toggleColorMode"
      />
    </ClientOnly>
  </label>
</template>
