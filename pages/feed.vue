<script lang="ts" setup>
definePageMeta({
  documentDriven: false
})
setMetaData('Feed', false)
</script>

<template>
  <div>
    <NuxtLayout>
      <main class="flex flex-col min-h-screen mb-[50px]">
        <section class="relative z-10 pt-[100px] overflow-hidden">
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
                    posts fetched from these <span class="flex-shrink-0 h-4 w-4 i-mdi-mastodon" /> accounts:
                    <NuxtLink to="https://elk.zone/fosstodon.org/@vernaillen" target="_blank">
                      vernaillen@fosstodon.org
                    </NuxtLink>
                    and
                    <NuxtLink to="https://elk.zone/mastodon.art/@harmonics" target="_blank">
                      harmonics@mastodon.art
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
          <div>
            <span class="absolute top-10 left-0 z-[-1] animate__animated animate__fadeIn">
              <SvgoBackgroundLeft1 class="w-full" />
            </span>
            <span class="absolute right-[-160px] top-10 z-[-1] animate__animated animate__fadeIn">
              <SvgoBackgroundRight1 class="w-full" />
            </span>
          </div>
        </section>
      </main>
    </NuxtLayout>
  </div>
</template>
