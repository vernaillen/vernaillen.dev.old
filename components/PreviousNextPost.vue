<script setup lang="ts">
useRouter()
const route = useRoute()
const [prev, next] = await queryContent('/news')
  .where({ news: true })
  .findSurround(route.path)
</script>

<template>
  <div class="container mx-auto p-4 mt-10 mb-20">
    <div class="flex flex-wrap">
      <div
        class="w-full md:w-1/2 text-end order-1 md:order-2 justify-end font-medium text-base text-body-color leading-relaxed"
      >
        <NuxtLink v-if="next" :to="next.path">
          next:<br>
          <span class="text-primary">{{ next.title }}</span>
        </NuxtLink>
      </div>
      <div class="w-full md:w-1/2 order-2 md:order-1 justify-start font-medium text-base text-body-color leading-relaxed">
        <NuxtLink v-if="prev" :to="prev.path">
          previous:<br>
          <span class="text-primary">{{ prev.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
