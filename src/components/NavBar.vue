<script setup lang="ts">
import { navItems } from '@/logics/nav'

const linkClass = (path: string) => {
  const currentRoute = useRoute().path
  let classToAdd = ''
  if (
    (path !== '/' && currentRoute.startsWith(path))
    || (currentRoute === '/thanks' && path === '/contact')
  )
    classToAdd = 'router-link-active'
  return classToAdd
}
</script>

<template>
  <ul class="ud-block lg:ud-flex">
    <li v-for="(item, index) in navItems" :key="index" class="ud-relative ud-group">
      <router-link
        :to="item.path"
        class="menu-scroll ud-text-base ud-text-black dark:ud-text-white group-hover:ud-opacity-70 ud-py-2 lg:ud-pt-4 lg:ud-pb-6 lg:ud-inline-flex ud-px-7 lg:ud-px-1 ud-flex ud-mr-7"
        :class="linkClass(item.path)"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
nav ul li a {
  border-top: 3px solid transparent;
}
@media (min-width: 960px) {
  nav ul li a.router-link-active {
    border-top: 3px solid #9c8e1b;
  }
}
@media (max-width: 959px) {
  nav ul li a.router-link-active {
    border-left: 3px solid #9c8e1b;
  }
}
</style>
