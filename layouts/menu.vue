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
  // Function used for fetching the data of the areas from the db for the ssr
  async fetch() {
    const { data } = await this.$axios.get(`${process.env.BASE_URL}/api/areas`)
    this.menuOptions.forEach((elem, index) => {
      if (elem.name === 'Areas') {
        this.menuOptions[index].content = data
      }
    })
  },
}
</script>

<style scoped>
header,
footer {
  font-family: 'Staatliches', cursive !important;
}
</style>
