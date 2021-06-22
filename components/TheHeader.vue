<template>
  <header class="w3-top">
    <div class="w3-display-container">
      <div class="w3-bar">
        <div class="w3-bar-item logo w3-display-left">
          <nuxt-link class="w3-margin-left" to="/" @click.native="closeNav()">
            <img
              src="https://cutewallpaper.org/21/monstars-logo-space-jam/Monstars-Logo-LogoDix.png"
              class="logo"
            />
          </nuxt-link>
        </div>
        <nav class="w3-bar-item w3-display-right w3-hide-small w3-hide-medium">
          <div
            v-for="(item, itemIndex) of menuOptions"
            :key="'menu-item-' + itemIndex"
            class="w3-bar-item w3-xlarge"
          >
            <navdropdownbutton
              v-if="item.name === 'Areas'"
              :name="item.name"
              :path="item.path"
              :dropdowncontent="content"
            ></navdropdownbutton>
            <navbutton v-else :name="item.name" :path="item.path"> </navbutton>
          </div>
        </nav>
        <a
          class="w3-bar-item w3-button w3-hide-large w3-display-right icon"
          @click="openNav()"
          ><img src="~/static/icons/bars.png"
        /></a>
      </div>
    </div>
    <!-- Navbar on small screens -->
    <div
      id="navSmallScreen"
      class="w3-display-container w3-hide-large w3-dropdown-content"
      style="width: 100%"
    >
      <div
        v-for="(item, itemIndex) of menuOptions"
        :key="'menu-item-' + itemIndex"
        class="w3-xlarge"
        style="text-align: center"
      >
        <navbutton
          :name="item.name"
          :path="item.path"
          @click.native="openNav()"
        >
        </navbutton>
      </div>
    </div>
  </header>
</template>

<script>
import navdropdownbutton from '~/components/navdropdownbutton.vue'
import navbutton from '~/components/navbutton.vue'
export default {
  components: {
    navdropdownbutton,
    navbutton,
  },
  data() {
    return {
      content: [],
      menuOptions: [
        {
          name: 'Areas',
          path: '/areas',
        },
        {
          name: 'Products',
          path: '/products',
        },
        {
          name: 'Company',
          path: '/company',
        },
        {
          name: 'People',
          path: '/people',
        },
      ],
    }
  },
  async fetch() {
    const { data } = await this.$axios.get(`${process.env.BASE_URL}/api/areas`)
    this.content = data
  },
  methods: {
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

<style>
.logo img {
  max-height: 100px !important;
}
.w3-bar {
  height: 80px !important;
}
.w3-display-container,
.w3-table {
  background-color: #1d4a8d;
  color: white;
}
.icon:hover {
  background-color: #1d4a8d !important;
}
</style>
