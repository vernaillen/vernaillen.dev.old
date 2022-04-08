<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = router.getRoutes()
  .filter(i => i.path.startsWith('/blog/') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

</script>

<template>
    <template v-if="!posts.length">
      <div py2 op50>
        { nothing here yet }
      </div>
    </template>
    <ul>
      <li
        v-for="post in posts" :key="post.path"
        class="item block font-normal mb-6 mt-2 no-underline"
        
      >
        <a :href="post.path">{{post.name}}</a>
      </li>
    </ul>
</template>
