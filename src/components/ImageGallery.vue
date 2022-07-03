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

const openGallery = (i: number) => {
  lightbox.setImages(images)
  lightbox.show(i)
}
</script>

<template>
  <div class="ud-flex ud-flex-wrap ud-justify-start ud-mx-[-16px]">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="md:ud-w-2/3 lg:ud-w-1/2 xl:ud-w-1/3 ud-px-4"
    >
      <div
        class="galleryImgWrapper ud-rounded-md ud-overflow-hidden ud-relative ud-mb-8 ud-shadow-md ud-shadow-gray-800"
      >
        <img
          :src="image"
          class="ud-cursor-pointer ud-rounded-md ud-max-w-full ud-p-0 ud-m-0"
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
  -moz-transform: scale(1.13);
  -webkit-transform: scale(1.13);
  transform: scale(1.13);
}
</style>
