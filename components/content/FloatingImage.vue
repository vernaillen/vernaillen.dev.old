<script setup lang="ts">
export interface Props {
  src: string
  width: number
  height?: number
  caption?: string
  captionUrl?: string
  cssClass?: string
  imageShadow?: boolean
  modifiers?: Record<string, any>
}

withDefaults(defineProps<Props>(), {
  cssClass: 'floatRight',
  imageShadow: true,
})
</script>

<template>
  <div :class="cssClass">
    <NuxtImg :modifiers="modifiers" :src="src" :width="width" :height="height" :alt="caption" :title="caption" class="!mt-0 rounded-md" :class="imageShadow ? 'shadow-md shadow-gray-400' : ''" />
    <p v-if="caption" class="caption text-xs w-full text-center mt-0">
      <a v-if="captionUrl" :href="captionUrl" target="_blank" :alt="caption" :title="caption">{{ caption }}</a>
      <span v-else>{{ caption }}</span>
    </p>
  </div>
</template>

<style scoped>
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
