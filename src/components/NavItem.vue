<template>
  <li class="ud-relative ud-group">
    <router-link
      :to="path"
      class="menu-scroll ud-text-base ud-text-black dark:ud-text-white group-hover:ud-opacity-70 ud-py-2 lg:ud-pt-4 lg:ud-pb-6 lg:ud-inline-flex lg:ud-px-1 ud-flex ud-mx-7 lg:ud-mr-0"
      :class="addClasses"
    >
      {{ title }}
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const addClasses = computed(() => {
  const currentRoute = useRoute().path;
  console.log(currentRoute);
  let classToAdd = "";
  if (props.path != "/" && currentRoute.startsWith(props.path))
    classToAdd = "router-link-active";
  return classToAdd;
});
</script>
