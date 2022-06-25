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
  import.meta.glob("/public/images/gallery/**", { eager: true })
).forEach((imageModule) => {
  console.log(imageModule.name);
  if (
    imageModule.name &&
    imageModule.name.startsWith("/public/images/gallery/" + props.folder)
  ) {
    images.push(imageModule.name.substring("/public".length));
  }
});
</script>
