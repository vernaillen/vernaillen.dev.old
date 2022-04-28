<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue";

const SVGFooter = defineAsyncComponent(() => import("@/assets/svg/footer.svg"));

function easeInOutQuad(
  currentTime: number,
  start: number,
  change: number,
  duration: number
) {
  currentTime /= duration / 2;
  if (currentTime < 1) return (change / 2) * currentTime * currentTime + start;
  currentTime--;
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
}

function scrollToTop() {
  const to = 0,
    duration = 500;
  const element = document.documentElement;
  const start = element.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;

    const val = easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

onMounted(() => {
  window.onscroll = function () {
    const ud_header = document.querySelector(".header") as HTMLElement;
    if (ud_header) {
      const sticky = ud_header.offsetTop;

      if (window.scrollY > sticky) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }

      // show or hide the back-top-top button
      const backToTop = document.querySelector(".back-to-top") as HTMLElement;
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }
  };
});
</script>

<template>
  <footer
    class="ud-relative ud-z-10 ud-bg-primary ud-bg-opacity-5 ud-pt-[80px] animated animated-duration-5s fadeIn"
  >
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full md:ud-w-1/2 lg:ud-w-4/12 xl:ud-w-5/12 ud-px-4">
          <div class="ud-mb-16 ud-max-w-[360px]">
            <div class="ud-flex ud-items-center">
              <a
                class="ud-text-body-color hover:ud-text-primary ud-mr-6"
                aria-label="social-link"
                href="https://github.com/vernaillen/"
                rel="noopener"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a
                class="ud-text-body-color hover:ud-text-primary ud-mr-6"
                aria-label="social-link"
                href="https://www.linkedin.com/in/woutervernaillen/"
                rel="noopener"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
              <a
                class="ud-text-body-color hover:ud-text-primary ud-mr-6"
                aria-label="social-link"
                href="https://www.instagram.com/woutervernaillen/"
                rel="noopener"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <br />
              <player-controls />
            </div>
          </div>
        </div>

        <div
          class="ud-w-full sm:ud-w-1/2 md:ud-w-1/2 lg:ud-w-2/12 xl:ud-w-2/12 ud-px-4"
        >
          <div class="ud-mb-16">
            <h2
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl ud-mb-10"
            >
              Useful Links
            </h2>
            <ul>
              <li>
                <router-link
                  to="/blog"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  Blog
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  About
                </router-link>
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="ud-w-full sm:ud-w-1/2 md:ud-w-1/2 lg:ud-w-2/12 xl:ud-w-2/12 ud-px-4"
        >
          <div class="ud-mb-16">
            <h2
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl ud-mb-10"
            >
              Terms
            </h2>
            <ul>
              <li>
                <a
                  href="javascript:void(0)"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  TOS
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="ud-w-full md:ud-w-1/2 lg:ud-w-4/12 xl:ud-w-3/12 ud-px-4">
          <div class="ud-mb-16">
            <h2
              class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl ud-mb-10"
            >
              Support & Help
            </h2>
            <ul>
              <li>
                <a
                  href="javascript:void(0)"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  Open Support Ticket
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  class="ud-text-base ud-font-medium ud-inline-block ud-text-body-color ud-mb-4 hover:ud-text-primary"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="ud-py-8 ud-bg-primary ud-bg-opacity-10">
      <div class="ud-container">
        <p
          class="ud-text-body-color dark:ud-text-white ud-text-base ud-text-center"
        >
          &copy; Wouter Vernaillen - Vernaillen Consulting BVBA / Harmonics BV
        </p>
      </div>
    </div>
    <div class="ud-absolute ud-left-0 ud-bottom-[140px] ud-z-[-1]">
      <SVGFooter />
    </div>
  </footer>
  <a
    @click="scrollToTop"
    href="javascript:void(0)"
    class="ud-hidden ud-items-center ud-justify-center ud-bg-primary ud-text-white ud-w-10 ud-h-10 ud-rounded-md ud-fixed ud-bottom-8 ud-right-8 ud-left-auto ud-z-[999] hover:ud-shadow-signUp hover:ud-bg-opacity-80 ud-transition ud-duration-300 ud-ease-in-out back-to-top ud-shadow-md"
  >
    <span
      class="ud-w-3 ud-h-3 ud-border-t ud-border-l ud-border-white ud-rotate-45 ud-mt-[6px]"
    ></span>
  </a>
</template>
