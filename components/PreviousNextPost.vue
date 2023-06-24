<script setup lang="ts">
useRouter()
const route = useRoute()
const [prev, next] = await queryContent('/blog')
  .where({ news: true })
  .findSurround(route.path)
</script>

<template>
  <div class="container prose font-mono mx-auto p-4 mt-10 mb-20">
    <div class="flex flex-wrap">
      <div
        class="w-full md:w-1/2 text-end order-1 md:order-2 justify-end "
      >
        <NuxtLink v-if="next" :to="next._path" class="opacity-50 hover:opacity-90">
          next <Icon name="mdi-arrow-right" />
        </NuxtLink>
      </div>
      <div class="w-full md:w-1/2 order-2 md:order-1 justify-start">
        <NuxtLink v-if="prev" :to="prev._path" class="opacity-50 hover:opacity-90">
          <Icon name="mdi-arrow-left" /> previous
        </NuxtLink>
      </div>
    </div>
    <GoUp />
  </div>
</template>
