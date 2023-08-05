<script setup lang="ts">

const lightbox = useLightbox()
function handleHide () {
  lightbox.visible.value = false
}
</script>

<template>
  <vue-easy-lightbox
    loop
    move-disabled
    :index="lightbox.index.value"
    :visible="lightbox.visible.value"
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
