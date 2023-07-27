<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  page: ParsedContent
}>()
</script>

<template>
  <div v-if="page.mastodonPost || page.twitterPost" class="w-full px-3 pt-2 !text-sm !text-gray-400 prose">
    <UIcon name="i-mdi-comment-multiple-outline" class="w-4 h-4 -mb-[3px] mr-1 animate__animated animate__bounceIn" />
    comment on
    <NuxtLink v-if="page.mastodonPost" :href="page.mastodonPost" target="_blank">
      mastodon
    </NuxtLink>
    <span v-if="page.mastodonPost && page.twitterPost"> or </span>
    <NuxtLink v-if="page.twitterPost" :href="page.twitterPost" target="_blank">
      twitter
    </NuxtLink>
  </div>
</template>
