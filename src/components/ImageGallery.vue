<template>
  <div class="ud-flex ud-flex-wrap ud-justify-start ud-mx-[-16px]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="md:ud-w-2/3 lg:ud-w-1/2 xl:ud-w-1/3 ud-px-4"
    >
      <img
        :src="image"
        class="ud-h-auto ud-cursor-pointer ud-shadow-md ud-shadow-gray-800 hover:ud-shadow-primary hover:ud-opacity-90"
        @click="openGallery(index)"
        :alt="image"
      />
    </div>
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
    required: false,
  },
});
const images: string[] = [];
Object.values(import.meta.glob("/public/images/**")).forEach((imageModule) => {
  if (
    imageModule.name &&
    imageModule.name.startsWith("/public/images/" + props.folder) &&
    (props.filter == null ||
      props.filter == "" ||
      imageModule.name.indexOf(props.filter) > 0)
  ) {
    images.push(imageModule.name.substring("/public".length));
  }
});

const openGallery = (i: number) => {
  lightbox.setImages(images);
  lightbox.show(i);
};
</script>
