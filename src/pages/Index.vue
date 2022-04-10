<template>  
  <header-component/>
  <section
    id="home"
    class="
      ud-relative ud-z-10 ud-pt-[120px] ud-pb-[110px]
      md:ud-pt-[150px] md:ud-pb-[120px]
      xl:ud-pt-[180px] xl:ud-pb-[160px]
      2xl:ud-pt-[210px] 2xl:ud-pb-[200px]
    "
  >
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-px-4">
          <div
            class="ud-mx-auto ud-max-w-[570px] ud-text-center wow fadeIn"
            data-wow-delay=".1s"
          >
            <h1
              class="
                ud-text-black
                dark:ud-text-white
                ud-font-bold ud-text-3xl
                sm:ud-text-4xl
                md:ud-text-5xl
                ud-leading-tight
                sm:ud-leading-tight
                md:ud-leading-tight
                ud-mb-5
              "
            >
              Wouter Vernaillen
            </h1>
            <p
              class="
                ud-font-medium ud-text-lg
                md:ud-text-xl
                ud-leading-relaxed
                md:ud-leading-relaxed
                ud-text-body-color
                dark:ud-text-white dark:ud-opacity-90
                ud-mt-12
                ud-mb-20
              "
            >
              Freelance Full Stack Developer
            </p>
            <p
              class="
                ud-font-medium ud-text-md
                md:ud-text-lg
                ud-leading-relaxed
                md:ud-leading-relaxed
                ud-text-body-color
                dark:ud-text-white dark:ud-opacity-90
                ud-mb-12
              "
            >
              Java, Spring, Vue, Angular & Liferay
            </p>
            <div class="ud-flex ud-items-center ud-justify-center">
              <router-link
                to="/about"
                class="
                  ud-text-base
                  ud-font-semibold
                  ud-text-white
                  ud-bg-primary
                  ud-py-4
                  ud-px-8
                  hover:ud-bg-opacity-80
                  ud-mx-2
                  ud-my-8
                  ud-rounded-md
                  ud-transition
                  ud-duration-300
                  ud-ease-in-out
                  wow fadeInUp
                "
                data-wow-delay="1s"
              >
                Learn more
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div> -->
    <div class="svg-right ud-absolute ud-top-0 ud-right-0 ud-z-[-1]">
      <svg
        width="450"
        height="556"
        viewBox="0 0 450 556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
        <circle
          cx="17.9997"
          cy="182"
          r="18"
          fill="url(#paint1_radial_25:217)"
        />
        <circle
          cx="76.9997"
          cy="288"
          r="34"
          fill="url(#paint2_radial_25:217)"
        />
        <circle
          cx="325.486"
          cy="302.87"
          r="180"
          transform="rotate(-37.6852 325.486 302.87)"
          fill="url(#paint3_linear_25:217)"
        />
        <circle
          opacity="0.8"
          cx="184.521"
          cy="315.521"
          r="132.862"
          transform="rotate(114.874 184.521 315.521)"
          stroke="url(#paint4_linear_25:217)"
        />
        <circle
          opacity="0.8"
          cx="356"
          cy="290"
          r="179.5"
          transform="rotate(-30 356 290)"
          stroke="url(#paint5_linear_25:217)"
        />
        <circle
          opacity="0.8"
          cx="191.659"
          cy="302.659"
          r="133.362"
          transform="rotate(133.319 191.659 302.659)"
          fill="url(#paint6_linear_25:217)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_25:217"
            x1="-54.5003"
            y1="-178"
            x2="222"
            y2="288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" />
            <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
          >
            <stop offset="0.145833" stop-color="#9C8E1B" stop-opacity="0" />
            <stop offset="1" stop-color="#9C8E1B" stop-opacity="0.08" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
          >
            <stop offset="0.145833" stop-color="#9C8E1B" stop-opacity="0" />
            <stop offset="1" stop-color="#9C8E1B" stop-opacity="0.08" />
          </radialGradient>
          <linearGradient
            id="paint3_linear_25:217"
            x1="226.775"
            y1="-66.1548"
            x2="292.157"
            y2="351.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" />
            <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:217"
            x1="184.521"
            y1="182.159"
            x2="184.521"
            y2="448.882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_25:217"
            x1="356"
            y1="110"
            x2="356"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_25:217"
            x1="118.524"
            y1="29.2497"
            x2="166.965"
            y2="338.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" />
            <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="svg-left ud-absolute ud-bottom-0 ud-left-0 ud-z-[-1]">
      <svg
        width="364"
        height="201"
        viewBox="0 0 364 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
          stroke="url(#paint0_linear_25:218)"
        />
        <path
          d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
          stroke="url(#paint1_linear_25:218)"
        />
        <path
          d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
          stroke="url(#paint2_linear_25:218)"
        />
        <path
          d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
          stroke="url(#paint3_linear_25:218)"
        />
        <circle
          opacity="0.8"
          cx="214.505"
          cy="60.5054"
          r="49.7205"
          transform="rotate(-13.421 214.505 60.5054)"
          stroke="url(#paint4_linear_25:218)"
        />
        <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
        <defs>
          <linearGradient
            id="paint0_linear_25:218"
            x1="184.389"
            y1="69.2405"
            x2="184.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" stop-opacity="0" />
            <stop offset="1" stop-color="#9C8E1B" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_25:218"
            x1="156.389"
            y1="69.2405"
            x2="156.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" stop-opacity="0" />
            <stop offset="1" stop-color="#9C8E1B" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_25:218"
            x1="125.389"
            y1="69.2405"
            x2="125.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" stop-opacity="0" />
            <stop offset="1" stop-color="#9C8E1B" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_25:218"
            x1="93.8507"
            y1="67.2674"
            x2="89.9278"
            y2="210.214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" stop-opacity="0" />
            <stop offset="1" stop-color="#9C8E1B" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:218"
            x1="214.505"
            y1="10.2849"
            x2="212.684"
            y2="99.5816"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9C8E1B" />
            <stop offset="1" stop-color="#9C8E1B" stop-opacity="0" />
          </linearGradient>
          <radialGradient
            id="paint5_radial_25:218"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(220 63) rotate(90) scale(43)"
          >
            <stop offset="0.145833" stop-color="white" stop-opacity="0" />
            <stop offset="1" stop-color="white" stop-opacity="0.08" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </section>
  <footer-component/>
</template>

<script setup>
import HeaderComponent from "@/components/Header.vue"
import FooterComponent from "@/components/Footer.vue"
</script>

<style scoped>
@media (max-width: 959px) {
  .svg-right svg,
  .svg-left svg {
      width: 50%;
  }
  .svg-right svg {
      margin-left: auto;
  }
  .svg-left svg {
      margin-right: auto;
  }
}
</style>