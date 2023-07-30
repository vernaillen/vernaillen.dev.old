<script lang="ts" setup>
const [mastodon] = await Promise.all([
  $fetch('/_social/mastodon')
])
const sortedFeed = [...mastodon].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
)
</script>

<template>
  <div v-for="item, index in sortedFeed" :key="item.permalink" class="w-full">
    <FeedPost
      :post="item"
      class="slide-enter"
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
