<template>
  <vue-easy-lightbox
    loop
    moveDisabled
    :index="lightbox.index"
    :visible="lightbox.visible"
    :imgs="lightbox.images"
    @hide="handleHide"
  >
    <template v-slot:toolbar></template>
  </vue-easy-lightbox>
</template>

<script setup lang="ts">
import { useLightbox } from "@/stores/lightbox";
const lightbox = useLightbox();

const handleHide = () => {
  lightbox.hide();
};
</script>

<style scoped>
.vel-modal {
  z-index: 9990;
  top: 67px;
}
html.ud-dark .vel-modal {
  background: rgba(0, 0, 0, 0.8);
}
@media only screen and (max-width: 959px) {
  .vel-modal {
    top: 56px;
  }
}
</style>
