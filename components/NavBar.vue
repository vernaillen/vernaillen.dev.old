<script setup lang="ts">
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
  <ul class="block lg:flex">
    <li v-for="(item, index) in useNavItems()" :key="index" class="relative group">
      <NuxtLink
        :to="item.path"
        class="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70 py-2 lg:pt-4 lg:pb-6 lg:inline-flex px-7 lg:px-1 flex mr-7"
        :class="linkClass(item.path)"
      >
        {{ item.title }}
      </NuxtLink>
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
