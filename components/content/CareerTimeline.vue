<template>
  <ol>
    <li
      v-for="(careerStep, index) in useCareer()"
      :key="index"
      :style="{
        '--animate-duration': `${index + 1}s`,
      }"
      class="animate__animated animate__fadeIn"
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
