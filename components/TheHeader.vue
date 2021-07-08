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
            <nav-dropdown-button
              v-if="menuItem.dropdown"
              :name="menuItem.name"
              :path="menuItem.path"
              :dropdown-content="menuItem.content"
              class="w3-xlarge"
            ></nav-dropdown-button>
            <nav-button
              v-else
              :name="menuItem.name"
              :path="menuItem.path"
              class="w3-xlarge"
            >
            </nav-button>
          </li>
        </nav>
      </li>
      <button
        class="
          w3-bar-item w3-button w3-hide-large w3-display-right w3-ripple
          icon
        "
        @click="openNav()"
      >
        <img src="~/static/icons/bars.png" alt="Menu icon" />
      </button>
    </div>
    <!-- Navigation bar on small screens -->
    <nav id="navSmallScreen" class="w3-hide-large w3-dropdown-content">
      <ul class="w3-ul">
        <li
          v-for="(item, itemIndex) of menuOptions"
          :key="'menu-item-' + itemIndex"
          class="w3-xlarge"
          style="text-align: center"
        >
          <nav-button
            :name="item.name"
            :path="item.path"
            class="button-smallscreen"
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
  beforeMount() {
    this.navBarOnScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.navBarOnScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.navBarOnScroll)
  },
  methods: {
    // Methods used for showing and hiding the navbar on small screen's devices
    openNav() {
      const navBar = document.getElementById('navSmallScreen')
      navBar.classList.toggle('visible')
    },
    closeNav() {
      const navBar = document.getElementById('navSmallScreen')
      navBar.classList.remove('visible')
    },
    navBarOnScroll() {
      const header = document.getElementById('topBar')
      const footer = document.getElementById('bottomBar')
      const offset =
        footer.offsetTop -
        document.documentElement.scrollTop -
        header.getBoundingClientRect().height

      if (document.documentElement.scrollTop !== 0) {
        if (offset < 0) {
          header.classList.add('animate-hide')
        } else {
          header.classList.remove('animate-hide')
        }
        header.style.backgroundColor = '#47546b'
      } else {
        header.classList.remove('animate-hide')
        header.style.backgroundColor = 'transparent'
      }
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
  transition: background-color 0.5s linear, opacity 0.5s linear;
}
#navSmallScreen {
  width: 100%;
  background-color: white;
  color: #47546b;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
  border-bottom: 1px solid #47546b65 !important;
}
.w3-top {
  z-index: 2;
}
.animate-hide {
  visibility: hidden !important;
  opacity: 0 !important;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear !important;
}
.visible {
  visibility: visible !important;
  opacity: 1 !important;
  transition-delay: 0s !important;
}
.button-smallscreen:hover {
  color: #47546b !important;
  background-color: transparent !important;
}
.button-smallscreen::after {
  background: #47546b !important;
}
.icon {
  background-color: transparent !important;
}
.icon:hover {
  background-color: transparent !important;
}
.w3-ul li {
  padding: 8px 16px;
  border-bottom: none;
}
</style>
