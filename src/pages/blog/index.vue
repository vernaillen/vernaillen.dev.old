<script setup lang="ts">
import { formatDate } from '@/logics/dayjs'
import blog, { type Post, getImageUrl } from '@/logics/blog'
</script>

<template>
  <header-component />
  <section class="relative z-10 pt-[100px] overflow-hidden">
    <div class="container">
      <div class="flex flex-wrap">
        <breadcrumb-component page-name="Blog" path="/blog" />
        <div class="px-4 mb-12 md:mb-0">
          <div class="flex flex-wrap">
            <h1 class="font-bold text-black dark:text-white text-2xl sm:text-3xl mb-5 animated pulse">
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
      <span class="absolute top-0 left-0 z-[-1]">
        <svg-background-left1 />
      </span>
      <span class="absolute right-0 top-0 z-[-1]">
        <svg-background-right1 />
      </span>
    </div>
  </section>
  <section class="pt-[20px] pb-[100px]">
    <div class="container">
      <div class="flex flex-wrap mx-[-16px] justify-start py-4 px-2 md:px-6">
        <div
          v-for="post in blog.getPosts()" :key="post.path"
          class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 px-4"
        >
          <div
            class="blog-card relative bg-white dark:bg-dark shadow-one rounded-md overflow-hidden mb-10 animated fadeIn"
          >
            <router-link
              :to="post.path"
              class="w-full block relative h-[161px] md:h-[139px] xl:h-[109px] 2xl:h-[128px]"
            >
              <span
                v-if="post.category"
                class="absolute top-6 right-6 bg-primary rounded-full inline-flex items-center justify-center py-2 px-4 font-semibold text-sm text-white"
              >
                {{ post.category }}
              </span>
              <img :src="getImageUrl(post, true)" alt="image" class="w-full light:hidden">
              <img :src="getImageUrl(post, false)" alt="image" class="w-full dark:hidden">
            </router-link>
            <div class="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
              <h3>
                <router-link
                  :to="post.path"
                  class="font-bold text-black dark:text-white text-xl sm:text-2xl block mb-4 hover:text-primary dark:hover:text-primary"
                >
                  {{ post.title }}
                </router-link>
              </h3>
              <p
                class="text-base text-body-color font-medium pb-6 mb-6 border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
              >
                {{ post.desc }}
              </p>
              <div class="flex">
                <div
                  class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
                >
                  <div class="max-w-[20px] w-full h-[20px] rounded-full overflow-hidden mr-4">
                    <img src="/images/wouter.jpg" alt="author" class="w-full">
                  </div>
                  <div class="w-full">
                    <h4 class="text-xs font-medium text-dark dark:text-white mb-1">
                      <router-link
                        to="/about"
                        class="text-dark dark:text-white hover:text-primary dark:hover:text-primary"
                      >
                        {{ post.author }}
                      </router-link>
                    </h4>
                    <p class="text-xs text-body-color">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div class="inline-block">
                  <p class="text-xs text-body-color">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" /><span
                      class="mr-2 fa-solid fa-calendar-days"
                    />
                    {{ formatDate(post.date) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer-component />
</template>
