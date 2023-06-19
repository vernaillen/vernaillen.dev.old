<script setup lang="ts">
const img = useImage()
export interface Props {
  src: string
  width?: number
  height?: number
  caption?: string
  captionUrl?: string
  cssClass?: string
  imageShadow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: 400,
  height: 400,
  caption: '',
  captionUrl: '',
  cssClass: 'floatRight',
  imageShadow: true
})
const imgUrl = img(
  props.src, {
    width: props.width,
    height: props.height,
    fit: 'cover'
  }
)
</script>

<template>
  <div :class="cssClass">
    <img
      v-lazy="imgUrl"
      src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      :alt="caption"
      :width="width"
      :height="height"
      :class="imageShadow ? 'shadow-md' : ''"
      class="!mt-0 rounded-md opacity-0 transform transition-all duration-1000"
    >
    <p v-if="caption" class="caption text-xs w-full text-center mt-0">
      <NuxtLink v-if="captionUrl" :href="captionUrl" target="_blank" :alt="caption" :title="caption">
        {{ caption }}
      </NuxtLink>
      <span v-else>{{ caption }}</span>
    </p>
  </div>
</template>

<style scoped>
img[lazy=loading] {
    opacity: 0;
}
img[lazy=loaded] {
    opacity: 1;
}
.prose .floatLeft {
  float: left;
  margin-right: 15px;
  padding-right: 0;
  padding-bottom: 0;
  max-width: 50%;
}
.prose .floatRight {
  float: right;
  margin-left: 15px;
  padding-left: 0;
  padding-bottom: 0;
  max-width: 50%;
}
.prose .floatleft img,
.prose .floatRight img {
    margin-bottom: 4px;
}
.prose p.caption {
    margin-top: 0;
}
@media (max-width: 540px) {
  .prose .floatLeft,
  .prose .floatRight {
    float: none;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .prose .floatLeft img,
  .prose .floatRight img {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>
