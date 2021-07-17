<template>
  <div>
    <!-- Products page composed by the introduction video and the list of all the products -->
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Products Container -->
    <section id="content" class="w3-container">
      <section-title title="OUR PRODUCTS"></section-title>
      <group-list
        :group="products"
        alt="Screenshot of the interface of "
      ></group-list>
    </section>
  </div>
</template>

<script>
import GroupList from '~/components/list/GroupList.vue'
import IntroVideo from '~/components/IntroVideo.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: {
    GroupList,
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
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
