<script lang="ts" setup>
import { filter } from 'cypress/types/lodash'

const showReblogs = ref(false)
const fetchedFeed = ref()
const filteredFeed = ref()
async function fetchPosts () {
  const [mastodon] = await Promise.all([
    $fetch('/_social/mastodon')
  ])
  fetchedFeed.value = [...mastodon]
    .sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  filterPosts()
}
function filterPosts () {
  filteredFeed.value = fetchedFeed.value.filter(item => showReblogs.value || !item.reblogged)
}
onMounted(() => {
  fetchPosts()
})
watch(() => showReblogs.value, () => {
  filteredFeed.value = null
  setTimeout(() => {
    filterPosts()
  }, 300)
})
</script>

<template>
  <div class="w-full">
    <div class="pb-5 -mt-5 text-right">
      Show reblogs: <UToggle v-model="showReblogs" class="-mb-[20px]" />
    </div>
    <div v-if="filteredFeed">
      <FeedPost
        v-for="item, index in filteredFeed"
        :key="item.permalink"
        :post="item"
        :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
      />
    </div>
    <div v-else class="w-full slide-enter">
      <USkeleton class="h-8 w-full mb-10" />
      <div v-for="items, index in [1, 2]" :key="index" class="space-y-2 mb-5">
        <USkeleton class="h-4 w-full" />
        <USkeleton class="h-4 w-[100px]" />
        <USkeleton class="h-4 w-1/2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
div :global(.invisible) {
    display: none;
}

div :global(.ellipsis::after) {
    display: inline-block;
    content: '...';
}
</style>
