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
    filename: props.page._file
  })
})
function updateGH (ghData: any) {
  if (ghData && ghData[0] && ghData[0].commit.author.date) {
    lastUpdated.value = ghData[0].commit.author.date
  }
}
watch(gitHubData, (newGHData) => {
  if (newGHData) { updateGH(newGHData) }
})
onMounted(() => {
  updateGH(gitHubData.value)
})
</script>

<template>
  <div>
    <NuxtLink :href="viewLink" target="_blank" aria-label="Open source of this page on Github">
      <Icon name="mdi:github" class="ml-1 mr-2" />
    </NuxtLink>
    last updated on&nbsp;
    <Icon
      v-if="!lastUpdated"
      name="uil:spinner-alt"
      class="animate-spin"
      size="16"
    />
    <NuxtLink
      v-if="lastUpdated"
      :href="viewLink"
      target="_blank"
      class="animate-pulse"
      aria-label="Open source of this page on Github"
    >
      {{ longDateFormat(lastUpdated) }}
    </NuxtLink>
  </div>
</template>
