<script setup lang="ts">
import type { CareerStep } from '@/logics/career'

defineProps<{
  careerStep: CareerStep
}>()
</script>

<template>
  <div class="flex flex-start items-center">
    <div
      class="company-img bg-primary drop-shadow-md hover:drop-shadow-lg shadow-light-400 flex items-center justify-center rounded-full"
    >
      <img
        v-if="careerStep.imageUrl"
        :src="careerStep.imageUrl"
        :alt="careerStep.project"
      >
    </div>
    <h4 class="text-gray-800 dark:text-white font-semibold -mt-2">
      {{ careerStep.client }}
    </h4>
  </div>
  <div class="border-l-2 border-primary mt-2">
    <div
      class="ml-6 mb-4 pb-4 font-medium text-base text-body-color"
    >
      <div
        class="ml-1 mb-2 text-primary text-sm"
      >
        {{ careerStep.date }}
      </div>
      <div class="ml-2 mt-1 mb-1 flex flex-wrap">
        <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
          project:
        </div>
        <div
          class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
        >
          <a v-if="careerStep.projectUrl" :href="careerStep.projectUrl" target="_blank" class="text-primary">
          {{ careerStep.project }}
          </a>
          <span v-else>{{ careerStep.project }}</span>
        </div>
      </div>
      <div class="ml-2 mt-1 mb-1 flex flex-wrap">
        <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
          role:
        </div>
        <div
          class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
        >
          {{ careerStep.role }}
        </div>
      </div>
      <div class="ml-2 mt-1 mb-1 flex flex-wrap">
        <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
          stack:
        </div>
        <div
          class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
        >
          {{ careerStep.stack }}
        </div>
      </div>
      <div class="ml-2 mt-1 mb-1 flex flex-wrap">
        <div class="w-full sm:w-1/5 md:w-1/6 xl:w-1/12">
          contract:
        </div>
        <div
          class="w-full ml-6 sm:ml-0 sm:w-4/5 md:w-5/6 xl:w-11/12"
        >
          {{ careerStep.contract }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-img {
  position: relative;
  height: 34px;
  width: 34px;
  min-width: 34px;
  margin-left: -16px;
  margin-top: -7px;
  margin-right: 12px;
}
.company-img img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 34px;
  width: 34px;
  background: currentColor;
  border-radius: 50%;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
