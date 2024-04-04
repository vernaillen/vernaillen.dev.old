<script setup lang="ts">
const { isMobileNavOpen } = useMobileNav()

const navbarTogglerClass = computed(() => {
  return isMobileNavOpen.value ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return isMobileNavOpen.value ? '' : 'hidden'
})
</script>

<template>
  <header class="header bg-transparent absolute top-0 left-0 z-20 h-16 w-full flex items-center transition-all">
    <div class="container h-16">
      <div class="lg:flex">
        <div class="lg:pl-8 lg:pr-4 max-w-full">
          <div class="w-full flex justify-center">
            <NuxtLink to="/" class="mx-auto" aria-label="go to Home">
              <SvgoLogo class="w-28" />
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex px-2 justify-between items-center w-full h-16"
        >
          <div>
            <button
              id="navbarToggler"
              aria-label="Toggle Mobile Navigation"
              class="block absolute cursor-pointer left-2 top-7 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary-500 px-3 py-[6px] z-30"
              :class="navbarTogglerClass"
              @click="isMobileNavOpen = !isMobileNavOpen"
            >
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
              <span class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white transition" />
            </button>
            <nav
              id="navbarCollapse"
              class="fixed w-screen h-screen left-0 right-0 top-0 bottom-0 justify-start
              bg-white dark:bg-black z-20
              lg:hidden transition-all"
              :class="navbarCollapseClass"
              aria-label="mobile-nav"
            >
              <div class="fixed w-screen h-screen flex justify-center pt-28 pb-5 sm:pt-36">
                <div class="px-0 sm:w-1/3 lg:pl-20 w-full">
                  <div class="flex justify-center absolute top-0 left-0 right-0 mx-auto">
                    <NuxtLink to="/">
                      <SvgoLogo class="w-28" />
                    </NuxtLink>
                  </div>
                  <nav-bar />
                </div>
              </div>
            </nav>

            <nav
              id="navbarCollapse"
              class="hidden absolute py-5 lg:py-0 lg:px-4 xl:px-6
                bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent
                shadow-lg rounded-lg max-w-[250px] w-full h-16
                lg:max-w-full lg:w-full right-4 top-full
                lg:block lg:static lg:shadow-none"
              :class="navbarCollapseClass"
              aria-label="desktop-nav"
            >
              <nav-bar />
            </nav>
          </div>
          <div class="flex justify-end items-center pr-0">
            <div class="absolute w-32 top-3 -right-7 sm:right-0 lg:relative lg:top-0 lg:right-0 z-20">
              <div class="inline-block mr-1 sm:mr-2">
                <dark-toggler />
              </div>
              <WhatsAppLink nr="+32473344656" size="xs" />
              <UButton
                size="xs"
                variant="soft"
                icon="i-mdi-github"
                to="https://github.com/vernaillen/vernaillen.dev/"
                target="_blank"
                class="ml-1 sm:ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
button#navbarToggler:hover,
button#navbarToggler:active,
button#navbarToggler:focus {
  background: inherit;
  background-color: inherit !important;
  box-shadow: inherit !important;
}
</style>
