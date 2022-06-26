<template>
  <div class="ud-flex ud-flex-wrap">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      class="ud-w-[380px] ud-h-auto ud-pr-6 ud-cursor-pointer"
      @click="openGallery(index)"
      :alt="image"
    />
  </div>
</template>

<script setup lang="ts">
import { useLightbox } from "@/stores/lightbox";
const lightbox = useLightbox();
const props = defineProps({
  folder: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    default: ".png",
    required: false,
  },
});
const images: string[] = [];
Object.values(import.meta.glob("/public/images/**")).forEach((imageModule) => {
  if (
    imageModule.name &&
    imageModule.name.startsWith("/public/images/" + props.folder) &&
    imageModule.name.indexOf(props.filter) > 0
  ) {
    images.push(imageModule.name.substring("/public".length));
  }
});

const openGallery = (i: number) => {
  lightbox.setImages(images);
  lightbox.show(i);
};
</script>
