<script setup lang="ts">
import type { FeedPost } from '~~/types/socialFeed'

const props = defineProps<{
  post: FeedPost
}>()

</script>

<template>
  <article
    class="p-2 sm:p-3 md:p-4 mb-8 relative text-base flex flex-row gap-2 rounded-md bg-[#ffffff] dark:bg-dark dark:bg-opacity-50 shadow-lg min-h-12 transition-all border-[1px] border-solid border-transparent after:text-transparent"
  >
    <div v-if="post.reblogged">
      <UIcon name="i-mdi-repost" class="text-primary-500 w-4 h-4" />
      <img
        :src="post.reblog.avatar"
        class="rounded-full self-start"
        height="48"
        width="48"
      >
    </div>
    <img
      v-else
      :src="post.avatar ?? '/images/wouter.jpg'"
      class="rounded-full self-start"
      height="48"
      width="48"
      alt="Avatar for Wouter Vernaillen"
    >
    <div class="flex flex-col w-full overflow-hidden">
      <div v-if="post.reblogged" class="flex flex-row w-full">
        <span
          class="avatar text-sm text-gray-500 mb-2 line-clamp-1 ws-pre-wrap break-all"
          v-html="post.handle"
        />
      </div>
      <FeedPostContent :post="post.reblogged ? post.reblog : post" />
    </div>
  </article>
</template>
