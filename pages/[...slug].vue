<script setup lang="ts">
import SvgBackgroundLeft1 from '@/components/svg/svg-background-left-1.svg?component'
import SvgBackgroundRight1 from '@/components/svg/svg-background-right-1.svg?component'

const { page } = useContent()
useRouter()
const route = useRoute()

const prose = () => {
  if (page.value.disableProse)
    return ''
  return 'prose'
}
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex flex-col min-h-screen mb-[50px]">
        <section class="relative z-10 pt-[100px] overflow-hidden">
          <div class="container">
            <div v-if="page">
              <breadcrumb-component :page-name="page.pageName ? page.title : ''" :path="route.path" />
              <div class="px-4">
                <div v-if="page.title" class="mb-2">
                  <div class="flex flex-wrap">
                    <h1 class="font-bold text-dark dark:text-white text-2xl sm:text-3xl mb-5 animate__animated animate__pulse">
                      {{ page.title }}
                    </h1>
                  </div>
                  <div class="flex flex-wrap">
                    <div
                      v-if="page.desc" :style="`background: ${page.bgColor};`"
                      class="font-medium text-base text-body-color leading-relaxed mb-8"
                    >
                      {{ page.desc }}
                    </div>
                  </div>
                </div>
                <div v-if="page.author" class="inline-flex align-top items-center mr-2">
                  <div
                    v-if="page.author === 'Wouter Vernaillen'"
                    class="max-w-[20px] h-[20px] rounded-full overflow-hidden mr-2 mt-[-5px]"
                  >
                    <img src="/images/wouter.jpg" alt="author" class="w-full">
                  </div>
                  <div class="flex flex-nowrap items-center text-xs text-body-color hover:text-primary font-small mr-2">
                    <NuxtLink to="/about">
                      {{ page.author }}
                    </NuxtLink>
                  </div>
                </div>
                <div v-if="page.location" class="inline-flex align-top mr-2 text-xs text-body-color font-medium">
                  <Icon name="fa6-solid:location-pin" class="mr-2" />
                  {{ page.location }}
                </div>
                <div v-if="page.date" class="inline-flex align-top items-center mx-2">
                  <span class="flex items-center text-xs text-body-color font-medium mr-3">
                    <Icon name="lucide:calendar-days" class="mr-2" />
                    published on {{ formatDate(page.date) }}
                  </span>
                </div>
                <MarkdownGitHub
                  v-if="!page.hideGitHub"
                  :page="page"
                  class="inline-flex align-top text-xs text-body-color font-medium mr-2"
                />
              </div>
            </div>
          </div>
          <div>
            <span class="absolute top-0 left-0 z-[-1] animate__animated animate__fadeIn">
              <SvgBackgroundLeft1 />
            </span>
            <span class="absolute right-0 top-0 z-[-1] animate__animated animate__fadeIn">
              <SvgBackgroundRight1 />
            </span>
          </div>
        </section>
        <section v-if="page" class="relative z-10 py-2">
          <div class="container">
            <div class="flex flex-wrap mx-[-16px]">
              <div class="w-full py-4 px-8 md:px-12">
                <div class="mx-auto">
                  <article
                    class="m-auto font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 animate__animated animate__fadeIn"
                    :class="prose()"
                  >
                    <ContentDoc />
                  </article>
                </div>
              </div>
              <div v-if="page.mastodonPost" class="w-full px-8 text-white prose">
                <Icon name="fa6-solid:comments" class="animate__animated animate__bounceIn" /><br>
                comment on
                <a :href="page.mastodonPost" target="_blank">mastodon</a>
              </div>
            </div>
          </div>
          <previous-next-post />
        </section>
      </main>
    </NuxtLayout>
  </div>
</template>
