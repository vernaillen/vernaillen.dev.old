<script setup lang="ts">
const { data: posts } = await useLazyAsyncData('posts', () =>
  queryContent('/blog')
    .where({ news: true })
    .sort({ _file: -1 })
    .find())

definePageMeta({
  documentDriven: false,
})
setMetaData('Blog', false)
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex-grow z-10 pt-[100px] mb-[100px] overflow-hidden">
        <div class="container">
          <div class="flex flex-wrap">
            <breadcrumb-component page-name="Blog" path="/blog" />
            <div class="px-4 mb-4 md:mb-0">
              <div class="flex flex-wrap">
                <h1 class="font-bold text-dark dark:text-white text-2xl sm:text-3xl mb-5 animate__animated animate__pulse">
                  Blog
                </h1>
              </div>
              <div class="flex flex-wrapk">
                <p class="font-medium text-base text-body-color leading-relaxed mb-8">
                  Occasional thoughts and writings
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span class="absolute top-10 left-0 z-[-1] animate__animated animate__fadeIn">
            <SvgoBackgroundLeft1 class="w-full" />
          </span>
          <span class="absolute right-[-160px] top-10 z-[-1] animate__animated animate__fadeIn">
            <SvgoBackgroundRight1 class="w-full" />
          </span>
        </div>
        <div class="container">
          <div class="flex flex-wrap mx-[-16px] justify-start px-2 md:px-6">
            <div
              v-for="post in posts" :key="post.path"
              class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4"
            >
              <BlogPostItem :post="post" />
            </div>
          </div>
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
