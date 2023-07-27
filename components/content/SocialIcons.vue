<template>
  <div
    class="slide-enter"
    :style="'--enter-stage:2;--enter-step:60ms;'"
  >
    <span
      v-for="social, index in useSocials()"
      :key="index"
      class="slide-enter"
      :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
    >
      <NuxtLink
        class="text-dark dark:text-white hover:text-primary-500 dark:hover:text-primary-500 mx-2 transition-all"
        :href="social.url"
        :title="social.name"
        :aria-label="social.name"
        target="_blank"
        rel="me"
      >
        <span :class="social.icon" :alt="social.name" class="animate__animated animate__bounceIn" size="22" />
      </NuxtLink>
    </span>
  </div>
</template>
