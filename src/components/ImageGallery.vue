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
Object.values(
  import.meta.glob("/src/assets/gallery/**", { eager: true })
).forEach((imageModule) => {
  if (
    imageModule.name &&
    imageModule.name.startsWith("/src/assets/gallery/" + props.folder)
  ) {
    images.push(imageModule.name);
  }
});
</script>
