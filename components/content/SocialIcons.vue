<template>
  <span v-for="social, index in useSocials()" :key="index">
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
</template>
