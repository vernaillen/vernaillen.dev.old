<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { formatDate } from "@/logics";
import MarkdownEditOnGitHub from "./MarkdownEditOnGitHub.vue";

useRouter();
const route = useRoute();

defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <header-component />
  <section class="ud-relative ud-z-10 ud-pt-[100px] ud-overflow-hidden">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-items-center ud-mx-[-16px]">
        <breadcrumb-component
          :page-name="frontmatter.pageName ? frontmatter.title : ''"
          :path="route.path"
        />
        <div class="ud-w-full ud-px-4">
          <div v-if="frontmatter.title" class="ud-mb-12 md:ud-mb-0">
            <h1
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-2xl sm:ud-text-3xl ud-mb-5"
            >
              {{ frontmatter.title }}
            </h1>
            <p
              v-if="frontmatter.desc"
              :style="`background: ${frontmatter.bgColor};`"
              class="ud-font-medium ud-text-base ud-text-body-color ud-leading-relaxed ud-mb-8"
            >
              {{ frontmatter.desc }}
            </p>
          </div>

          <div class="ud-flex ud-flex-wrap ud-items-center">
            <div
              v-if="frontmatter.author"
              class="ud-flex ud-items-center ud-mr-5 ud-mb-5"
            >
              <div
                v-if="frontmatter.author == 'Wouter Vernaillen'"
                class="ud-max-w-[20px] ud-w-full ud-h-[20px] ud-rounded-full ud-overflow-hidden ud-mr-2"
              >
                <img src="/images/wouter.jpg" alt="author" class="ud-w-full" />
              </div>
              <div class="ud-w-full">
                <p
                  class="ud-flex ud-items-center ud-text-xs ud-text-body-color ud-font-small ud-mr-2"
                >
                  <router-link to="/about">
                    {{ frontmatter.author }}
                  </router-link>
                </p>
              </div>
            </div>
            <div
              v-if="frontmatter.date"
              class="ud-flex ud-items-center ud-mr-2 ud-mb-5"
            >
              <p
                class="ud-flex ud-items-center ud-text-xs ud-text-body-color ud-font-medium ud-mr-3"
              >
                <font-awesome-icon :icon="['fas', 'calendar-days']" /><span
                  class="ud-mr-2 fa-solid fa-calendar-days"
                />
                {{ formatDate(frontmatter.date) }}
              </p>
            </div>
            <div
              v-if="false && frontmatter.location"
              class="ud-flex ud-items-center ud-mr-2 ud-mb-5"
            >
              <p
                class="ud-flex ud-items-center ud-text-xs ud-text-body-color ud-font-medium ud-mr-2"
              >
                <font-awesome-icon :icon="['fas', 'location-pin']" /><span
                  class="ud-mr-2 fa-solid fa-location-pin"
                />
                {{ frontmatter.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span class="ud-absolute ud-top-0 ud-left-0 ud-z-[-1] animated fadeIn">
        <svg-background-left1 />
      </span>
      <span class="ud-absolute ud-right-0 ud-top-0 ud-z-[-1] animated fadeIn">
        <svg-background-right1 />
      </span>
    </div>
  </section>
  <section class="ud-relative ud-z-10 ud-py-8">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-py-4 ud-px-8 md:ud-px-12">
          <div class="ud-mx-auto">
            <p
              class="ud-font-medium ud-text-lg md:ud-text-xl ud-leading-relaxed md:ud-leading-relaxed ud-text-body-color dark:ud-text-white dark:ud-opacity-90 animated fadeIn"
            >
              <slot />
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <MarkdownEditOnGitHub />
  <footer-component />
</template>
