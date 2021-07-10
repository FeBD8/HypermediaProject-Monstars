<template>
  <!-- Default layout composed by the header, the main content and the footer -->
  <div>
    <the-header :menu-options="menuOptions"></the-header>
    <div>
      <Nuxt />
    </div>
    <the-footer :menu-options="menuOptions"></the-footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      /* The dropdown flaf is used to select which button should have the dropdown menu 
      with its content into the navigation bar and the list of elements in the footer */
      menuOptions: [
        {
          name: 'Areas',
          path: '/areas',
          content: [],
          dropdown: true,
        },
        {
          name: 'Products',
          path: '/products',
        },
        {
          name: 'People',
          path: '/people',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
      ],
    }
  },
  // Function used for fetching the data of the areas from the db for the ssr
  async fetch() {
    for (let i = 0; i < this.menuOptions.length; i++) {
      if (this.menuOptions[i].dropdown) {
        const { data } = await this.$axios.get(
          `${process.env.BASE_URL}/api${this.menuOptions[i].path}`
        )
        this.menuOptions[i].content = data
      }
    }
  },
  // Add the listener when scroll and resize in order to animate the components
  mounted() {
    window.addEventListener('scroll', this.$animateComponents)
    window.addEventListener('resize', this.$animateComponents)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.$animateComponents)
    window.removeEventListener('resize', this.$animateComponents)
  },
}
</script>

<style>
header,
footer,
h1 {
  font-family: 'Staatliches', 'cursive' !important;
}
h1 {
  color: #0d2b66 !important;
}
p,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', 'sans-serif' !important;
}
section#content {
  padding: 48px 0;
}
.hide-animate {
  visibility: hidden;
}
.animation-in {
  visibility: visible !important;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
@media (max-width: 901px) {
  .w3-xxxlarge {
    font-size: 30px !important;
  }
  .w3-xlarge {
    font-size: 20px !important;
  }
  .w3-large {
    font-size: 15px !important;
  }
}
</style>
