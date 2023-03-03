<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  page: ParsedContent
}>()
</script>

<template>
  <div v-if="page.mastodonPost || page.twitterPost" class="w-full px-4 pt-4 text-white prose">
    <Icon name="fa6-solid:comments" class="mr-1 animate__animated animate__bounceIn" />
    comment on
    <a v-if="page.mastodonPost" :href="page.mastodonPost" target="_blank">mastodon</a>
    <span v-if="page.mastodonPost && page.twitterPost"> or </span>
    <a v-if="page.twitterPost" :href="page.twitterPost" target="_blank">twitter</a>
  </div>
</template>
