<script setup lang="ts">
import { useLightbox } from '@/stores/lightbox'

const props = defineProps({
  folder: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: false,
  },
})
const lightbox = useLightbox()
const images: string[] = []
Object.values(import.meta.glob('/public/images/**')).forEach((imageModule) => {
  if (
    imageModule.name
    && imageModule.name.startsWith(`/public/images/${props.folder}`)
    && (props.filter == null
      || props.filter === ''
      || imageModule.name.indexOf(props.filter) > 0)
  )
    images.push(imageModule.name.substring('/public'.length))
})

function openGallery(i: number) {
  lightbox.setImages(images)
  lightbox.show(i)
}
</script>

<template>
  <div class="flex flex-wrap justify-start mx-[-16px]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="md:w-2/3 lg:w-1/2 xl:w-1/3 px-4"
    >
      <div
        class="galleryImgWrapper rounded-md overflow-hidden relative mb-8 shadow-md shadow-gray-800"
      >
        <img
          :src="image"
          class="cursor-pointer rounded-md max-w-full p-0 m-0"
          :alt="image"
          @click="openGallery(index)"
        >
      </div>
    </div>
  </div>
</template>

<style>
.prose .galleryImgWrapper {
  position: relative;
  overflow: hidden;
}
.prose .galleryImgWrapper img {
  margin: 0;
  max-width: 100%;
  height: auto;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.galleryImgWrapper:hover img {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
