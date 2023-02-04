<script setup lang="ts">
import SvgFooter from '@/components/svg/svg-footer.svg?component'

function easeInOutQuad(
  currentTime: number,
  start: number,
  change: number,
  duration: number,
) {
  currentTime /= duration / 2
  if (currentTime < 1)
    return (change / 2) * currentTime * currentTime + start
  currentTime--
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start
}

function scrollToTop() {
  const to = 0
  const duration = 500
  const element = document.documentElement
  const start = element.scrollTop
  const change = to - start
  const increment = 20
  let currentTime = 0

  const animateScroll = () => {
    currentTime += increment

    const val = easeInOutQuad(currentTime, start, change, duration)

    element.scrollTop = val

    if (currentTime < duration)
      setTimeout(animateScroll, increment)
  }
  animateScroll()
}

onMounted(() => {
  window.onscroll = function () {
    const ud_header = document.querySelector('.header') as HTMLElement
    // const ud_footer = document.querySelector('footer') as HTMLElement
    if (ud_header) {
      if (window.scrollY > 50)
        ud_header.classList.add('sticky')
        // ud_footer.classList.add('sticky')

      else
        ud_header.classList.remove('sticky')
        // ud_footer.classList.remove('sticky')

      // show or hide the back-top-top button
      const backToTop = document.querySelector('.back-to-top') as HTMLElement
      if (
        document.body.scrollTop > 50
        || document.documentElement.scrollTop > 50
      )
        backToTop.style.display = 'flex'
      else
        backToTop.style.display = 'none'
    }
  }
})
</script>

<template>
  <footer
    class="sticky bottom-0 left-0 right-0 pt-0"
  >
    <div>
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full px-4 z-[9999]">
          <div class="flex justify-center">
            <player-controls />
          </div>
          <div class="flex mb-4 justify-center">
            <social-icons />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="py-8 bg-primary bg-opacity-10">
      <div class="container">
        <p class="text-body-color text-base text-center">
          &copy; {{ currentYear() }} Wouter Vernaillen - Vernaillen Consulting
          BV -
          <a href="https://harmonics.be" target="_blank" rel="noopener">Harmonics BV</a>
        </p>
      </div>
    </div>
    -->
    <div class="absolute left-0 bottom-[110px] z-[-1]">
      <SvgFooter />
    </div>

    <div class="relative">
      <client-only>
        <my-audio-motion-analyzer class="opacity-75" />
      </client-only>
    </div>
  </footer>
  <a
    href="javascript:void(0)"
    class="back-to-top hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-6 left-auto z-[9999] hover:shadow-signUp hover:bg-opacity-80 shadow-md animated slideInUp"
    @click="scrollToTop()"
  >
    <span
      class="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"
    />
  </a>
</template>

<style scoped>
footer.sticky {
  opacity: 100%;
  background-color: rgb(255 255 255 / 0.5);
}
html.dark footer.sticky {
  opacity: 100%;
  background-color: rgb(0 0 0 / 0.6);
}
</style>
