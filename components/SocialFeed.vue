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
  }, 300)
})
</script>

<template>
  <div class="w-full slide-enter" style="--enter-stage:1;--enter-step:60ms;">
    <div class="pb-5 -mt-5 text-right">
      Show reblogs: <UToggle v-model="showReblogs" class="-mb-[20px]" />
    </div>
    <div v-if="filteredFeed">
      <FeedPost
        v-for="item, index in filteredFeed"
        :key="index"
        :post="item"
        class="animate__animated animate__fadeIn animated__faster"
      />
    </div>
    <div v-else>
      <article
        v-for="items, index in [1, 2]"
        :key="index"
        class="p-2 sm:p-3 md:p-4 mb-8 relative text-base flex flex-row gap-2 rounded-md shadow-lg min-h-12 transition-all border-[1px] border-solid border-transparent after:text-transparent"
      >
        <div class="flex space-x-4 w-full">
          <USkeleton class="h-10 w-10 align-top" :ui="{ rounded: 'rounded-full' }" />
          <div class="space-y-2 w-full mb-10">
            <header class="mb-5">
              <USkeleton class="h-5 w-[150px] mb-2" />
              <USkeleton class="h-5 w-[250px]" />
            </header>
            <USkeleton class="h-8 w-full my-10 " />
            <USkeleton class="h-12 w-full my-10" />
            <USkeleton class="h-16 w-full my-10" />
          </div>
        </div>
      </article>
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
