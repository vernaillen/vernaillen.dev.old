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

        <div class="ud-w-full sm:ud-w-1/2 md:ud-w-1/2 lg:ud-w-2/12 xl:ud-w-2/12 ud-px-4">
          <div class="ud-mb-16">
            <h2 class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl ud-mb-10">
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

        <div class="ud-w-full sm:ud-w-1/2 md:ud-w-1/2 lg:ud-w-2/12 xl:ud-w-2/12 ud-px-4">
          <div class="ud-mb-16">
            <h2 class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl ud-mb-10">
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
            <h2 class="ud-font-bold ud-text-black dark:ud-text-white ud-text-xl ud-mb-10">
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
        <p class="ud-text-body-color dark:ud-text-white ud-text-base ud-text-center">
          &copy; Wouter Vernaillen - Vernaillen Consulting BVBA / Harmonics BV
        </p>
      </div>
    </div>
    <div class="ud-absolute ud-left-0 ud-bottom-[140px] ud-z-[-1]">
      <svg
        width="79"
        height="94"
        viewBox="0 0 79 94"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.3"
          x="-41"
          y="26.9426"
          width="66.6675"
          height="66.6675"
          transform="rotate(-22.9007 -41 26.9426)"
          fill="url(#paint0_linear_94:889)"
        />
        <rect
          x="-41"
          y="26.9426"
          width="66.6675"
          height="66.6675"
          transform="rotate(-22.9007 -41 26.9426)"
          stroke="url(#paint1_linear_94:889)"
          stroke-width="0.7"
        />
        <path
          opacity="0.3"
          d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
          fill="url(#paint2_linear_94:889)"
        />
        <path
          d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
          stroke="url(#paint3_linear_94:889)"
          stroke-width="0.7"
        />
        <path
          opacity="0.3"
          d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
          fill="url(#paint4_linear_94:889)"
        />
        <path
          d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
          stroke="url(#paint5_linear_94:889)"
          stroke-width="0.7"
        />
        <defs>
          <linearGradient
            id="paint0_linear_94:889"
            x1="-41"
            y1="21.8445"
            x2="36.9671"
            y2="59.8878"
            gradientUnits="userSpaceOnUse"
          >
            <stop :stop-color="preferences.primaryColor" stop-opacity="0.62" />
            <stop offset="1" :stop-color="preferences.primaryColor" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_94:889"
            x1="25.6675"
            y1="95.9631"
            x2="-42.9608"
            y2="20.668"
            gradientUnits="userSpaceOnUse"
          >
            <stop :stop-color="preferences.primaryColor" stop-opacity="0" />
            <stop offset="1" :stop-color="preferences.primaryColor" stop-opacity="0.51" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_94:889"
            x1="20.325"
            y1="-3.98039"
            x2="90.6248"
            y2="25.1062"
            gradientUnits="userSpaceOnUse"
          >
            <stop :stop-color="preferences.primaryColor" stop-opacity="0.62" />
            <stop offset="1" :stop-color="preferences.primaryColor" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_94:889"
            x1="18.3642"
            y1="-1.59742"
            x2="113.9"
            y2="80.6826"
            gradientUnits="userSpaceOnUse"
          >
            <stop :stop-color="preferences.primaryColor" stop-opacity="0" />
            <stop offset="1" :stop-color="preferences.primaryColor" stop-opacity="0.51" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_94:889"
            x1="61.1098"
            y1="62.3249"
            x2="-8.82468"
            y2="58.2156"
            gradientUnits="userSpaceOnUse"
          >
            <stop :stop-color="preferences.primaryColor" stop-opacity="0.62" />
            <stop offset="1" :stop-color="preferences.primaryColor" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_94:889"
            x1="65.4236"
            y1="65.0701"
            x2="24.0178"
            y2="41.6598"
            gradientUnits="userSpaceOnUse"
          >
            <stop :stop-color="preferences.primaryColor" stop-opacity="0" />
            <stop offset="1" :stop-color="preferences.primaryColor" stop-opacity="0.51" />
          </linearGradient>
        </defs>
      </svg>
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

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { usePreferences } from "@/stores/preferences";
const preferences = usePreferences();

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

    const val = Math.easeInOutQuad(currentTime, start, change, duration);

    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

onMounted(() => {
  window.onscroll = function () {
    const ud_header = document.querySelector(".header");
    const sticky = ud_header.offsetTop;

    if (window.scrollY > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
});
</script>
