<script setup lang="ts">
import SvgBackgroundLeft1 from '@/components/svg/svg-background-left-1.svg?component'
import SvgBackgroundRight1 from '@/components/svg/svg-background-right-1.svg?component'
import { formatDate } from '@/logics/dayjs'

const props = defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
useRouter()
const route = useRoute()

const prose = () => {
  if (props.frontmatter.disableProse)
    return ''
  return 'prose'
}
</script>

<template>
  <header-component />
  <main class="flex flex-col min-h-screen mb-[50px]">
    <section class="relative z-10 pt-[100px] overflow-hidden">
      <div class="container">
        <div class="flex flex-wrap">
          <breadcrumb-component :page-name="frontmatter.pageName ? frontmatter.title : ''" :path="route.path" />
          <div class="px-4">
            <div v-if="frontmatter.title" class="mb-2">
              <div class="flex flex-wrap">
                <h1
                  class="font-bold text-dark dark:text-white text-2xl sm:text-3xl mb-5 animated pulse"
                >
                  {{ frontmatter.title }}
                </h1>
              </div>

              <div class="flex flex-wrap">
                <p
                  v-if="frontmatter.desc" :style="`background: ${frontmatter.bgColor};`"
                  class="font-medium text-base text-body-color leading-relaxed mb-8"
                >
                  {{ frontmatter.desc }}
                </p>
              </div>
            </div>

            <div class="flex flex-wrap items-center">
              <div v-if="frontmatter.author" class="flex items-center mr-5 mb-5">
                <div
                  v-if="frontmatter.author === 'Wouter Vernaillen'"
                  class="max-w-[20px] w-full h-[20px] rounded-full overflow-hidden mr-2"
                >
                  <img src="/images/wouter.jpg" alt="author" class="w-full">
                </div>
                <div class="w-full">
                  <p class="flex items-center text-xs text-body-color font-small mr-2">
                    <router-link to="/about">
                      {{ frontmatter.author }}
                    </router-link>
                  </p>
                </div>
              </div>
              <div v-if="frontmatter.date" class="flex items-center mr-2 mb-5">
                <p class="flex items-center text-xs text-body-color font-medium mr-3">
                  <font-awesome-icon :icon="['fas', 'calendar-days']" /><span class="mr-2 fa-solid fa-calendar-days" />
                  {{ formatDate(frontmatter.date) }}
                </p>
              </div>
              <client-only>
                <MarkdownGitHub v-if="!frontmatter.hideGitHub" />
              </client-only>
              <div v-if="frontmatter.location" class="flex items-center mr-2 mb-5">
                <p class="flex items-center text-xs text-body-color font-medium mr-2">
                  <font-awesome-icon :icon="['fas', 'location-pin']" /><span class="mr-2 fa-solid fa-location-pin" />
                  {{ frontmatter.location }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="absolute top-0 left-0 z-[-1] animated fadeIn">
          <SvgBackgroundLeft1 />
        </span>
        <span class="absolute right-0 top-0 z-[-1] animated fadeIn">
          <SvgBackgroundRight1 />
        </span>
      </div>
    </section>
    <section class="relative z-10 py-2">
      <div class="container">
        <div class="flex flex-wrap mx-[-16px]">
          <div class="w-full py-4 px-8 md:px-12">
            <div class="mx-auto">
              <p
                class="m-auto font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 animated fadeIn"
                :class="prose()"
              >
                <slot />
              </p>
            </div>
          </div>
          <div v-if="frontmatter.mastodonPost" class="w-full px-8 text-white prose">
            <font-awesome-icon :icon="['fas', 'comments']" class="animated bounceIn" /><br>
            comment on
            <a :href="frontmatter.mastodonPost" target="_blank">mastodon</a>
          </div>
        </div>
      </div>
      <previous-next-post />
    </section>
  </main>
</template>
