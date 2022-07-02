<template>
  <div class="ud-flex ud-flex-start ud-items-center">
    <div
      class="company-img ud-bg-primary ud-drop-shadow-md hover:ud-drop-shadow-lg ud-shadow-light-400 ud-flex ud-items-center ud-justify-center ud-rounded-full ud--ml-4 ud-mr-3 ud--mt-2"
    >
      <img v-if="careerStep.imageUrl" :src="careerStep.imageUrl" />
    </div>
    <h4
      class="ud-text-gray-800 dark:ud-text-white ud-font-semibold ud-text-xl ud--mt-2 animated fadeIn"
    >
      {{ careerStep.client }}
    </h4>
  </div>
  <div class="ud-border-l-2 ud-border-primary ud-mt-2">
    <div class="ud-ml-6 ud-mb-4 ud-pb-4 animated fadeIn">
      <a
        href="#!"
        class="ud-text-primary ud-duration-300 ud-transition ud-ease-in-out ud-text-sm"
        >{{ careerStep.date }}</a
      >
      <p class="ud-font-medium ud-text-base ud-text-body-color ud-mt-2 ud-mb-2">
        <span class="ud-inline-block ud-w-[62px]">project:</span>
        {{ careerStep.project }}<br />
        <span class="ud-inline-block ud-w-[62px]">role:</span>
        {{ careerStep.role }}<br />
        <span class="ud-inline-block ud-w-[62px]">stack:</span>
        {{ careerStep.stack }}<br />
        <span class="ud-inline-block ud-w-[62px]">contract:</span>
        {{ careerStep.contract }}<br />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CareerStep } from "@/classes/career";
defineProps<{
  careerStep: CareerStep;
}>();
</script>

<style scoped>
.company-img {
  position: relative;
  height: 31px;
  width: 31px;
}
.company-img img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 31px;
  width: 31px;
  background: currentColor;
  border-radius: 50%;
}
</style>
