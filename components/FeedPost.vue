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
  favouritesCount: Number
})
</script>

<template>
  <article
    class="p-4 mb-8 relative text-base flex flex-row gap-2 rounded-md bg-[#ffffff] dark:bg-dark dark:bg-opacity-50 shadow-lg min-h-12 transition-all border-[1px] border-solid border-transparent after:text-transparent flex-[100%]"
  >
    <img
      :src="avatar ?? '/images/wouter.jpg'"
      class="rounded-full self-start w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
      height="48"
      width="48"
      alt="Avatar for Wouter Vernaillen"
    >
    <div class="flex flex-col gap-4 w-full">
      <header>
        <div class="flex flex-row text-sm w-full gap-2">
          <a :href="accountLink" target="_blank" class="w-full gap-2 flex-wrap dark:text-primary-100 hover:text-primary-500 hover:dark:text-primary-500">
            <span class="avatar text-md line-clamp-1 ws-pre-wrap break-all" v-html="handle" />
          </a>
          <a class="ml-auto align-top min-w-fit mr-2" :href="permalink" target="_blank">
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
          <a :href="accountLink" target="_blank" class="w-full gap-2 flex-wrap">
            <span class="text-gray-500 hover:text-primary-500 hover:dark:text-primary-500 text-sm line-clamp-1 ws-pre-wrap break-all">@{{ props.account }}</span>
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
          <Icon name="uil:comment" class=" animate__animated animate__bounceIn -mt-1" size="16" /> {{ repliesCount && repliesCount > 0 ? repliesCount : '' }}
        </a>
        <a :href="permalink" target="_blank" class="text-gray-500 dark:text-primary-100 hover:text-primary-500 hover:dark:text-primary-500">
          <Icon name="mdi:heart-outline" class=" animate__animated animate__bounceIn -mt-1" size="16" /> {{ favouritesCount && favouritesCount > 0 ? favouritesCount : '' }}
        </a>
      </div>
    </div>
  </article>
</template>
