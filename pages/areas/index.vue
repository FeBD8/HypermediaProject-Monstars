<template>
  <!-- All areas page composed by the introduction video and the list of all the areas of the company -->
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Areas Container -->
    <section id="content" class="w3-container">
      <section-title title="THE AREAS"></section-title>
      <list
        :list-items="areas"
        :button="true"
        alt="Abstract image of the area: "
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
  // Function used for fetching the data of the areas from the db for the ssr
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const areas = data
    return {
      areas,
    }
  },
  data() {
    return {
      // Data used for the introduction of the page: the video and the intro text
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/technologies.mp4',
        poster: 'https://bendingspoons.com/assets/video/technologies.jpg',
      },
      introText: {
        title: 'Hack The Future',
        subtitle:
          'We create our own tech products, used and loved by millions all around the world. Our primary focus is on artificial intelligence and security, but we have got our sights set on other tech fields too.',
      },
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
