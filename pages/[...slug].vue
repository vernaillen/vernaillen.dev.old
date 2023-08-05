<script setup lang="ts">
const { page } = useContent()
const route = useRoute()
useRouter()

if (page.value) { setMetaData(page.value.title, true) } else { setResponseStatus(404) }
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex flex-col min-h-screen mb-[50px]">
        <section class="relative z-10 pt-[100px] overflow-hidden">
          <div class="container">
            <div v-if="page">
              <breadcrumb-component :page-name="page.pageName ? page.title : ''" :path="route.path" />
              <previous-next-post />
              <div class="px-2">
                <div v-if="page.title">
                  <div class="flex flex-wrap">
                    <h1 class="font-bold text-dark dark:text-white text-2xl sm:text-3xl mb-5 animate__animated animate__pulse">
                      {{ page.title }}
                    </h1>
                  </div>
                  <div class="flex flex-wrap">
                    <div
                      v-if="page.desc"
                      class="font-medium text-base text-body-color leading-relaxed mb-4"
                    >
                      {{ page.desc }}
                    </div>
                  </div>
                </div>
              </div>
              <SocialComments :page="page" />
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
        </section>
        <section v-if="page" class="relative z-10 py-2">
          <div class="container">
            <div class="flex flex-wrap">
              <div class="w-full px-4 md:px-8">
                <div class="mx-auto">
                  <article
                    class="m-auto font-medium text-lg md:text-xl leading-relaxed md:leading-relaxed text-body-color dark:text-white dark:opacity-90 slide-enter-content"
                    :class="page.disableProse ? '' : 'prose prose-primary dark:prose-invert'"
                  >
                    <ContentDoc />
                  </article>
                </div>
              </div>
              <div v-if="page.author" class="inline-flex align-top items-center mx-2">
                <div
                  v-if="page.author === 'Wouter Vernaillen'"
                  class="max-w-[20px] h-[20px] rounded-full overflow-hidden mr-2 mt-[-5px]"
                >
                  <VImage src="/images/wouter.jpg" :width="20" :height="20" alt="author" class="w-full" />
                </div>
                <div class="flex flex-nowrap items-center text-xs text-body-color hover:text-primary-500 font-small mr-2">
                  by <NuxtLink to="/about" class="ml-1">
                    {{ page.author }}
                  </NuxtLink>
                </div>
              </div>

              <div v-if="page.location" class="inline-flex align-top ml-1 mr-2 text-xs text-body-color font-medium">
                <UIcon name="i-mdi-map-marker" class="w-4 h-4 -mb-[3px] mr-1" />
                {{ page.location }}
              </div>
              <div v-if="page.date" class="inline-flex align-top items-center">
                <span class="flex items-center text-xs text-body-color font-medium ml-1 mr-2">
                  <UIcon name="i-lucide-calendar-days" class="w-4 h-4 mx-1" />
                  first published on {{ longDateFormat(page.date) }}
                </span>
              </div>
              <MarkdownGitHub
                v-if="!page.hideGitHub"
                :page="page"
                class="inline-flex align-top text-xs text-body-color font-medium"
              />
              <SocialComments :page="page" />
            </div>
            <previous-next-post class="mt-10" />
            <GoUp />
          </div>
        </section>
        <section v-else class="relative z-10 py-2">
          <div class="container">
            <div class="flex flex-wrap">
              <div class="w-full p-4 md:px-8">
                <div class="prose prose-primary dark:prose-invert mx-auto">
                  <article>
                    <ContentDoc path="/_404" />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="absolute left-0 bottom-5 z-[-1]">
          <SvgoFooter class="w-20" />
        </div>
      </main>
    </NuxtLayout>
  </div>
</template>
