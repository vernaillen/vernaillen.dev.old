<script setup>
import HeaderComponent from "@/components/Header.vue"
import FooterComponent from "@/components/Footer.vue"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

defineProps({
  frontmatter: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header-component/>
  <section class="ud-relative ud-z-10 ud-pt-[150px] ud-overflow-hidden">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-items-center ud-mx-[-16px]">
        <div class="ud-w-full md:ud-w-8/12 lg:ud-w-7/12 ud-px-4">
          <div v-if="frontmatter.title" class="ud-max-w-[570px] ud-mb-12 md:ud-mb-0">
            <h1
              class="
                ud-font-bold 
                ud-text-black
                dark:ud-text-white
                ud-text-2xl
                sm:ud-text-3xl
                ud-mb-5
              "
            >
              {{ frontmatter.title }}
            </h1>
            <p v-if="frontmatter.desc" :style="`background: ${frontmatter.bgColor};`"
              class="
                ud-font-medium
                ud-text-base
                ud-text-body-color
                ud-leading-relaxed
                ud-mb-8
              "
            >
              {{ frontmatter.desc }}
            </p>
          </div>

          <div class="ud-flex ud-flex-wrap ud-items-center">
            <div v-if="frontmatter.author" class="ud-flex ud-items-center ud-mr-5 ud-mb-5">
              <div v-if="frontmatter.author == 'Wouter Vernaillen'"
                class="
                  ud-max-w-[30px]
                  ud-w-full
                  ud-h-[30px]
                  ud-rounded-full
                  ud-overflow-hidden
                  ud-mr-4
                "
              >
                <img
                  src="/images/wouter.jpg"
                  alt="author"
                  class="ud-w-full"
                />
              </div>
              <div class="ud-w-full">
                <p class="ud-flex ud-items-center ud-text-base ud-text-body-color ud-font-medium ud-mr-3">
                  {{ frontmatter.author }}
                </p>
              </div>
            </div>
            <div v-if="frontmatter.date" class="ud-flex ud-items-center ud-mr-5 ud-mb-5">
              <p class="ud-flex ud-items-center ud-text-base ud-text-body-color ud-font-medium ud-mr-3">
                <span class="ud-mr-3 fa-solid fa-calendar-days"/> {{ $formatDate(frontmatter.date) }}
              </p>
            </div>
            <div v-if="frontmatter.location" class="ud-flex ud-items-centerud-mr-5 ud-mb-5">
              <p class="ud-flex ud-items-center ud-text-base ud-text-body-color ud-font-medium ud-mr-3">
                <span class="ud-mr-3 fa-solid fa-location-pin"/> {{ frontmatter.location }}
              </p>
            </div>
          </div>
        </div>
        <div class="ud-w-full md:ud-w-4/12 lg:ud-w-5/12 ud-px-4">
          <div class="ud-text-end">
            <ul class="ud-flex ud-items-center md:ud-justify-end">
              <li class="ud-flex ud-items-center">
                <a
                  href="/"
                  class="
                    ud-font-medium ud-text-base ud-text-body-color ud-pr-1
                    hover:ud-text-primary
                  "
                >
                  Home
                </a>
                <span
                  class="
                    ud-block
                    ud-w-2
                    ud-h-2
                    ud-border-t-2
                    ud-border-r-2
                    ud-border-body-color
                    ud-rotate-45
                    ud-mr-3
                  "
                ></span>
              </li>
              <li v-if="frontmatter.pageName" class="ud-font-medium ud-text-base ud-text-primary">
                {{ frontmatter.pageName }}
              </li>
              <li v-if="route.path.startsWith('/blog')" class="ud-font-medium ud-text-base ud-text-primary">
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div>
      <span class="ud-absolute ud-top-0 ud-left-0 ud-z-[-1]">
        <svg
          width="287"
          height="254"
          viewBox="0 0 287 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
            fill="url(#paint0_linear_111:578)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_111:578"
              x1="-40.5"
              y1="117"
              x2="301.926"
              y2="-97.1485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C8E1B" />
              <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span class="ud-absolute ud-right-0 ud-top-0 ud-z-[-1]">
        <svg
          width="628"
          height="258"
          viewBox="0 0 628 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
            fill="url(#paint0_linear_0:1)"
          />
          <path
            opacity="0.1"
            d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
            fill="url(#paint1_linear_0:1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0:1"
              x1="644"
              y1="221"
              x2="429.946"
              y2="37.0429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C8E1B" />
              <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0:1"
              x1="18.3648"
              y1="166.016"
              x2="105.377"
              y2="32.3398"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C8E1B" />
              <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  </section>
  <section class="ud-relative ud-z-10 ud-pt-[80px] ud-pb-[120px]">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-px-4">
          <div class="ud-mx-auto">
            <p
              class="
                ud-font-medium ud-text-lg
                md:ud-text-xl
                ud-leading-relaxed
                md:ud-leading-relaxed
                ud-text-body-color
                dark:ud-text-white dark:ud-opacity-90
                ud-mb-12
                wow fadeInUp
              "
              data-wow-delay=".1s"
            >
              <slot />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <span class="ud-absolute ud-top-0 ud-left-0 ud-z-[-1]">
        <svg
          width="287"
          height="254"
          viewBox="0 0 287 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
            fill="url(#paint0_linear_111:578)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_111:578"
              x1="-40.5"
              y1="117"
              x2="301.926"
              y2="-97.1485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C8E1B" />
              <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span class="ud-absolute ud-right-0 ud-top-0 ud-z-[-1]">
        <svg
          width="628"
          height="258"
          viewBox="0 0 628 258"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
            fill="url(#paint0_linear_0:1)"
          />
          <path
            opacity="0.1"
            d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
            fill="url(#paint1_linear_0:1)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0:1"
              x1="644"
              y1="221"
              x2="429.946"
              y2="37.0429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C8E1B" />
              <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0:1"
              x1="18.3648"
              y1="166.016"
              x2="105.377"
              y2="32.3398"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9C8E1B" />
              <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  </section>
  <footer-component/>
</template>