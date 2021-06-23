<template>
  <!-- Header of the page of the company, with logo and the navigation bar composed of navigation button and navigation dropdown button 
  It contains both the navbar for large and small screen -->

  <!-- Navigation bar on large screens -->
  <header class="w3-top">
    <ul class="w3-bar w3-ul">
      <li class="w3-left w3-margin-left">
        <the-logo></the-logo>
      </li>
      <li class="w3-display-right">
        <nav class="w3-bar-item w3-hide-small w3-hide-medium">
          <ul class="w3-ul">
            <li
              v-for="(item, itemIndex) of menuOptions"
              :key="'menu-item-' + itemIndex"
              class="w3-bar-item"
            >
              <nav-dropdown-button
                v-if="item.name === 'Areas'"
                :name="item.name"
                :path="item.path"
                :dropdown-content="areas"
              ></nav-dropdown-button>
              <nav-button v-else :name="item.name" :path="item.path">
              </nav-button>
            </li>
          </ul>
        </nav>
      </li>
      <button
        class="w3-bar-item w3-button w3-hide-large w3-display-right icon"
        @click="openNav()"
      >
        <img src="~/static/icons/bars.png" alt="Menu icon" />
      </button>
    </ul>
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
  data() {
    return {
      areas: [],
    }
  },
  // Function used for fetching the data of the areas from the db for the ssr
  async fetch() {
    const { data } = await this.$axios.get(`${process.env.BASE_URL}/api/areas`)
    this.areas = data
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
header {
  font-family: 'Staatliches', cursive;
}
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
