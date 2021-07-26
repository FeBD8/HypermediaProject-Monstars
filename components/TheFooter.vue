<template>
  <!-- The footer component of the website. It is divided into 3 main sections:
  the logo section, the navbar section and the socials section. -->
  <footer id="bottomBar" class="w3-bar">
    <div class="w3-bar-item horizontally-centered">
      <!-- Logo section with address infos -->
      <section
        id="logo"
        :class="{ 'horizontally-centered': centerElements }"
        class="w3-bar-item"
      >
        <ul class="w3-ul w3-bar-item">
          <li class="w3-center">
            <the-logo></the-logo>
          </li>
          <li class="w3-center">
            <p class="font-staatliches">
              ©2021 Monstars S.p.A.<br />Piazza Leonardo da Vinci, 32<br />Milano,
              Italy
            </p>
          </li>
        </ul>
      </section>
      <!-- Navbar on large screen devices -->
      <navbar-large
        id="navLinkLarge"
        :dropdown="false"
        :options="menuOptions"
        :dropdown-style="dropdownStyle"
        :class="{ 'horizontally-centered': centerElements }"
        class="w3-bar-item"
        :style="navBarLargeStyle"
      ></navbar-large>
      <!-- Navbar on small screen devices -->
      <navbar-small
        id="navLinkSmall"
        :options="menuOptions"
        :style="navBarSmallStyle"
        class="horizontally-centered"
      ></navbar-small>
      <!-- Social section -->
      <section
        id="social"
        :class="{ 'horizontally-centered': centerElements }"
        class="w3-bar-item"
      >
        <ul class="w3-ul">
          <li>
            <p class="w3-center font-staatliches">Follow Us</p>
          </li>
          <li>
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
import NavbarSmall from '~/components/navigation/NavbarSmall.vue'
import NavbarLarge from '~/components/navigation/NavbarLarge.vue'
export default {
  components: {
    TheLogo,
    TheSocials,
    NavbarSmall,
    NavbarLarge,
  },
  props: {
    menuOptions: { type: Array, default: () => [] },
  },
  data() {
    return {
      // Style for the dropdown content
      dropdownStyle: {
        border: '0px',
        fontSize: '1rem',
        paddingTop: '12px',
      },
      // Used for responsiveness: if it is true the elements are centered
      centerElements: false,
    }
  },
  computed: {
    // Style for the navbar on small screen devices
    navBarSmallStyle() {
      return {
        '--border-color': '#ffffff70',
        '--text-color': 'white',
        '--font-size': '1.3rem',
        '--background-color': 'trasparent',
        '--bar-width': 'auto',
        '--bar-visibility': 'visible',
        '--bar-opacity': '1',
      }
    },
    // Style for the navbar on large screen devices
    navBarLargeStyle() {
      return {
        '--text-color': 'white',
        '--font-size': '1.1rem',
        '--text-align': 'center',
      }
    },
  },
  // Listener on resize event in order to arrange the elements in the correct way
  mounted() {
    this.changeElemsArrangement()
    window.addEventListener('resize', this.changeElemsArrangement)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeElemsArrangement)
  },
  methods: {
    /* Method used for the responsiveness of the footer and the arrangement of its elements.
    It sets the centerElements data field used by the html components. */
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
        this.centerElements = true
      } else if (window.innerWidth > 1001) {
        this.centerElements = false
      }
    },
  },
}
</script>

<style scoped>
#bottomBar {
  background-color: #041a47 !important;
  color: white !important;
  position: absolute;
  font-size: 1.1rem;
}
#navLinkLarge {
  padding: 24px 32px !important;
}
#social {
  padding: 32px 16px;
}
ul li {
  border-bottom: none;
}
p {
  margin: 20px 0;
}
.horizontally-centered {
  float: none;
  display: table;
}
</style>
