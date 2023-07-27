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

</script>

<template>
  <label
    for="toggleDark"
    class="cursor-pointer rounded-full items-center justify-center text-dark dark:text-white"
    :class="darkTogglerClass"
  >
    <ClientOnly>
      <UButton
        variant="soft"
        aria-label="Switch to Dark Color Mode"
        icon="i-heroicons-sun"
        size="xs"
        class="!my-0 cursor-pointer text-primary-500 inline-flex dark:hidden"
        @click="useColorMode().preference = 'dark'"
      />
      <UButton
        variant="soft"
        aria-label="Switch to Light Color Mode"
        icon="i-heroicons-moon"
        size="xs"
        class="!my-0 cursor-pointer text-primary-500 hidden dark:inline-flex"
        @click="useColorMode().preference = 'light'"
      />
      <template #fallback>
        <UButton
          variant="soft"
          aria-label="Loading Color Mode..."
          icon="i-uil-spinner-alt"
          size="xs"
          class="!my-0 inline-flex text-primary-500 opacity-40 animate-spin"
        />
      </template>
    </ClientOnly>
  </label>
</template>
