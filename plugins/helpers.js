export default ({ app }, inject) => {
  /* Inject $animateComponents in order to show the animation in all the components and pages in which the 
  class hide-animate is defined */
  inject('animateComponents', () => {
    const elems = document.getElementsByClassName('hide-animate')
    elems.forEach((elem) => {
      if (elem.getBoundingClientRect().top < 0.9 * window.innerHeight) {
        elem.classList.add('animation-in')
      }
    })
  })
  /* Inject $showComponentsInViewport in order to show the components that when the page is mounted are inside the viewport */
  inject('showComponentsInViewport', () => {
    const elems = document.getElementsByClassName('hide-animate')
    elems.forEach((elem) => {
      if (elem.offsetTop < 0.9 * window.innerHeight) {
        elem.classList.add('animation-in')
      }
    })
  })
  /* Inject $scrollToTop in order to scroll to the top of the page */
  inject('scrollToTop', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
