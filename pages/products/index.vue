<template>
  <div>
    <!-- Products page composed by the introduction video and the list of all the products -->
    <section class="intro">
      <intro-video
        :video="intro.video"
        :poster="intro.poster"
        :title="intro.title"
        :subtitle="intro.subtitle"
      ></intro-video>
    </section>
    <!-- Products Container -->
    <section id="content" class="w3-container">
      <div class="w3-center hide-animate">
        <h1 class="w3-xxxlarge">OUR PRODUCTS</h1>
      </div>
      <br />
      <div class="w3-padding-16">
        <list-card
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
        </list-card>
      </div>
    </section>
  </div>
</template>

<script>
import ListCard from '~/components/ListCard.vue'
export default {
  components: {
    ListCard,
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
        video: 'https://bendingspoons.com/assets/video/products.mp4',
        poster: 'https://bendingspoons.com/assets/video/products.jpg',
      },
    }
  },
  mounted() {
    this.$showComponentsInViewport()
  },
}
</script>

<style scoped></style>
