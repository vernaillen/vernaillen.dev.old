<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div class="flex flex-wrap mt-8">
    <div class="w-full text-sm prose">
      <NuxtLink
        :to="route.path.split('/').slice(0, -1).join('/') || '/'"
        class="opacity-50 hover:opacity-90"
      >
        <UIcon name="i-heroicons-arrow-uturn-up" clas="w-4 h-4 " />
        cd ..
      </NuxtLink>
    </div>
  </div>
</template>
