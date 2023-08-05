<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <div class="container prose prose-primary dark:prose-invert font-mono mx-0 px-2 my-6">
    <div class="flex flex-wrap mt-8">
      <div class="w-full text-sm prose">
        <UButton
          :to="route.path.split('/').slice(0, -1).join('/') || '/'"
          class="opacity-50 hover:opacity-90"
          leading-icon="i-heroicons-arrow-uturn-up"
          variant="soft"
          size="xs"
        >
          cd ..
        </UButton>
      </div>
    </div>
  </div>
</template>
