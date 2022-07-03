<script setup lang="ts">
import { careerSteps } from '@/logics/career'
</script>

<template>
  <ol>
    <li
      v-for="(careerStep, index) in careerSteps"
      :key="index"
      :style="{
        '--animate-duration': `${index + 1}s`,
      }"
      class="animated fadeIn"
    >
      <career-step :career-step="careerStep" />
    </li>
  </ol>
</template>

<style scoped>
ol {
  margin-left: 16px;
}
</style>
