<script lang="ts" setup>
const showReblogs = ref(false)
const [mastodon] = await Promise.all([
  $fetch('/_social/mastodon')
])
const sortedFeed = [...mastodon].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
)
</script>

<template>
  <div>
    <div class="pb-5 -mt-5 text-right">
      Show reblogs: <UToggle v-model="showReblogs" class="-mb-2" />
    </div>
    <FeedPost
      v-for="item, index in sortedFeed"
      :key="item.permalink"
      :post="item"
      class="slide-enter transition-all transform duration-300 ease-in-out "
      :class="showReblogs || !item.reblogged ? 'opacity-100 block' : '!opacity-0 hidden'"
      :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
    />
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
