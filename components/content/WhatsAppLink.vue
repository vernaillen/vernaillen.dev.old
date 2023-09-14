<script setup lang="ts">
defineProps<{ nr: string, size?: string }>()
</script>

<template>
  <UButton
    :size="size ? size : 'xs'"
    :to="`https://wa.me/${nr}`"
    icon="i-logos-whatsapp-icon"
    variant="soft"
    target="_blank"
    aria-label="contact me on WhatsApp"
    class="!mx-0"
  />
</template>
