<template>
  <!-- Header of the page of the company, with logo and the navigation bar component.
  It contains both the navbar for large and small screen -->
  <header class="w3-top">
    <section
      id="topBar"
      :class="{ shadow: !top }"
      class="w3-bar"
      :style="!top ? { '--background-color': 'white' } : null"
    >
      <div class="w3-bar-item bar-container">
        <div class="w3-bar-item">
          <the-logo @click.native="$closeNav()"></the-logo>
        </div>
        <!-- Navigation bar on large screens -->
        <navbar-large
          :options="menuOptions"
          :style="top ? barStyleTop : null"
          class="w3-bar-item"
        ></navbar-large>
        <!-- Button for showing and hiding the navbar on small screen devices -->
        <button
          class="w3-bar-item w3-button menu-button w3-hide-large w3-ripple"
          @click="$openNav(), navBarSmallScreenScroll()"
        >
          <img
            :src="
              top
                ? require('~/static/icons/bars_white.png')
                : require('~/static/icons/bars_dark.png')
            "
            alt="Menu icon"
          />
        </button>
      </div>
    </section>
    <!-- Navigation bar on small screens -->
    <navbar-small :options="menuOptions"></navbar-small>
  </header>
</template>

<script>
import NavbarLarge from '~/components/navigation/NavbarLarge.vue'
import NavbarSmall from '~/components/navigation/NavbarSmall.vue'
import TheLogo from '~/components/TheLogo.vue'
export default {
  components: {
    NavbarLarge,
    NavbarSmall,
    TheLogo,
  },
  props: {
    menuOptions: { type: Array, default: () => [] },
  },
  data() {
    return {
      top: true,
    }
  },
  computed: {
    barStyleTop() {
      return {
        '--underline-color': 'white',
        '--text-color': 'white',
      }
    },
  },
  mounted() {
    this.navBarOnScroll()
    window.addEventListener('scroll', this.navBarOnScroll)
    window.addEventListener('resize', this.navBarSmallScreenScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.navBarOnScroll)
    window.removeEventListener('resize', this.navBarSmallScreenScroll)
  },
  methods: {
    /* This function is used for showing and hiding the header when the footer is reached and in order to 
    update the top value for the conditional styling */
    navBarOnScroll() {
      const header = document.getElementById('topBar')
      const footer = document.getElementById('bottomBar')
      const navSmallScreen = document.getElementById('navSmallScreen')
      const offset =
        footer.offsetTop -
        document.documentElement.scrollTop -
        header.getBoundingClientRect().height -
        navSmallScreen.getBoundingClientRect().height
      if (document.documentElement.scrollTop !== 0) {
        if (offset < 0) {
          this.$closeNav()
          header.classList.add('hide')
        } else {
          header.classList.remove('hide')
        }
        this.top = false
      } else {
        this.top = true
      }
    },
    /* This function allows the generation of the scrollable menu on small screen devices when the screen height
    is too small for showing all the contents */
    navBarSmallScreenScroll() {
      const navBar = document.getElementById('navSmallScreen')
      const topBar = document.getElementById('topBar')
      navBar.style.maxHeight =
        window.innerHeight - topBar.getBoundingClientRect().height + 'px'
    },
  },
}
</script>

<style scoped>
#topBar {
  visibility: visible;
  opacity: 1;
  transition: background-color 0.3s linear, opacity 0.3s linear,
    border-bottom 0s linear 0.3s;
  background-color: var(--background-color, 'trasparent');
}
.bar-container {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
}
.w3-top {
  z-index: 2;
}
.hide {
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear !important;
}
.menu-button {
  margin-left: auto;
}
</style>
