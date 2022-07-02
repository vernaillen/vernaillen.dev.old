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
    <div
      class="ud-ml-6 ud-mb-4 ud-pb-4 ud-font-medium ud-text-base ud-text-body-color animated fadeIn"
    >
      <div
        class="ud-ml-1 ud-mb-2 ud-text-primary ud-duration-300 ud-transition ud-ease-in-out ud-text-sm"
      >
        {{ careerStep.date }}
      </div>
      <div class="ud-ml-2 ud-mt-1 ud-mb-1 ud-flex ud-flex-wrap">
        <div class="ud-w-full sm:ud-w-1/5 md:ud-w-1/6 xl:ud-w-1/12">
          project:
        </div>
        <div
          class="ud-w-full ud-ml-6 sm:ud-ml-0 sm:ud-w-4/5 md:ud-w-5/6 xl:ud-w-11/12"
        >
          {{ careerStep.project }}
        </div>
      </div>
      <div class="ud-ml-2 ud-mt-1 ud-mb-1 ud-flex ud-flex-wrap">
        <div class="ud-w-full sm:ud-w-1/5 md:ud-w-1/6 xl:ud-w-1/12">role:</div>
        <div
          class="ud-w-full ud-ml-6 sm:ud-ml-0 sm:ud-w-4/5 md:ud-w-5/6 xl:ud-w-11/12"
        >
          {{ careerStep.role }}
        </div>
      </div>
      <div class="ud-ml-2 ud-mt-1 ud-mb-1 ud-flex ud-flex-wrap">
        <div class="ud-w-full sm:ud-w-1/5 md:ud-w-1/6 xl:ud-w-1/12">stack:</div>
        <div
          class="ud-w-full ud-ml-6 sm:ud-ml-0 sm:ud-w-4/5 md:ud-w-5/6 xl:ud-w-11/12"
        >
          {{ careerStep.stack }}
        </div>
      </div>
      <div class="ud-ml-2 ud-mt-1 ud-mb-1 ud-flex ud-flex-wrap">
        <div class="ud-w-full sm:ud-w-1/5 md:ud-w-1/6 xl:ud-w-1/12">
          contract:
        </div>
        <div
          class="ud-w-full ud-ml-6 sm:ud-ml-0 sm:ud-w-4/5 md:ud-w-5/6 xl:ud-w-11/12"
        >
          {{ careerStep.contract }}
        </div>
      </div>
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
