<script setup lang="ts">
import SvgFooter from '@/components/svg/svg-footer.svg?component'
import { currentYear } from '@/logics/dayjs'

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
    if (ud_header) {
      const sticky = ud_header.offsetTop

      if (window.scrollY > sticky)
        ud_header.classList.add('sticky')
      else
        ud_header.classList.remove('sticky')

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
    class="relative z-40 bg-primary bg-opacity-5 pt-[20px]"
  >
    <div class="container">
      <div class="flex flex-wrap mx-[-16px]">
        <div class="w-full px-4">
          <div class="flex mb-4 justify-center">
            <player-controls />
          </div>
          <div class="flex mb-8 justify-center">
            <social-icons />
          </div>
        </div>
      </div>
    </div>
    <div class="py-8 bg-primary bg-opacity-10">
      <div class="container">
        <p class="text-body-color text-base text-center">
          &copy; {{ currentYear() }} Wouter Vernaillen - Vernaillen Consulting
          BV -
          <a href="https://harmonics.be" target="_blank" rel="noopener">Harmonics BV</a>
        </p>
      </div>
    </div>
    <div class="absolute left-0 bottom-[110px] z-[-1]">
      <SvgFooter />
    </div>
  </footer>
  <a
    href="javascript:void(0)"
    class="hidden items-center justify-center bg-primary text-white w-10 h-10 rounded-md fixed bottom-8 right-8 left-auto z-[999] hover:shadow-signUp hover:bg-opacity-80 transition duration-300 ease-in-out back-to-top shadow-md"
    @click="scrollToTop()"
  >
    <span
      class="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"
    />
  </a>
</template>
