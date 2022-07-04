<script setup lang="ts">
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
    class="ud-relative ud-z-40 ud-bg-primary ud-bg-opacity-5 ud-pt-[20px]"
  >
    <div class="ud-container">
      <div class="ud-flex ud-flex-wrap ud-mx-[-16px]">
        <div class="ud-w-full ud-px-4">
          <div class="ud-flex ud-mb-4 ud-justify-center">
            <player-controls />
          </div>
          <div class="ud-flex ud-mb-8 ud-justify-center">
            <social-icons />
          </div>
        </div>
      </div>
    </div>
    <div class="ud-py-8 ud-bg-primary ud-bg-opacity-10">
      <div class="ud-container">
        <p class="ud-text-body-color ud-text-base ud-text-center">
          &copy; {{ currentYear() }} Wouter Vernaillen - Vernaillen Consulting
          BV -
          <a href="https://harmonics.be" target="_blank" rel="noopener">Harmonics BV</a>
        </p>
      </div>
    </div>
    <div class="ud-absolute ud-left-0 ud-bottom-[110px] ud-z-[-1]">
      <svg-footer />
    </div>
  </footer>
  <a
    href="javascript:void(0)"
    class="ud-hidden ud-items-center ud-justify-center ud-bg-primary ud-text-white ud-w-10 ud-h-10 ud-rounded-md ud-fixed ud-bottom-8 ud-right-8 ud-left-auto ud-z-[999] hover:ud-shadow-signUp hover:ud-bg-opacity-80 ud-transition ud-duration-300 ud-ease-in-out back-to-top ud-shadow-md"
    @click="scrollToTop()"
  >
    <span
      class="ud-w-3 ud-h-3 ud-border-t ud-border-l ud-border-white ud-rotate-45 ud-mt-[6px]"
    />
  </a>
</template>
