<template>
  <div>
    <!-- Areas page composed by the introduction video and the list of all the areas of the company -->
    <section class="intro">
      <intro-video
        :video="intro.video"
        :poster="intro.poster"
        :title="intro.title"
        :subtitle="intro.subtitle"
      ></intro-video>
    </section>
    <!-- Areas Container -->
    <section id="content" class="w3-container">
      <div class="w3-center hide-animate">
        <h1 class="w3-xxxlarge">THE AREAS</h1>
      </div>
      <br />
      <div class="w3-padding-16">
        <list-card
          v-for="(area, areaIndex) in areas"
          :key="'area-' + areaIndex"
          class="hide-animate"
          :num="area.id"
          :title="area.name"
          :subtitle="area.subtitle"
          :image="area.image"
          :description="area.description"
          :path="$route.path + '/' + area.id"
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
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const areas = data
    return {
      areas,
    }
  },
  data() {
    return {
      intro: {
        title: 'Hack The Future',
        subtitle:
          'We create our own tech products, used and loved by millions all around the world. Our primary focus is on artificial intelligence and security, but we have got our sights set on other tech fields too.',
        video: 'https://bendingspoons.com/assets/video/technologies.mp4',
        poster: 'https://bendingspoons.com/assets/video/technologies.jpg',
      },
    }
  },
  mounted() {
    this.$showComponentsInViewport()
  },
}
</script>

<style scoped></style>
