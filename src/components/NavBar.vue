<template>
  <ul class="ud-block lg:ud-flex">
    <li
      v-for="(item, index) in navItems"
      :key="index"
      class="ud-relative ud-group"
    >
      <router-link
        :to="item.path"
        class="menu-scroll ud-text-base ud-text-black dark:ud-text-white group-hover:ud-opacity-70 ud-py-2 lg:ud-pt-4 lg:ud-pb-6 lg:ud-inline-flex ud-px-7 lg:ud-px-1 ud-flex ud-mr-7"
        :class="addClasses(item.path)"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const navItems = [
  { path: "/", title: "Home" },
  //{ path: "/career", title: "Career" },
  { path: "/blog", title: "Blog" },
  { path: "/music", title: "Music" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];

const addClasses = (path: string) => {
  const currentRoute = useRoute().path;
  console.log(currentRoute);
  let classToAdd = "";
  if (path != "/" && currentRoute.startsWith(path))
    classToAdd = "router-link-active";
  return classToAdd;
};
</script>

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
