<template>
  <!-- Header of the page of the company, with logo and the navigation bar composed of navigation button and navigation dropdown button
  It contains both the navbar for large and small screen -->
  <header class="w3-top">
    <div id="topBar" class="w3-bar">
      <li class="w3-bar-item w3-left w3-margin-left">
        <the-logo @click.native="closeNav()"></the-logo>
      </li>
      <li class="w3-bar-item w3-display-right">
        <!-- Navigation bar on large screens -->
        <nav class="w3-bar-item w3-hide-small w3-hide-medium">
          <li
            v-for="(menuItem, itemIndex) of menuOptions"
            :key="'menu-item-' + itemIndex"
            class="w3-bar-item"
          >
            <section v-if="menuItem.dropdown" class="w3-dropdown-hover">
              <nav-button
                class="
                  nav-button
                  w3-xlarge w3-padding-32
                  underline-animation-light
                "
                :name="menuItem.name"
                :path="menuItem.path"
              ></nav-button>
              <nav-dropdown-button
                :path="menuItem.path"
                :dropdown-content="menuItem.content"
                class="w3-xlarge"
              >
              </nav-dropdown-button>
            </section>
            <nav-button
              v-else
              :name="menuItem.name"
              :path="menuItem.path"
              class="
                nav-button
                w3-xlarge w3-padding-32
                underline-animation-light
              "
            >
            </nav-button>
          </li>
        </nav>
      </li>
      <button
        class="w3-bar-item w3-button w3-hide-large w3-display-right w3-ripple"
        @click="openNav()"
      >
        <img v-if="top" src="~/static/icons/bars_white.png" alt="Menu icon" />
        <img v-else src="~/static/icons/bars_dark.png" alt="Menu icon" />
      </button>
    </div>
    <!-- Navigation bar on small screens -->
    <nav
      id="navSmallScreen"
      class="w3-hide-large w3-dropdown-content"
      style="display: flex; flex-direction: column"
    >
      <ul class="w3-ul" style="flex-grow: 1; overflow: scroll">
        <li
          v-for="(item, itemIndex) of menuOptions"
          :key="'menu-item-' + itemIndex"
          style="text-align: center"
        >
          <nav-button
            :name="item.name"
            :path="item.path"
            class="w3-xlarge underline-animation-dark"
            @click.native="openNav()"
          >
          </nav-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import NavDropdownButton from '~/components/navigation/NavDropdownButton.vue'
import NavButton from '~/components/navigation/NavButton.vue'
import TheLogo from '~/components/TheLogo.vue'
export default {
  components: {
    NavDropdownButton,
    NavButton,
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
  beforeMount() {
    this.navBarOnScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.navBarOnScroll)
    window.addEventListener('resize', this.navBarSmallScreenScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.navBarOnScroll)
    window.removeEventListener('resize', this.navBarSmallScreenScroll)
  },
  methods: {
    // Methods used for showing and hiding the navbar on small screen's devices
    openNav() {
      const navBar = document.getElementById('navSmallScreen')
      navBar.classList.toggle('visible')
      this.navBarSmallScreenScroll()
    },
    closeNav() {
      const navBar = document.getElementById('navSmallScreen')
      navBar.classList.remove('visible')
    },
    /* This function is used for showing and hiding the header when the footer is reached and it colors the top bar after
    the user has scrolled down the page */
    navBarOnScroll() {
      const header = document.getElementById('topBar')
      const footer = document.getElementById('bottomBar')
      const navButtons = document.getElementsByClassName('nav-button')
      const navSmallScreen = document.getElementById('navSmallScreen')
      const offset =
        footer.offsetTop -
        document.documentElement.scrollTop -
        header.getBoundingClientRect().height -
        navSmallScreen.getBoundingClientRect().height
      if (document.documentElement.scrollTop !== 0) {
        if (offset < 0) {
          this.closeNav()
          header.classList.add('hide')
        } else {
          header.classList.remove('hide')
        }
        header.style.backgroundColor = 'white'
        header.style.color = '#041a47'
        header.classList.add('w3-border-bottom')
        navButtons.forEach((btn) => {
          btn.classList.remove('underline-animation-light')
          btn.classList.add('underline-animation-dark')
        })
        this.top = false
      } else {
        header.classList.remove('hide')
        header.classList.remove('w3-border-bottom')
        header.style.color = 'white'
        header.style.backgroundColor = 'transparent'
        navButtons.forEach((btn) => {
          btn.classList.remove('underline-animation-dark')
          btn.classList.add('underline-animation-light')
        })
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
  background-color: transparent;
  color: white;
  visibility: visible;
  opacity: 1;
  transition: background-color 0.5s linear, opacity 0.5s linear,
    border-bottom 0.5s linear;
}
#navSmallScreen {
  width: 100%;
  background-color: white;
  color: #041a47;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
  border-bottom: 1px solid #47546b65 !important;
}
.w3-dropdown-hover,
.w3-dropdown-hover:hover > .w3-button {
  background-color: transparent !important;
  color: inherit !important;
}
.w3-top {
  z-index: 2;
}
.hide {
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear !important;
}
.visible {
  visibility: visible !important;
  opacity: 1 !important;
  transition-delay: 0s !important;
}
.w3-ul li {
  padding: 8px 16px;
  border-bottom: none;
}
</style>
