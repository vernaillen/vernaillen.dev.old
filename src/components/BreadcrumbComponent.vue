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
    <div class="">
      <ul class="flex justify-end">
        <li class="flex">
          <router-link
            to="/"
            class="font-medium text-base text-body-color pr-2 hover:text-primary"
          >
            Home
          </router-link>
          <span
            class="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mt-2 mr-3"
          />
        </li>
        <li
          v-if="path.startsWith('/blog/')"
          class="flex font-medium text-base text-primary"
        >
          <router-link
            to="/blog"
            class="font-medium text-base text-body-color pr-2 hover:text-primary"
          >
            Blog
          </router-link>
          <span
            v-if="path.startsWith('/blog')"
            class="block w-2 h-2 border-t-2 border-r-2 border-body-color rotate-45 mt-2 mr-3"
          />
        </li>
        <li
          v-if="pageName"
          class="flex font-medium text-base text-primary"
        >
          {{ pageName }}
        </li>
      </ul>
    </div>
  </div>
</template>
