<script setup lang="ts">
const cssClass = 'text-dark dark:text-white hover:text-primary dark:hover:text-primary mx-2 transition-all'
</script>

<template>
  <NuxtLink
    :class="cssClass"
    href="https://github.com/vernaillen/"
    target="_blank"
    title="GitHub"
  >
    <Icon name="mdi:github" alt="GitHub" class="animate__animated animate__bounceIn" />
  </NuxtLink>
  <NuxtLink
    :class="cssClass"
    href="https://www.linkedin.com/in/woutervernaillen/"
    target="_blank"
    title="LinkedIn"
  >
    <Icon name="mdi:linkedin" alt="LinkedIn" class="animate__animated animate__bounceIn" />
  </NuxtLink>
  <NuxtLink
    :class="cssClass"
    href="https://twitter.com/vernaillen"
    target="_blank"
    title="Twitter"
  >
    <Icon name="mdi:twitter" alt="Twitter" class="animate__animated animate__bounceIn" />
  </NuxtLink>
  <NuxtLink
    :class="cssClass"
    href="https://fosstodon.org/@vernaillen"
    rel="me"
    target="_blank"
    title="Mastodon"
  >
    <Icon name="mdi:mastodon" alt="Mastodon" class="animate__animated animate__bounceIn" />
  </NuxtLink>
</template>
