<script setup lang="ts">
import { computed, reactive } from "vue";
import PlayerControls from "@/components/PlayerControls.vue";
import NavBar from "./NavBar.vue";
import svgLogo from "@/assets/svg/logo.svg";

const navbar = reactive({
  show: false,
});
function navbarToggler() {
  navbar.show = !navbar.show;
}
const navbarTogglerClass = computed(() => {
  return navbar.show ? "navbarTogglerActive" : "";
});
const navbarCollapseClass = computed(() => {
  return navbar.show ? "" : "ud-hidden";
});
</script>

<template>
  <header
    class="header ud-bg-transparent ud-absolute ud-top-0 ud-left-0 ud-z-40 ud-w-full ud-flex ud-items-center"
  >
    <div class="ud-container">
      <div class="ud-flex ud-mx-[-16px] ud-justify-between ud-relative">
        <div class="ud-px-4 ud-w-60 ud-max-w-full">
          <router-link to="/" class="ud-w-full ud-block header-logo">
            <svg-logo />
          </router-link>
        </div>
        <div
          class="ud-flex ud-px-4 ud-justify-between ud-items-center ud-w-full"
        >
          <div>
            <button
              id="navbarToggler"
              class="ud-block ud-absolute ud-right-4 ud-top-1/2 ud-translate-y-[-50%] lg:ud-hidden focus:ud-ring-2 ud-ring-primary ud-px-3 ud-py-[6px] ud-rounded-lg"
              @click="navbarToggler"
              :class="navbarTogglerClass"
            >
              <span
                class="ud-relative ud-w-[30px] ud-h-[2px] ud-my-[6px] ud-block ud-bg-dark dark:ud-bg-white"
              ></span>
              <span
                class="ud-relative ud-w-[30px] ud-h-[2px] ud-my-[6px] ud-block ud-bg-dark dark:ud-bg-white"
              ></span>
              <span
                class="ud-relative ud-w-[30px] ud-h-[2px] ud-my-[6px] ud-block ud-bg-dark dark:ud-bg-white"
              ></span>
            </button>
            <nav
              id="navbarCollapse"
              class="ud-absolute ud-py-5 lg:ud-py-0 lg:ud-px-4 xl:ud-px-6 ud-bg-white dark:ud-bg-dark lg:dark:ud-bg-transparent lg:ud-bg-transparent ud-shadow-lg ud-rounded-lg ud-max-w-[250px] ud-w-full lg:ud-max-w-full lg:ud-w-full ud-right-4 ud-top-full lg:ud-block lg:ud-static lg:ud-shadow-none"
              :class="navbarCollapseClass"
            >
              <nav-bar />
            </nav>
          </div>
          <div
            class="ud-flex ud-justify-end ud-items-center ud-pr-16 lg:ud-pr-0"
          >
            <ul class="ud-flex">
              <li class="ud-relative ud-group">
                <player-controls />
              </li>
              <li>
                <dark-toggler />
              </li>
              <li class="ud-relative ud-group">
                <label
                  for="rss"
                  class="ud-cursor-pointer ud-w-10 ud-h-14 ud-rounded-full ud-flex ud-items-center ud-justify-center ud-bg-gray-2 dark:ud-bg-dark-bg ud-text-black dark:ud-text-white"
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
