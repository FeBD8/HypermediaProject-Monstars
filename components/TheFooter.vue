<template>
  <!-- The footer of the website -->
  <footer class="w3-bottom w3-bar">
    <div class="w3-margin-left w3-margin-right">
      <section class="w3-quarter">
        <ul class="w3-ul">
          <li class="w3-center">
            <the-logo></the-logo>
          </li>
          <li class="w3-center">
            <p class="w3-padding-small">
              ©2021 Monstar S.p.A. Via Schiaffino 11 20158 Milano, Italy
            </p>
          </li>
        </ul>
      </section>
      <section class="w3-quarter">
        <ul class="w3-ul">
          <li class="w3-center">
          </li>
          <li class="w3-center">
            <p class="w3-padding-small">
              ©2021 Monstar S.p.A. Via Schiaffino 11 20158 Milano, Italy
            </p>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import TheLogo from '~/components/TheLogo.vue'
export default {
  components: {
    TheLogo,
  },
  props: {
    menuOptions: { type: Array, default: () => [] },
  },
  data() {
    return {
      areas: [],
      products: [],
    }
  },
  // Function used for fetching the data of the areas from the db for the ssr
  async fetch() {
    const { areasData } = await this.$axios.get(
      `${process.env.BASE_URL}/api/areas`
    )
    this.areas = areasData
    const { productsData } = await this.$axios.get(
      `${process.env.BASE_URL}/api/products`
    )
    this.products = productsData
  },
}
</script>

<style scoped>
.w3-bar {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-ul li {
  border-bottom: none;
}
.w3-ul li:first-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.438);
}
</style>
