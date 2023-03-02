<script setup lang="ts">
import { useLightbox } from '@/stores/lightbox'

const lightbox = useLightbox()
const handleHide = () => {
  lightbox.hide()
}
</script>

<template>
  <vue-easy-lightbox
    loop
    move-disabled
    :index="lightbox.index"
    :visible="lightbox.visible"
    :imgs="lightbox.images"
    @hide="handleHide"
  >
    <template #toolbar />
  </vue-easy-lightbox>
</template>

<style scoped>
.vel-modal {
  background: rgba(0, 0, 0, 0.7);
}
</style>
