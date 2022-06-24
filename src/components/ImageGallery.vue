<template>
  images from folder "{{ folder }}"<br />
  <img v-for="(image, index) in images" :key="index" :src="image" />
</template>

<script setup lang="ts">
const props = defineProps({
  folder: {
    type: String,
    required: true,
  },
});
const images: string[] = [];
Object.values(import.meta.globEager("/src/assets/gallery/**")).forEach(
  (imageModule) => {
    if (
      imageModule.default &&
      imageModule.default.startsWith("/src/assets/gallery/" + props.folder)
    ) {
      images.push(imageModule.default);
    }
  }
);
</script>
