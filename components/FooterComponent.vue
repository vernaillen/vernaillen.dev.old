<script setup lang="ts">
function easeInOutQuad (
  currentTime: number,
  start: number,
  change: number,
  duration: number
) {
  currentTime /= duration / 2
  if (currentTime < 1) { return (change / 2) * currentTime * currentTime + start }
  currentTime--
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start
}

function scrollToTop () {
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

    if (currentTime < duration) { setTimeout(animateScroll, increment) }
  }
  animateScroll()
}

onMounted(() => {
  window.onscroll = function () {
    const headerElement = document.querySelector('.header') as HTMLElement
    // const footerElement = document.querySelector('footer') as HTMLElement
    if (headerElement) {
      if (window.scrollY > 40) { headerElement.classList.add('sticky') }
      // footerElement.classList.add('sticky')

      else { headerElement.classList.remove('sticky') }
      // footerElement.classList.remove('sticky')

      // show or hide the back-top-top button
      const backToTop = document.querySelector('.back-to-top') as HTMLElement
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) { backToTop.style.display = 'flex' } else { backToTop.style.display = 'none' }
    }
  }
})
</script>

<template>
  <footer class="bottom-0 left-0 right-0 pt-0">
    <div class="pt-8 pb-2 bg-primary-500 bg-opacity-5">
      <div class="flex mb-4 justify-center">
        <social-icons />
      </div>
      <div class="container prose dark:prose-invert text-center">
        <p class="text-sm">
          &copy; {{ currentYear() }} Wouter Vernaillen - Vernaillen Consulting
          BV -
          <NuxtLink href="https://harmonics.be" target="_blank">
            Harmonics BV
          </NuxtLink>
        </p>
        <div class="text-xs mb-0 pb-0">
          <GitHub />
        </div>
      </div>
    </div>
  </footer>
  <div
    class="back-to-top hidden items-center justify-center bg-primary-500 text-white w-10 h-10 rounded-md fixed
      bottom-8 right-6 left-auto z-20 hover:shadow-signUp hover:bg-opacity-80 shadow-md
      cursor-pointer
      animate__animated animate__slideInUp"
    @click="scrollToTop()"
  >
    <span
      class="w-3 h-3 border-t border-l border-white rotate-45 mt-[6px]"
    />
  </div>
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
