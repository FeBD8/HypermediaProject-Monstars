<template>
  <div>
    <the-header :menu-options="menuOptions"></the-header>
    <div class="content">
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
}
</script>

<style>
header,
footer,
h1 {
  font-family: 'Staatliches', 'cursive' !important;
}
p,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Montserrat', 'sans-serif' !important;
}
</style>
