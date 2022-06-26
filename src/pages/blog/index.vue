<script setup lang="ts">
import { formatDate } from "@/logics";
import blog, { getImageUrl } from "@/classes/blog";
import type { Post } from "@/types";
const posts: Post[] = blog.getPosts();
</script>

<template>
  <header-component />
  <section class="ud-relative ud-z-10 ud-pt-[100px] ud-overflow-hidden">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap">
        <breadcrumb-component pageName="Blog" path="/blog" />
        <div class="ud-px-4 ud-mb-12 md:ud-mb-0">
          <div class="ud-flex ud-flex-wrap">
            <h1
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-2xl sm:ud-text-3xl ud-mb-5 animated pulse"
            >
              Blog
            </h1>
          </div>
          <div class="ud-flex ud-flex-wrapk">
            <p
              class="ud-font-medium ud-text-base ud-text-body-color ud-leading-relaxed ud-mb-8"
            >
              Occasional thoughts and writings
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <span class="ud-absolute ud-top-0 ud-left-0 ud-z-[-1]">
        <svg-background-left1 />
      </span>
      <span class="ud-absolute ud-right-0 ud-top-0 ud-z-[-1]">
        <svg-background-right1 />
      </span>
    </div>
  </section>
  <section class="ud-pt-[20px] ud-pb-[100px]">
    <div class="ud-container">
      <div
        class="ud-flex ud-flex-wrap ud-mx-[-16px] ud-justify-start ud-py-4 ud-px-2 md:ud-px-6"
      >
        <div
          v-for="post in posts"
          :key="post.path"
          class="ud-w-full md:ud-w-2/3 lg:ud-w-1/2 xl:ud-w-1/3 ud-px-4"
        >
          <div
            class="blog-card ud-relative ud-bg-white dark:ud-bg-dark ud-shadow-one ud-rounded-md ud-overflow-hidden ud-mb-10 animated fadeIn"
          >
            <router-link
              :to="post.path"
              class="ud-w-full ud-block ud-relative ud-h-[161px] md:ud-h-[139px] xl:ud-h-[109px] 2xl:ud-h-[128px]"
            >
              <span
                v-if="post.category"
                class="ud-absolute ud-top-6 ud-right-6 ud-bg-primary ud-rounded-full ud-inline-flex ud-items-center ud-justify-center ud-py-2 ud-px-4 ud-font-semibold ud-text-sm ud-text-white"
              >
                {{ post.category }}
              </span>
              <img
                :src="getImageUrl(post, true)"
                alt="image"
                class="ud-w-full light:ud-hidden"
              />
              <img
                :src="getImageUrl(post, false)"
                alt="image"
                class="ud-w-full dark:ud-hidden"
              />
            </router-link>
            <div
              class="ud-p-6 sm:ud-p-8 md:ud-py-8 md:ud-px-6 lg:ud-p-8 xl:ud-py-8 xl:ud-px-5 2xl:ud-p-8"
            >
              <h3>
                <router-link
                  :to="post.path"
                  class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl sm:ud-text-2xl ud-block ud-mb-4 hover:ud-text-primary dark:hover:ud-text-primary"
                >
                  {{ post.title }}
                </router-link>
              </h3>
              <p
                class="ud-text-base ud-text-body-color ud-font-medium ud-pb-6 ud-mb-6 ud-border-b ud-border-body-color ud-border-opacity-10 dark:ud-border-white dark:ud-border-opacity-10"
              >
                {{ post.desc }}
              </p>
              <div class="ud-flex">
                <div
                  class="ud-flex ud-pr-5 ud-mr-5 xl:ud-pr-3 2xl:ud-pr-5 xl:ud-mr-3 2xl:ud-mr-5 ud-border-r ud-border-body-color ud-border-opacity-10 dark:ud-border-white dark:ud-border-opacity-10"
                >
                  <div
                    class="ud-max-w-[20px] ud-w-full ud-h-[20px] ud-rounded-full ud-overflow-hidden ud-mr-4"
                  >
                    <img
                      src="/images/wouter.jpg"
                      alt="author"
                      class="ud-w-full"
                    />
                  </div>
                  <div class="ud-w-full">
                    <h4
                      class="ud-text-xs ud-font-medium ud-text-dark dark:ud-text-white ud-mb-1"
                    >
                      <router-link
                        to="/about"
                        class="ud-text-dark dark:ud-text-white hover:ud-text-primary dark:hover:ud-text-primary"
                      >
                        {{ post.author }}
                      </router-link>
                    </h4>
                    <p class="ud-text-xs ud-text-body-color">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div class="ud-inline-block">
                  <p class="ud-text-xs ud-text-body-color">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" /><span
                      class="ud-mr-2 fa-solid fa-calendar-days"
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
