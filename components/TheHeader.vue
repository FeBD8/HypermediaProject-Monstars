<template>
  <!-- Header of the page of the company, with logo and the navigation bar composed of navigation button and navigation dropdown button 
  It contains both the navbar for large and small screen -->

  <header class="w3-top">
    <div id="top-bar" class="w3-bar">
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
        class="w3-bar-item w3-button w3-hide-large w3-display-right icon"
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
    this.colorBarOnScroll()
  },
  mounted() {
    window.addEventListener('scroll', this.colorBarOnScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.colorBarOnScroll)
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
    colorBarOnScroll() {
      const bar = document.getElementById('top-bar')
      if (document.documentElement.scrollTop !== 0) {
        bar.style.backgroundColor = '#1d4a8d'
      } else {
        bar.style.backgroundColor = 'transparent'
      }
    },
  },
}
</script>

<style scoped>
#top-bar {
  background-color: transparent;
  color: white;
  transition: background-color 0.5s linear;
}
#navSmallScreen {
  width: 100%;
  background-color: white;
  color: #1d4a8d;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
}
.visible {
  visibility: visible !important;
  opacity: 1 !important;
  transition-delay: 0s !important;
}
.button-smallscreen:hover {
  color: #1d4a8d !important;
  background-color: transparent !important;
}
.button-smallscreen::after {
  background: #1d4a8d !important;
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
