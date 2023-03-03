<script setup lang="ts">
import { useMobileNav } from '@/stores/mobileNav'
const mobileNav = useMobileNav()

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
const closeNav = () => {
  setTimeout(() => {
    mobileNav.hide()
  }, 400)
}
</script>

<template>
  <ul class="block lg:flex justify-center my-0">
    <li v-for="(item, index) in useNavItems()" :key="index" class="relative group justify-center my-0">
      <NuxtLink
        :to="item.path"
        class="menu-scroll text-base text-dark dark:text-white group-hover:opacity-70
        text-center items-center justify-center
        flex py-2 my-2 px-10
        lg:inline-flex lg:mt-0 lg:pt-4 lg:pb-6 lg:px-2 lg:mx-2
        border-[3px] border-transparent bg-primary
        bg-opacity-0
        lg:border-t lg:border-l-0 lg:border-r-0"
        :class="linkClass(item.path)"
        @click="closeNav"
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
    border-top: 3px solid #9C8E1B;
  }
}
@media (max-width: 959px) {
  nav ul li a.router-link-active {
    border-left: 3px solid #9C8E1B;
    border-right: 3px solid #9C8E1B;
    --tw-bg-opacity: 0.1;
  }
  html.dark nav ul li a.router-link-active {
    --tw-bg-opacity: 0.05;
  }
}
</style>
