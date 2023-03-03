<script setup lang="ts">
import { useMobileNav } from '@/stores/mobileNav'
const mobileNav = useMobileNav()
</script>

<template>
  <div v-if="!mobileNav.visible" class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 80%;
  filter: blur(0.1rem);
}
</style>
