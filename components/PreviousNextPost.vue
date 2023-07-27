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
          next <UIcon name="i-mdi-arrow-right" class="-mb-[2px]" />
        </NuxtLink>
      </div>
      <div class="w-full md:w-1/2 order-2 md:order-1 justify-start">
        <NuxtLink v-if="prev" :to="prev._path" class="opacity-50 hover:opacity-90">
          <UIcon name="mdi-arrow-left" class="-mb-[2px]" /> previous
        </NuxtLink>
      </div>
    </div>
    <GoUp />
  </div>
</template>
