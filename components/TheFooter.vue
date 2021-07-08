<template>
  <!-- The footer of the website with the method for responsiveness -->
  <footer id="bottomBar" class="w3-bar">
    <div class="w3-bar-item center">
      <!-- Logo section -->
      <section id="logo" class="w3-bar-item">
        <ul class="w3-ul w3-bar-item">
          <li class="w3-center">
            <the-logo></the-logo>
          </li>
          <li class="w3-center">
            <p class="w3-large">
              ©2021 Monstars S.p.A.<br />Piazza Leonardo da Vinci, 32<br />Milano,
              Italy
            </p>
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
            <li class="border-bottom zero-padding-top">
              <nav-button
                :name="dropItem.name"
                :path="dropItem.path"
                class="w3-large zero-padding-top"
              >
              </nav-button>
            </li>
            <li
              v-for="(contentItem, contentIndex) of dropItem.content"
              id="contentDrop"
              :key="'contentDrop-item-' + contentIndex"
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
            id="menuButton"
            :key="'menu-item-' + itemIndex"
            class="w3-bar-item w3-large"
            :name="menuItem.name"
            :path="menuItem.path"
          >
          </nav-button>
        </div>
      </nav>
      <!-- Navbar on small screen devices -->
      <nav
        id="navLinkSmall"
        class="w3-bar-item w3-hide-large center border-bottom border-top"
      >
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
      <section id="social" class="w3-bar-item w3-padding-top-24">
        <ul class="w3-bar-item w3-ul">
          <li>
            <p class="w3-large w3-center" style="margin: 0">Follow Us</p>
          </li>
          <li class="w3-padding-24">
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
  mounted() {
    this.changeElemsArrangement()
    window.addEventListener('resize', this.changeElemsArrangement)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeElemsArrangement)
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
        200
      if (window.innerWidth <= barWidth) {
        logo.classList.add('center')
        navLinkLarge.classList.add('center')
        social.classList.add('center')
      } else if (window.innerWidth > 901) {
        logo.classList.remove('center')
        navLinkLarge.classList.remove('center')
        social.classList.remove('center')
      }
    },
  },
}
</script>

<style scoped>
p {
  font-family: 'Staatliches', 'cursive' !important;
}
#bottomBar {
  background-color: #47546b !important;
  color: white !important;
  z-index: 3;
  position: absolute;
}
#menuButton {
  margin-left: 20px !important;
  margin-right: 20px !important;
}
#social,
#navLinkLarge {
  padding-top: 32px !important;
}
#contentDrop {
  font-family: 'Montserrat', sans-serif !important;
  padding: 8px !important;
}
.center {
  float: none;
  margin: auto !important;
  display: table;
}
.nav-button:hover::after {
  width: 0;
}
.w3-ul li {
  border-bottom: none;
}
.border-bottom {
  border-bottom: 1px solid rgba(255, 255, 255, 0.438) !important;
}
.border-top {
  border-top: 1px solid rgba(255, 255, 255, 0.438) !important;
}
.zero-padding-top {
  padding-top: 0 !important;
}
</style>
