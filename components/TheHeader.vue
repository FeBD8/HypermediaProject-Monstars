<template>
  <header class="w3-top">
    <div class="w3-display-container">
      <section class="w3-bar">
        <section class="w3-bar-item w3-display-left">
          <the-logo class="w3-margin-left"></the-logo>
        </section>
        <nav class="w3-bar-item w3-display-right w3-hide-small w3-hide-medium">
          <div
            v-for="(item, itemIndex) of menuOptions"
            :key="'menu-item-' + itemIndex"
            class="w3-bar-item w3-xlarge"
          >
            <nav-dropdown-button
              v-if="item.content"
              :name="item.name"
              :path="item.path"
              :dropdowncontent="item.content"
            ></nav-dropdown-button>
            <nav-button v-else :name="item.name" :path="item.path">
            </nav-button>
          </div>
        </nav>
        <a
          class="w3-bar-item w3-button w3-hide-large w3-display-right icon"
          @click="openNav()"
          ><img src="~/static/icons/bars.png"
        /></a>
      </section>
    </div>
    <!-- Navbar on small screens -->
    <nav
      id="navSmallScreen"
      class="
        w3-display-container
        w3-hide-large
        w3-dropdown-content
        w3-animate-opacity
      "
      style="width: 100%"
    >
      <div
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
      </div>
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
  data() {
    return {
      menuOptions: [
        {
          name: 'Areas',
          path: '/areas',
          content: [],
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
    this.menuOptions.forEach((elem, index) => {
      if (elem.name === 'Areas') {
        this.menuOptions[index].content = data
      }
    })
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

<style scoped>
header {
  font-family: 'Staatliches', cursive;
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
