<template>
  <!-- Header of the page of the company, with logo and the navigation bar composed of navigation button and navigation dropdown button 
  It contains both the navbar for large and small screen -->

  <header class="w3-top">
    <div class="w3-bar">
      <li class="w3-bar-item w3-left w3-margin-left">
        <the-logo></the-logo>
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
    <nav
      id="navSmallScreen"
      class="w3-hide-large w3-dropdown-content w3-animate-opacity"
      style="width: 100%"
    >
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
  methods: {
    // Methods used for showing and hiding the navbar on small screen's devices
    openNav() {
      const x = document.getElementById('navSmallScreen')
      if (x.className.includes('w3-show')) {
        this.closeNav()
      } else {
        x.className += ' w3-show'
      }
    },
    closeNav() {
      const x = document.getElementById('navSmallScreen')
      x.className = x.className.replace('w3-show', '')
    },
  },
}
</script>

<style scoped>
.w3-bar,
#navSmallScreen {
  background-color: #1d4a8d;
  color: white;
}
.icon:hover {
  background-color: #1d4a8d !important;
}
.w3-ul li {
  padding: 8px 16px;
  border-bottom: none;
}
</style>
