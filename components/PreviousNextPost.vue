<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

useRouter()
const route = useRoute()
const prev = ref<ParsedContent | null>(null)
const next = ref<ParsedContent | null>(null)
const [foundPrev, foundNext] = await queryContent('/blog')
  .where({ news: true })
  .findSurround(route.path)

if (foundPrev?._path?.startsWith('/blog')) {
  prev.value = foundPrev
}
if (foundNext?._path?.startsWith('/blog')) {
  next.value = foundNext
}
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
