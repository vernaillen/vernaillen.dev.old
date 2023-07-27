<script setup lang="ts">
const props = defineProps({
  avatar: String,
  html: String,
  handle: String,
  account: String,
  accountLink: String,
  network: String as () => 'bluesky' | 'mastodon',
  datetime: [Date, String, Number],
  permalink: String,
  media: Array as () => Array<{
        url?: string | null
        width?: number
        height?: number
        alt?: string | null
    }>,
  repliesCount: Number,
  favouritesCount: Number,
  reblogged: Boolean,
  reblogAccount: String,
  reblogAccountLink: String,
  reblogAvatar: String,
  reblogHandle: String
})
</script>

<template>
  <article
    class="p-2 sm:p-3 md:p-4 mb-8 relative text-base flex flex-row gap-2 rounded-md bg-[#ffffff] dark:bg-dark dark:bg-opacity-50 shadow-lg min-h-12 transition-all border-[1px] border-solid border-transparent after:text-transparent"
  >
    <div v-if="reblogged">
      <UIcon name="i-mdi-repost" class="text-primary-500 w-4 h-4" />
      <img
        :src="reblogAvatar"
        class="rounded-full self-start"
        height="48"
        width="48"
      >
    </div>
    <img
      v-else
      :src="avatar ?? '/images/wouter.jpg'"
      class="rounded-full self-start"
      height="48"
      width="48"
      alt="Avatar for Wouter Vernaillen"
    >
    <div class="flex flex-col gap-2 md:gap-4 w-full overflow-hidden">
      <header>
        <div v-if="reblogged" class="flex flex-row w-full gap-2">
          <span
            class="avatar text-sm text-gray-500 mb-2 line-clamp-1 ws-pre-wrap break-all"
            v-html="handle"
          />
        </div>
        <div class="flex flex-row text-sm w-full gap-2">
          <a :href="reblogged ? reblogAccountLink : accountLink" target="_blank" class="w-full gap-2 flex-wrap dark:text-primary-100 hover:text-primary-500 hover:dark:text-primary-500">
            <span v-if="reblogged" class="avatar text-md line-clamp-1 ws-pre-wrap break-all" v-html="reblogHandle" />
            <span v-else class="avatar text-md line-clamp-1 ws-pre-wrap break-all" v-html="handle" />
          </a>
          <a class="ml-auto align-top min-w-fit" :href="permalink" target="_blank">
            <NuxtTime
              v-if="datetime"
              class="text-xs text-gray-500 hover:text-primary-500 hover:dark:text-primary-500"
              :datetime="datetime"
              locale="en-UK"
              day="numeric"
              month="short"
              year="numeric"
            />
          </a>
        </div>
        <div class="flex flex-row text-sm w-full gap-2">
          <a :href="reblogged ? reblogAccountLink : accountLink" target="_blank" class="w-full gap-2 flex-wrap">
            <span class="text-gray-500 hover:text-primary-500 hover:dark:text-primary-500 text-sm line-clamp-1 ws-pre-wrap break-all">
              @{{ props.reblogged ? props.reblogAccount : props.account }}
            </span>
          </a>
        </div>
      </header>
      <div class="prose" v-html="html" />
      <img
        v-if="media?.length && media[0].url"
        :src="media[0].url"
        :width="media[0].width"
        :height="media[0].height"
        :alt="media[0].alt || undefined"
      >
      <div class="grid grid-cols-2 text-sm w-full text-righ">
        <a :href="permalink" target="_blank" class="text-gray-500 dark:text-primary-100 hover:text-primary-500 hover:dark:text-primary-500">
          <UIcon name="i-uil-comment" class="w-4 h-4 -mt-1 -mb-[3px]" /> {{ repliesCount && repliesCount > 0 ? repliesCount : '' }}
        </a>
        <a :href="permalink" target="_blank" class="text-gray-500 dark:text-primary-100 hover:text-primary-500 hover:dark:text-primary-500">
          <UIcon name="i-mdi-heart-outline" class="w-4 h-4 -mb-[3px]" /> {{ favouritesCount && favouritesCount > 0 ? favouritesCount : '' }}
        </a>
      </div>
    </div>
  </article>
</template>
