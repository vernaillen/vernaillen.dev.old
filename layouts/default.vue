<script setup lang="ts">
const { isMobileNavOpen } = useMobileNav()
</script>

<template>
  <div v-if="!isMobileNavOpen" class="flex flex-col min-h-screen">
    <div class="flex-grow min-h-screen">
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
