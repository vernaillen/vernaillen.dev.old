<script setup lang="ts">
const showSpinner = ref(true)
onMounted(() => {
  showSpinner.value = false
})
</script>

<template>
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
        v-if="showSpinner"
        variant="soft"
        aria-label="Loading Color Mode..."
        icon="i-uil-spinner-alt"
        size="xs"
        class="!my-0 rounded-full inline-flex text-primary-500 opacity-40 animate-spin"
      />
    </template>
  </ClientOnly>
</template>
