<template>
  <!-- The footer of the website with the method for responsiveness -->
  <footer class="w3-bar">
    <div id="bar" class="w3-bar-item center">
      <!-- Logo section -->
      <section id="logo" class="w3-bar-item">
        <ul class="w3-ul w3-bar-item">
          <li class="w3-center">
            <the-logo></the-logo>
          </li>
          <li class="w3-center">
            <p class="w3-large">©2021 Monstar S.p.A.</p>
            <p class="w3-large">Piazza Leonardo da Vinci, 32</p>
            <p class="w3-large">Milano, Italy</p>
          </li>
        </ul>
      </section>
      <!-- Navbar on large screen devices -->
      <nav id="navLinkLarge" class="w3-bar-item w3-hide-small w3-hide-medium">
        <div id="dropdown" class="w3-bar-item w3-bar">
          <ul
            v-for="(dropItem, itemIndex) of elemsWithDropdownContent"
            :key="'drop-item-' + itemIndex"
            class="w3-bar-item w3-ul w3-center"
          >
            <li id="link-line">
              <nav-button
                :name="dropItem.name"
                :path="dropItem.path"
                class="w3-large"
              >
              </nav-button>
            </li>
            <li
              v-for="(contentItem, contentIndex) of dropItem.content"
              id="content"
              :key="'content-item-' + contentIndex"
            >
              <nav-button
                :name="contentItem.name"
                :path="dropItem.path + '/' + contentItem.id"
                class="w3-medium"
              >
              </nav-button>
            </li>
          </ul>
        </div>
        <div id="menu" class="w3-bar-item w3-bar">
          <nav-button
            v-for="(menuItem, itemIndex) of elemsWithoutDropdownContent"
            id="menu-button"
            :key="'menu-item-' + itemIndex"
            class="w3-bar-item w3-large w3-padding-top-24"
            :name="menuItem.name"
            :path="menuItem.path"
          >
          </nav-button>
        </div>
      </nav>
      <!-- Navbar on small screen devices -->
      <nav id="navLinkSmall" class="w3-bar-item w3-hide-large center">
        <ul class="w3-bar-item w3-ul">
          <li
            v-for="(item, itemIndex) of menuOptions"
            :key="'menu-item-' + itemIndex"
            class="w3-large"
            style="text-align: center"
          >
            <nav-button :name="item.name" :path="item.path"> </nav-button>
          </li>
        </ul>
      </nav>
      <!-- Social section -->
      <section id="social" class="w3-bar-item">
        <ul class="w3-bar-item w3-ul w3-padding-top-24">
          <li class="w3-center">
            <p class="w3-large">Follow Us</p>
          </li>
          <li class="w3-center">
            <the-socials></the-socials>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import TheLogo from '~/components/TheLogo.vue'
import TheSocials from '~/components/TheSocials.vue'
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    TheLogo,
    TheSocials,
    NavButton,
  },
  props: {
    menuOptions: { type: Array, default: () => [] },
  },
  computed: {
    elemsWithDropdownContent() {
      const elems = []
      this.menuOptions.forEach((item) => {
        if (item.dropdown) elems.push(item)
      })
      return elems
    },
    elemsWithoutDropdownContent() {
      const elems = []
      this.menuOptions.forEach((item) => {
        if (!item.dropdown) elems.push(item)
      })
      return elems
    },
  },
  beforeMount() {
    this.changeElemsArrangement()
  },
  mounted() {
    window.addEventListener('resize', this.changeElemsArrangement)
  },
  methods: {
    // Method used for the responsiveness of the footer and the arrangement of its elements
    changeElemsArrangement() {
      const logo = document.getElementById('logo')
      const navLinkLarge = document.getElementById('navLinkLarge')
      const navLinkSmall = document.getElementById('navLinkSmall')
      const social = document.getElementById('social')
      const barWidth =
        logo.getBoundingClientRect().width +
        navLinkLarge.getBoundingClientRect().width +
        navLinkSmall.getBoundingClientRect().width +
        social.getBoundingClientRect().width +
        100
      if (window.innerWidth <= barWidth) {
        if (!logo.className.includes('center')) {
          logo.className += ' center'
          navLinkLarge.className += ' center'
          social.className += ' center'
        }
      } else if (logo.className.includes('center')) {
        logo.className = logo.className.replace('center', '')
        navLinkLarge.className = navLinkLarge.className.replace('center', '')
        social.className = social.className.replace('center', '')
      }
    },
  },
}
</script>

<style scoped>
#menu,
#dropdown {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
#menu-button {
  margin-left: 20px !important;
  margin-right: 20px !important;
}
.center {
  float: none;
  margin: auto !important;
  display: table;
}
#nav-button::after {
  transition: none;
}
#nav-button:hover::after {
  width: 0;
}
#content {
  font-family: 'Montserrat', sans-serif !important;
}
.w3-button:hover {
  color: white !important;
  background-color: transparent !important;
}
.w3-bar {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-ul li {
  border-bottom: none;
}
#link-line {
  border-bottom: 1px solid rgba(255, 255, 255, 0.438);
}
</style>
