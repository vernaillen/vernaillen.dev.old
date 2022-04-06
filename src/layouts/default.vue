<script setup>
  import HeaderComponent from "@/components/Header.vue"
  import FooterComponent from "@/components/Footer.vue"
</script>

<template>
  <header-component/>

  <section class="ud-relative ud-z-10 ud-pt-[180px] ud-pb-[120px]">
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
              "
            >
              <router-view/>
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
