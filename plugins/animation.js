export default ({ app }, inject) => {
  /* Inject $animateComponents in order to show the animation in all the components and pages in which the 
  class hide-animate is defined */
  inject('animateComponents', () => {
    const elems = document.getElementsByClassName('hide-animate')
    elems.forEach((elem) => {
      const offset =
        elem.offsetTop -
        document.documentElement.scrollTop -
        window.innerHeight +
        100
      if (offset < 0) {
        elem.classList.add('animation-in')
      }
    })
  })
}
