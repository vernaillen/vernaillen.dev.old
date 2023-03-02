<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  page: ParsedContent
}>()

const viewLink = computed(() => {
  return (`https://github.com/vernaillen/vernaillen.dev/tree/master/content/${props.page._file}`)
})

const lastUpdated = ref()
const { data: gitHubData } = await useLazyFetch('/api/github', {
  method: 'post',
  body: JSON.stringify({
    filename: props.page._file,
  }),
})
watch(gitHubData, (newGHData) => {
  if (newGHData && newGHData[0] && newGHData[0].commit.author.date)
    lastUpdated.value = newGHData[0].commit.author.date
})
</script>

<template>
  <div>
    <a :href="viewLink" target="_blank">
      <Icon name="mdi:github" class="ml-1 mr-2" />
    </a>
    last updated on&nbsp;
    <Icon
      v-if="!lastUpdated"
      name="uil:spinner-alt"
      class="animate-spin"
      size="16"
    />
    <a
      v-if="lastUpdated"
      :href="viewLink"
      target="_blank"
      class="animate-pulse"
    >{{ formatDate(lastUpdated) }}</a>
  </div>
</template>
