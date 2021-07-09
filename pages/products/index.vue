<template>
  <div>
    <!-- Products page composed by the introduction video and the list of all the products -->
    <intro-video
      :src="intro.src"
      :title="intro.title"
      :subtitle="intro.subtitle"
    ></intro-video>
    <!-- Products Container -->
    <section id="content" class="w3-container">
      <div class="w3-center hide-animate">
        <h1 class="w3-xxxlarge">OUR PRODUCTS</h1>
      </div>
      <br />
      <div class="w3-padding-16">
        <product-card
          v-for="(product, productIndex) in products"
          :key="'product-' + productIndex"
          class="hide-animate"
          :num="product.id"
          :title="product.title"
          :subtitle="product.subtitle"
          :logo="product.logo"
          :image="product.image"
          :description="product.description"
          :path="$route.path + '/' + product.id"
        >
        </product-card>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    ProductCard,
  },
  layout: 'default',
  // Function used for fetching the data of the products from the db for the ssr
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/products`)
    const products = data
    return {
      products,
    }
  },
  data() {
    return {
      intro: {
        title: 'Conquering the world,\nOne innovation at a time',
        subtitle:
          'We have a passion for creating products that lots of people all over the world will use. So far, we’ve focused on artificial intelligence and security: many products and millions of customers are just the beginning. Below, you’ll find our products.',
        src: 'https://bendingspoons.com/assets/video/products.mp4',
      },
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
