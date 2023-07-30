<script setup lang="ts">
import type { FeedPost } from '~~/types/socialFeed'

const props = defineProps<{
      post: FeedPost
    }>()

const repliesAmount = computed(() => {
  if (props.post.repliesCount === 0) { return '' } else { return props.post.repliesCount }
})
const reblogsAmount = computed(() => {
  if (props.post.reblogsCount === 0) { return '' } else { return props.post.reblogsCount }
})
const favouritesAmount = computed(() => {
  if (props.post.favouritesCount === 0) { return '' } else { return props.post.favouritesCount }
})
</script>

<template>
  <div class="flex flex-col w-full  gap-2 md:gap-4 ">
    <header>
      <div class="flex flex-row text-sm w-full gap-2">
        <a :href="post.accountLink" target="_blank" class="w-full gap-2 flex-wrap dark:text-primary-100 hover:text-primary-500 hover:dark:text-primary-500">
          <span class="avatar text-md line-clamp-1 ws-pre-wrap break-all" v-html="post.handle" />
        </a>
        <a class="ml-auto align-top min-w-fit" :href="post.permalink" target="_blank">
          <NuxtTime
            v-if="post.createdAt"
            class="text-xs text-gray-500 hover:text-primary-500 hover:dark:text-primary-500"
            :datetime="post.createdAt"
            locale="en-UK"
            day="numeric"
            month="short"
            year="numeric"
          />
        </a>
      </div>
      <div class="flex flex-row text-sm w-full gap-2">
        <a :href="post.accountLink" target="_blank" class="w-full gap-2 flex-wrap">
          <span class="text-gray-500 hover:text-primary-500 hover:dark:text-primary-500 text-sm line-clamp-1 ws-pre-wrap break-all">
            @{{ props.post.account }}
          </span>
        </a>
      </div>
    </header>
    <div class="prose" v-html="post.html" />
    <img
      v-if="post.media?.length && post.media[0].url"
      :src="post.media[0].url"
      :width="post.media[0].width"
      :height="post.media[0].height"
      :alt="post.media[0].alt || undefined"
    >
    <div class="my-1">
      <div class="flex justify-between items-center text-sm">
        <UButton icon="i-uil-comment" :to="post.permalink" variant="ghost" size="xs" target="_blank">
          {{ repliesAmount }}
        </UButton>
        <UButton icon="i-mdi-repost" :to="post.permalink" variant="ghost" size="xs" target="_blank">
          {{ reblogsAmount }}
        </UButton>
        <UButton icon="i-mdi-heart-outline" :to="post.permalink" variant="ghost" size="xs" target="_blank">
          {{ favouritesAmount }}
        </UButton>
        <UButton icon="i-mdi-bookmark-outline" :to="post.permalink" variant="ghost" size="xs" target="_blank" />
      </div>
    </div>
  </div>
</template>
