<script lang="ts" setup>
definePageMeta({
  documentDriven: false
})
setMetaData('Feed', false)
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex-grow z-10 pt-[100px] mb-[100px] overflow-hidden">
        <div class="container">
          <div class="flex flex-wrap">
            <breadcrumb-component page-name="Feed" path="/feed" />
            <div class="px-2 mb-4 md:mb-0">
              <div class="flex flex-wrap">
                <h1 class="font-bold text-dark dark:text-white text-2xl sm:text-3xl mb-5 animate__animated animate__pulse">
                  Social Feed
                </h1>
              </div>
              <div class="flex flex-wrapk">
                <p class="font-medium text-base !text-body-color leading-relaxed mb-4 prose">
                  fetched from <NuxtLink to="https://elk.zone/fosstodon.org/@vernaillen" target="_blank">
                    Mastodon <span class="flex-shrink-0 h-4 w-4 i-mdi-mastodon" />
                  </NuxtLink>
                </p>
              </div>
            </div>
          </div>

          <div class="container px-0 max-w-[40rem]">
            <div class="flex flex-wrap justify-start slide-enter-content">
              <SocialFeed />
            </div>
          </div>
        </div>
      </main>
      <div>
        <span class="absolute top-10 left-0 z-[-1] animate__animated animate__fadeIn">
          <SvgoBackgroundLeft1 class="w-full" />
        </span>
        <span class="absolute right-[-160px] top-10 z-[-1] animate__animated animate__fadeIn">
          <SvgoBackgroundRight1 class="w-full" />
        </span>
      </div>
    </NuxtLayout>
  </div>
</template>
