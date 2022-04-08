<script setup>
import HeaderComponent from "@/components/Header.vue"
import FooterComponent from "@/components/Footer.vue"
import { useRouter } from 'vue-router'

const router = useRouter()
const posts = router.getRoutes()
  .filter(i => i.path.startsWith('/blog/') && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

function getImageUrl(index) {
  const imgNr = index%3 + 1;
  return '/images/blog/blog-0' + imgNr + '.jpg'
}
</script>

<template>
  <HeaderComponent/>
  <section class="ud-relative ud-z-10 ud-pt-[150px] ud-overflow-hidden">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-items-center ud-mx-[-16px]">
        <div class="ud-w-full md:ud-w-8/12 lg:ud-w-7/12 ud-px-4">
          <div class="ud-max-w-[570px] ud-mb-12 md:ud-mb-0">
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
              Blog
            </h1>
            <p class="
                ud-font-medium
                ud-text-base
                ud-text-body-color
                ud-leading-relaxed
                ud-mb-8
              "
            >
              Some thoughts and ramdom writings
            </p>
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
              <li class="ud-font-medium ud-text-base ud-text-primary">
                Blog
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
              <stop stop-color="#4A6CF7" />
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
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
              <stop stop-color="#4A6CF7" />
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0:1"
              x1="18.3648"
              y1="166.016"
              x2="105.377"
              y2="32.3398"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A6CF7" />
              <stop offset="1" stop-color="#4A6CF7" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  </section>
  <section class="ud-pt-[80px] ud-pb-[120px]">
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px] ud-justify-center">
        <div v-for="(post, index) in posts" :key="post.path"
         class="ud-w-full md:ud-w-2/3 lg:ud-w-1/2 xl:ud-w-1/3 ud-px-4">
          <div
            class="
              ud-relative ud-bg-white
              dark:ud-bg-dark
              ud-shadow-one ud-rounded-md ud-overflow-hidden ud-mb-10
              wow
              fadeInUp
            "
            data-wow-delay=".1s"
          >
            <a
              :href="post.path"
              class="ud-w-full ud-block ud-relative"
            >
              <span v-if="post.meta.frontmatter.category"
                class="
                  ud-absolute
                  ud-top-6
                  ud-right-6
                  ud-bg-primary
                  ud-rounded-full
                  ud-inline-flex
                  ud-items-center
                  ud-justify-center
                  ud-py-2
                  ud-px-4
                  ud-font-semibold
                  ud-text-sm
                  ud-text-white
                "
              >
                {{post.meta.frontmatter.category}}
              </span>
              <img
                :src="getImageUrl(index)"
                alt="image"
                class="ud-w-full"
              />
            </a>
            <div
              class="
                ud-p-6
                sm:ud-p-8
                md:ud-py-8 md:ud-px-6
                lg:ud-p-8
                xl:ud-py-8 xl:ud-px-5
                2xl:ud-p-8
              "
            >
              <h3>
                <a
                  :href="post.path"
                  class="
                    ud-font-bold ud-text-black
                    dark:ud-text-white
                    ud-text-xl
                    sm:ud-text-2xl
                    ud-block ud-mb-4
                    hover:ud-text-primary
                    dark:hover:ud-text-primary
                  "
                >
                  {{post.meta.frontmatter.title}}
                </a>
              </h3>
              <p
                class="
                  ud-text-base
                  ud-text-body-color
                  ud-font-medium
                  ud-pb-6
                  ud-mb-6
                  ud-border-b
                  ud-border-body-color
                  ud-border-opacity-10
                  dark:ud-border-white dark:ud-border-opacity-10
                "
              >
                {{post.meta.frontmatter.desc}}
              </p>
              <div class="ud-flex">
                <div
                  class="
                    ud-flex ud-items-center ud-pr-5 ud-mr-5
                    xl:ud-pr-3
                    2xl:ud-pr-5
                    xl:ud-mr-3
                    2xl:ud-mr-5
                    ud-border-r ud-border-body-color ud-border-opacity-10
                    dark:ud-border-white dark:ud-border-opacity-10
                  "
                >
                  <div
                    class="
                      ud-max-w-[40px]
                      ud-w-full
                      ud-h-[40px]
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
                    <h4
                      class="
                        ud-text-sm ud-font-medium ud-text-dark
                        dark:ud-text-white
                        ud-mb-1
                      "
                    >
                      By
                      <a
                        href="javascript:void(0)"
                        class="
                          ud-text-dark
                          dark:ud-text-white
                          hover:ud-text-primary
                          dark:hover:ud-text-primary
                        "
                      >
                        {{post.meta.frontmatter.author}}
                      </a>
                    </h4>
                    <p class="ud-text-xs ud-text-body-color">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div class="ud-inline-block">
                  <p class="ud-text-xs ud-text-body-color">{{ $formatDate(post.meta.frontmatter.date) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent/>
</template>
