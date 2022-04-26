<script setup lang="ts">
import blog from "@/classes/blog";
import { Post } from "@/types";
const posts: Post[] = blog.getPosts();
</script>

<template>
  <template v-if="!posts.length">
    <div py2 op50>{ nothing here yet }</div>
  </template>
  <ul>
    <li
      v-for="post in posts"
      :key="post.path"
      class="item block font-normal mb-6 mt-2 no-underline"
    >
      <router-link :to="post.path">{{ post.title }}</router-link>
    </li>
  </ul>
</template>
