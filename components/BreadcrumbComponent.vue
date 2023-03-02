<script setup lang="ts">
defineProps({
  pageName: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="w-full px-4 mb-10">
    <div>
      <ul class="flex justify-start">
        <li class="flex">
          <NuxtLink
            to="/"
            class="font-medium text-sm text-body-color pr-2 hover:text-primary"
          >
            Home
          </NuxtLink>
          <span
            class="block w-[7px] h-[7px] border-t-2 border-r-2 border-body-color rotate-45 mt-[7px] mr-3"
          />
        </li>
        <li
          v-if="path.startsWith('/blog/')"
          class="flex"
        >
          <NuxtLink
            to="/blog"
            class="font-medium text-sm text-body-color pr-2 hover:text-primary"
          >
            Blog
          </NuxtLink>
          <span
            v-if="path.startsWith('/blog')"
            class="block w-[7px] h-[7px] border-t-2 border-r-2 border-body-color rotate-45 mt-[7px] mr-3"
          />
        </li>
        <li
          v-if="pageName"
          class="flex font-medium text-sm text-primary"
        >
          {{ pageName }}
        </li>
      </ul>
    </div>
  </div>
</template>
