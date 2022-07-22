<script setup lang="ts">
import { type Post, getNextPost, getPreviousPost } from '@/logics/blog'

useRouter()
const route = useRoute()
const previousPost: Post | null = getPreviousPost(route.path)
const nextPost: Post | null = getNextPost(route.path)
</script>

<template>
  <div class="container mx-auto p-4 mt-10 mb-20">
    <div class="flex flex-wrap">
      <div
        class="w-full md:w-1/2 text-end order-1 md:order-2 justify-end font-medium text-base text-body-color leading-relaxed"
      >
        <router-link v-if="nextPost" :to="nextPost.path">
          next:<br>
          <span class="text-primary">{{ nextPost.title }}</span>
        </router-link>
      </div>
      <div class="w-full md:w-1/2 order-2 md:order-1 justify-start font-medium text-base text-body-color leading-relaxed">
        <router-link v-if="previousPost" :to="previousPost.path">
          previous:<br>
          <span class="text-primary">{{ previousPost.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
