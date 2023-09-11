<script lang="ts" setup>
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
  }, 200)
})
</script>

<template>
  <div class="w-full">
    <div class="pb-5 -mt-5 text-right">
      Show reblogs: <UToggle v-model="showReblogs" class="-mb-[20px]" />
    </div>
    <div v-show="filteredFeed">
      <FeedPost
        v-for="item, index in filteredFeed"
        :key="index"
        :post="item"
        class="animate__animated animate__fadeIn slide-enter"
        style="--enter-stage:0;--enter-step:10ms;"
      />
    </div>
    <div v-show="!filteredFeed">
      <div class="flex space-x-4 w-full">
        <USkeleton class="h-10 w-10 align-top dark:bg-opacity-100" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2 w-full mb-10">
          <header class="mb-5">
            <USkeleton class="h-5 w-[150px] mb-2 dark:bg-opacity-100" />
            <USkeleton class="h-5 w-[250px] dark:bg-opacity-90" />
          </header>
          <USkeleton class="h-8 w-full my-10  dark:bg-opacity-80" />
          <USkeleton class="h-12 w-full my-10 dark:bg-opacity-70" />
          <USkeleton class="h-16 w-full my-10 dark:bg-opacity-60" />
        </div>
      </div>
      <div class="flex space-x-4 w-full">
        <USkeleton class="h-10 w-10 align-top dark:bg-opacity-50" :ui="{ rounded: 'rounded-full' }" />
        <div class="space-y-2 w-full mb-10">
          <header class="mb-5">
            <USkeleton class="h-5 w-[150px] mb-2 dark:bg-opacity-50" />
            <USkeleton class="h-5 w-[250px] dark:bg-opacity-40" />
          </header>
          <USkeleton class="h-8 w-full my-10  dark:bg-opacity-30" />
          <USkeleton class="h-12 w-full my-10 dark:bg-opacity-20" />
          <USkeleton class="h-16 w-full my-10 dark:bg-opacity-10" />
        </div>
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
