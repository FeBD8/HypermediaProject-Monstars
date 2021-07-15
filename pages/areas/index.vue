<template>
  <div>
    <!-- Areas page composed by the introduction video and the list of all the areas of the company -->
    <intro-video
      :intro-video="introVideo"
      :intro-text="introText"
      class="intro"
    ></intro-video>
    <!-- Areas Container -->
    <section id="content" class="w3-container">
      <div class="w3-center hide-animate">
        <h2 class="w3-xxxlarge">THE AREAS</h2>
      </div>
      <br />
      <div class="w3-padding-16">
        <div
          v-for="(area, areaIndex) in areas"
          id="listRow"
          :key="'area-' + areaIndex"
          class="w3-row margin-bottom hide-animate"
        >
          <list-card
            :num="area.id"
            :title="area.name"
            :subtitle="area.subtitle"
            :image="area.image"
            :alt="'Abstract image of the ' + area.name + ' area'"
            :description="area.description"
            :path="$route.path + '/' + area.id"
            :card-style="cardStyle"
          >
          </list-card>
        </div>
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
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/technologies.mp4',
        poster: 'https://bendingspoons.com/assets/video/technologies.jpg',
      },
      introText: {
        title: 'Hack The Future',
        subtitle:
          'We create our own tech products, used and loved by millions all around the world. Our primary focus is on artificial intelligence and security, but we have got our sights set on other tech fields too.',
      },
      cardStyle: {
        titleColor: '#0d2b66',
        subtitleColor: '#5c74a0',
        descriptionColor: 'black',
      },
    }
  },
  mounted() {
    this.$showComponentsInViewport()
  },
}
</script>

<style scoped>
.listcard-container {
  max-width: 70%;
}
@media (max-width: 1000px) {
  .listcard-container {
    max-width: 90%;
  }
}
</style>
