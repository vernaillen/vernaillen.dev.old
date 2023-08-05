<script setup lang="ts">
useRouter()
const route = useRoute()
const [prev, next] = await queryContent('/blog')
  .where({ news: true })
  .findSurround(route.path)
</script>

<template>
  <div class="container prose prose-primary dark:prose-invert font-mono mx-0 px-2 my-6">
    <div class="grid grid-cols-2">
      <div class="justify-start">
        <UButton
          v-if="prev"
          :to="prev._path"
          variant="soft"
          size="xs"
          leading-icon="i-mdi-arrow-left"
        >
          previous
        </UButton>
      </div>
      <div class="text-end justify-end">
        <UButton
          v-if="next"
          :to="next._path"
          variant="soft"
          size="xs"
          trailing-icon="i-mdi-arrow-right"
        >
          next
        </UButton>
      </div>
    </div>
  </div>
</template>
