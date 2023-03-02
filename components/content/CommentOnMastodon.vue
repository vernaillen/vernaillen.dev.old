<script setup lang="ts">
defineProps<{
  postId: number
}>()
</script>

<template>
  <div class="w-full px-4 pt-4 text-white prose">
    <Icon name="fa6-solid:comments" class="mr-2 animate__animated animate__bounceIn" />
    <a :href="`https://elk.zone/fosstodon.org/@vernaillen/${postId}`" target="_blank">comment on mastodon</a>
  </div>
</template>
