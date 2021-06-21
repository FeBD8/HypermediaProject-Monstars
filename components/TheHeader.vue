<template>
  <header class="w3-top">
    <div class="w3-display-container">
      <div class="w3-bar">
        <div class="w3-bar-item logo w3-display-left">
          <nuxt-link to="/" @click.native="closeNav()">
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
            <div v-if="item.name === 'Areas'" class="w3-dropdown-hover">
              <nuxt-link class="w3-button w3-hover-white" :to="item.path">
                {{ item.name }}
              </nuxt-link>
              <div class="w3-bar-block w3-dropdown-content">
                <div
                  v-for="(area, areaIndex) of areas"
                  :key="'area-' + areaIndex"
                  class="w3-xlarge"
                >
                  <nuxt-link
                    class="w3-bar-item w3-button"
                    style="width: 100%"
                    :to="item.path"
                  >
                    {{ area.name }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <nuxt-link
              v-else
              class="w3-bar-item w3-button w3-hover-white"
              :to="item.path"
            >
              {{ item.name }}
            </nuxt-link>
          </div>
        </nav>
        <a
          class="w3-bar-item w3-button w3-hide-large w3-display-right icon"
          @click="openNav()"
          ><img src="~/static/icons/bars.png" class="logo"
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
      >
        <nuxt-link
          class="w3-button"
          :to="item.path"
          style="width: 100%"
          @click.native="openNav()"
        >
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      areas: [],
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
    this.areas = data
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
  margin-left: 50px !important;
  margin-right: 50px !important;
  max-height: 100px !important;
}
.w3-dropdown-hover {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-bar {
  height: 100px;
}
.w3-dropdown-hover:hover > .w3-button:first-child,
.w3-bar-block {
  background-color: white !important;
  color: black !important;
}
.w3-display-container {
  background-color: #1d4a8d !important;
  color: white !important;
}
.icon:hover {
  background-color: #1d4a8d !important;
}
</style>
