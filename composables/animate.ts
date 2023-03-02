export const animateCSS = (element: string, animation: string, removeClass?: string, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`
    const removeClassName = `${prefix}${removeClass}`
    const node = document.querySelector(element)
    if (node) {
      if (removeClass)
        node.classList.remove(`${prefix}animated`, removeClassName)
      node.classList.add(`${prefix}animated`, animationName)

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        console.log('animationEnd')
        if (node) {
          node.classList.remove(`${prefix}animated`, animationName)
          if (removeClass)
            node.classList.add(`${prefix}animated`, removeClassName)
        }
        event.stopPropagation()
        resolve('Animation ended')
      }
      function handleAnimationStart(event) {
        /* if (node) {
          node.classList.remove(`${prefix}animated`, animationName)
          if (removeClass)
            node.classList.add(`${prefix}animated`, removeClassName)
        } */
        console.log('animationStart')
      }
      node.addEventListener('animationend', handleAnimationEnd, { once: true })
      node.addEventListener('animationstart', handleAnimationStart, { once: true })
    }
  })
