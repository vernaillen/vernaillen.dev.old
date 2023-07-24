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
    }>
})
const user = props.handle + ' <span class="text-gray-500 text-sm">@' + props.account + '</span>'
</script>

<template>
  <article
    class="p-2 mb-10 relative text-base flex flex-row gap-2 shadow min-h-12 transition-all border-[1px] border-solid border-transparent after:text-transparent flex-[100%]"
  >
    <nuxt-img
      :src="avatar ?? '/images/wouter.jpg'"
      provider="vercel"
      class="rounded-full self-start w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
      height="48"
      width="48"
      alt="Avatar for Wouter Vernaillen"
    />
    <div class="flex flex-col gap-4 w-full">
      <header class="flex flex-row items-center text-sm w-full gap-2">
        <a :href="accountLink" target="_blank">
          <span class="avatar w-full gap-2 max-h-4 line-clamp-1 ws-pre-wrap break-all" v-html="user" />
        </a>
        <a class="ml-auto line-clamp-1 ws-pre-wrap break-all" :href="permalink" target="_blank">
          <NuxtTime
            v-if="datetime"
            class="text-xs text-gray-500"
            :datetime="datetime"
            day="numeric"
            month="long"
            year="numeric"
          />
        </a>
      </header>
      <div class="prose" v-html="html" />
      <nuxt-img
        v-if="media?.length && media[0].url"
        provider="vercel"
        :src="media[0].url"
        :width="media[0].width"
        :height="media[0].height"
        :alt="media[0].alt || undefined"
      />
    </div>
  </article>
</template>
