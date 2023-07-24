<template>
  <div class="flex flex-col">
    <div v-for="item, index in sortedFeed" :key="item.permalink">
      <FeedPost
        :html="item.html"
        :handle="item.handle"
        :network="item.network"
        :account="item.account"
        :account-link="item.accountLink"
        :datetime="item.createdAt"
        :permalink="item.permalink"
        :media="item.media"
        :avatar="item.avatar"
        class="slide-enter"
        :style="'--enter-stage:' + index + ';--enter-step:60ms;'"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const [mastodon] = await Promise.all([
  $fetch('/_social/mastodon')
])
const sortedFeed = [...mastodon].sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
)
</script>

<style scoped>
div :global(.invisible) {
    display: none;
}

div :global(.ellipsis::after) {
    display: inline-block;
    content: '...';
}
</style>
