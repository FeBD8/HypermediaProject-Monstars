<template>
  <!-- All products page composed of the introduction video and the list of all the products -->
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Products Container -->
    <section id="content" class="w3-container">
      <section-title title="OUR PRODUCTS"></section-title>
      <list
        :list-items="products"
        :button="true"
        alt="Screenshot of the interface of "
      ></list>
    </section>
  </div>
</template>

<script>
import List from '~/components/list/List.vue'
import IntroVideo from '~/components/intro/IntroVideo.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: {
    List,
    IntroVideo,
    SectionTitle,
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
      // Data used for the introduction of the page: the video and the intro text
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/products.mp4',
        poster: 'https://bendingspoons.com/assets/video/products.jpg',
      },
      introText: {
        title: 'Conquering the world,\nOne innovation at a time',
        subtitle:
          'We have a passion for creating products that lots of people all over the world will use. So far, we’ve focused on artificial intelligence and security: many products and millions of customers are just the beginning. Below, you’ll find our products.',
      },
    }
  },
  head: {
    title: 'Products page',
    meta: [
      {
        hid: 'Products page description',
        name: 'Products page description',
        content:
          'Products page of the Monstars ICT company that shows the list of all the products offered by the company.',
      },
    ],
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
