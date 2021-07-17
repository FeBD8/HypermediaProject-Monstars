<template>
  <div>
    <!-- Areas page composed by the introduction video and the list of all the areas of the company -->
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Areas Container -->
    <section id="content" class="w3-container">
      <section-title title="THE AREAS"></section-title>
      <group-list
        :group="areas"
        alt="Abstract image of the area: "
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
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
