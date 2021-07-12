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
        <div
          v-for="(product, productIndex) in products"
          :id="'listRow' + productIndex"
          :key="'product-' + productIndex"
          class="w3-row margin-bottom-large hide-animate"
        >
          <list-card
            :num="product.id"
            :title="product.name"
            :subtitle="product.subtitle"
            :logo="product.logo"
            :image="product.image"
            :alt="'Screenshot of the ' + product.title + ' interface'"
            :description="product.description"
            :path="$route.path + '/' + product.id"
          >
          </list-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ListCard from '~/components/ListCard.vue'
import IntroVideo from '~/components/IntroVideo.vue'
export default {
  components: {
    ListCard,
    IntroVideo,
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
    // This is used to change the background color of consecutive rows
    // const productRow = document.getElementById('listRow' + this.num)
    // if (this.num % 2 !== 0) {
    //   productRow.style.backgroundColor = '#f2f2f2'
    // } else {
    //   productRow.style.backgroundColor = 'trasparent'
    // }
  },
}
</script>

<style scoped></style>
