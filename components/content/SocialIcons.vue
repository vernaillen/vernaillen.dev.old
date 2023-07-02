<script setup lang="ts">
const cssClass = 'text-dark dark:text-white hover:text-primary-500 dark:hover:text-primary-500 mx-2 transition-all'
</script>

<template>
  <NuxtLink
    :class="cssClass"
    href="https://github.com/vernaillen/"
    target="_blank"
    title="GitHub"
    rel="me"
  >
    <Icon name="mdi:github" alt="GitHub" class="animate__animated animate__bounceIn" size="24" />
  </NuxtLink>
  <NuxtLink
    :class="cssClass"
    href="https://www.linkedin.com/in/woutervernaillen/"
    target="_blank"
    title="LinkedIn"
    rel="me"
  >
    <Icon name="mdi:linkedin" alt="LinkedIn" class="animate__animated animate__bounceIn" size="24" />
  </NuxtLink>
  <NuxtLink
    :class="cssClass"
    href="https://twitter.com/vernaillen"
    target="_blank"
    title="Twitter"
    rel="me"
  >
    <Icon name="mdi:twitter" alt="Twitter" class="animate__animated animate__bounceIn" size="24" />
  </NuxtLink>
  <NuxtLink
    :class="cssClass"
    href="https://fosstodon.org/@vernaillen"
    target="_blank"
    title="Mastodon"
    rel="me"
  >
    <Icon name="mdi:mastodon" alt="Mastodon" class="animate__animated animate__bounceIn" size="24" />
  </NuxtLink>
</template>
