<script setup lang="ts">
import SvgLogo from '~/components/svg/svg-logo.svg?component'
import { useMobileNav } from '@/stores/mobileNav'
const mobileNav = useMobileNav()

const navbarTogglerClass = computed(() => {
  return mobileNav.visible ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return mobileNav.visible ? '' : 'hidden'
})

const closeNav = () => {
  setTimeout(() => {
    mobileNav.hide()
  }, 400)
}
</script>

<template>
  <header class="header bg-transparent absolute top-0 left-0 z-20 h-16 w-full flex items-center transition-all">
    <div class="container h-16">
      <div class="lg:flex mx-[-16px]">
        <div class="lg:pl-8 lg:pr-4 max-w-full">
          <div class="w-full flex justify-center">
            <NuxtLink to="/" class="mx-auto">
              <SvgLogo class="" />
            </NuxtLink>
          </div>
        </div>
        <div
          class="flex px-4 justify-between items-center w-full"
        >
          <div>
            <button
              id="navbarToggler"
              class="block absolute cursor-pointer left-2 top-7 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] z-30"
              :class="navbarTogglerClass"
              @click="mobileNav.toggle()"
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
            >
              <div class="fixed w-screen h-screen flex justify-center pt-28 pb-5 sm:pt-36">
                <div class="px-0 sm:w-1/3 lg:pl-20 w-full">
                  <div class="flex justify-center absolute top-0 left-0 right-0 mx-auto">
                    <NuxtLink to="/" @click="closeNav">
                      <SvgLogo />
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
                shadow-lg rounded-lg max-w-[250px] w-full
                lg:max-w-full lg:w-full right-4 top-full
                lg:block lg:static lg:shadow-none"
              :class="navbarCollapseClass"
            >
              <nav-bar />
            </nav>
          </div>
          <div class="flex justify-end items-center pr-16 lg:pr-0">
            <ul class="absolute top-2 right-4 z-20">
              <li>
                <dark-toggler />
              </li>
            </ul>
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
