<template>
  <ul class="ud-block lg:ud-flex">
    <li
      v-for="(item, index) in navItems"
      :key="index"
      class="ud-relative ud-group"
    >
      <router-link
        :to="item.path"
        class="menu-scroll ud-text-base ud-text-black dark:ud-text-white group-hover:ud-opacity-70 ud-py-2 lg:ud-pt-4 lg:ud-pb-6 lg:ud-inline-flex lg:ud-px-1 ud-flex ud-mx-7 lg:ud-mr-0"
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
  { path: "/about", title: "About" },
  //{ path: "/career", title: "Career" },
  { path: "/blog", title: "Blog" },
  { path: "/music", title: "Music" },
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
