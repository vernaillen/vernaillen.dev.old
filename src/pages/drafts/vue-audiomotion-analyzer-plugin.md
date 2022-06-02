---
title: Vue AudioMotion Analyzer
desc: A Vue plugin wrapping Henrique Vianna's  
pageName: Vue AudioMotion Analyzer
date: 06/03/2022
tag:
- website
- vue
- vite
- netlify
- markdown
- all
category: Vue
author: Wouter Vernaillen
location: Zottegem, Belgium
---

On this website, as well as the website of another side project, I wanted to integrate the [audioMotion analyzer](https://audiomotion.dev/) from [Henrique Vianna](https://github.com/hvianna).
To make it easy to add it in a Vue project, I decided to wrap it into a vue plugin.

## Vite SSG

The pages in this website are generated with vite-ssg, but the vue-audiomotion-analyzer is loaded within a **\<client-only\>** tag and is added in the main App.vue component outside the **\<router-link\>**, which makes sure it stays active and keeps playing while navigating (changing routes)

```vue
<template>
  <router-view />
  <client-only>
    <my-audio-motion-analyzer />
  </client-only>
</template>
```
