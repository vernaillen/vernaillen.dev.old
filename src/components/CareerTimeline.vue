<template>
  <ol>
    <li
      v-for="(careerStep, index) in careerSteps"
      :key="index"
      :style="{
        '--animate-duration': index + 1 + 's',
      }"
      class="animated fadeIn"
    >
      <career-step :careerStep="careerStep" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import CareerStep from "@/components/CareerStep.vue";
import { careerSteps } from "@/logics/career";
</script>

<style scoped>
ol {
  margin-left: 16px;
}
</style>
