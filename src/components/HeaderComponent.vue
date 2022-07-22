<script setup lang="ts">
const navbar = reactive({
  show: false,
})
function navbarToggler() {
  navbar.show = !navbar.show
}
const navbarTogglerClass = computed(() => {
  return navbar.show ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return navbar.show ? '' : 'hidden'
})
</script>

<template>
  <header
    class="header bg-transparent absolute top-0 left-0 z-20 w-full flex items-center"
  >
    <div class="container">
      <div class="flex mx-[-16px] justify-between relative">
        <div class="px-4 w-60 max-w-full">
          <router-link to="/" class="w-full block header-logo">
            <svg-logo />
          </router-link>
        </div>
        <div
          class="flex px-4 justify-between items-center w-full"
        >
          <div>
            <button
              id="navbarToggler"
              class="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
              :class="navbarTogglerClass"
              @click="navbarToggler"
            >
              <span
                class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"
              />
              <span
                class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"
              />
              <span
                class="relative w-[30px] h-[2px] my-[6px] block bg-dark dark:bg-white"
              />
            </button>
            <nav
              id="navbarCollapse"
              class="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white dark:bg-dark lg:dark:bg-transparent lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full lg:block lg:static lg:shadow-none"
              :class="navbarCollapseClass"
            >
              <nav-bar />
            </nav>
          </div>
          <div
            class="flex justify-end items-center pr-16 lg:pr-0"
          >
            <ul class="flex">
              <li class="relative group">
                <player-controls />
              </li>
              <li>
                <dark-toggler />
              </li>
              <li class="relative group">
                <label
                  for="rss"
                  class="cursor-pointer w-10 h-14 rounded-full flex items-center justify-center bg-gray-2 dark:bg-dark-bg text-black dark:text-white"
                >
                  <a href="/feed.xml" target="_blank">
                    <font-awesome-icon :icon="['fas', 'rss']" />
                  </a>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-logo,
.sticky .header-logo {
  padding-top: 0;
  padding-bottom: 0;
}
@media (min-width: 960px) {
  .header-logo svg {
    width: 130px;
  }
}
button#navbarToggler:hover,
button#navbarToggler:active,
button#navbarToggler:focus {
  background: inherit;
  background-color: inherit !important;
  box-shadow: inherit !important;
}
</style>
