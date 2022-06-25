<template>
  <div class="ud-flex ud-flex-wrap">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      class="ud-w-[380px] ud-h-auto ud-pr-6 ud-cursor-pointer"
      @click="openGallery(index)"
    />
  </div>
  <vue-easy-lightbox
    loop
    :index="index"
    :visible="visible"
    :imgs="images"
    @hide="handleHide"
  >
  </vue-easy-lightbox>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const index = ref(0);
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
  console.log(imageModule.name);
  if (
    imageModule.name &&
    imageModule.name.startsWith("/public/images/" + props.folder) &&
    imageModule.name.indexOf(props.filter) > 0
  ) {
    images.push(imageModule.name.substring("/public".length));
  }
});

const show = () => {
  visible.value = true;
};
const handleHide = () => {
  visible.value = false;
};
const openGallery = (i: number) => {
  index.value = i;
  show();
};
</script>

<style scoped>
.vel-modal {
  background: rgba(0, 0, 0, 0.8);
}
</style>
