<script setup lang="ts">
import type { FeedPost } from '~~/types/socialFeed'
defineProps<{
  post: FeedPost
}>()
</script>

<template>
  <article
    class="p-2 sm:p-3 md:p-4 mb-8 relative text-base flex flex-row gap-2 rounded-md bg-[#ffffff] dark:bg-dark dark:bg-opacity-50 shadow-lg min-h-12 transition-all border-[1px] border-solid border-transparent after:text-transparent"
  >
    <div v-if="post.reblogged" class="relative">
      <UIcon name="i-mdi-repost" class="text-primary-500 w-4 h-4 pl-0 ml-0" />
      <NuxtLink :to="post.accountLink" target="_blank">
        <img
          :src="post.avatar ?? '/images/wouter.jpg'"
          class="rounded-full absolute top-0 right-0 z-index-5 opacity-80 hover:opacity-100"
          height="20"
          width="20"
          alt="Avatar for Wouter Vernaillen"
        >
      </NuxtLink>
      <NuxtLink :to="post.reblog.accountLink" target="_blank">
        <img
          :src="post.reblog.avatar"
          class="rounded-full self-start z-index-10 border-1 border-black"
          height="48"
          width="48"
          :alt="'Avatar for ' + post.reblog.handle"
        >
      </NuxtLink>
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
        <NuxtLink :to="post.accountLink" target="_blank">
          <span
            class="avatar text-sm text-gray-500 hover:text-primary-500 hover:dark:text-primary-500 mb-2 line-clamp-1 ws-pre-wrap break-all"
            v-html="post.handle"
          />
        </NuxtLink>
      </div>
      <FeedPostContent :post="post.reblogged ? post.reblog : post" />
    </div>
  </article>
</template>
