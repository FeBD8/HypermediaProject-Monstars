<template>
  <div>
    <intro-video
      :intro-video="introVideo"
      :intro-text="{
        title: area.name,
        subtitle: area.subtitle,
        description: area.description,
      }"
      :intro-text-style="introTextStyle"
      :style="videoStyle"
      class="intro"
    ></intro-video>
    <location :name="area.name" class="location"> </location>
    <!-- Details Container -->
    <section id="content" class="w3-container">
      <div class="w3-center hide-animate">
        <h2 class="w3-xxxlarge">{{ area.name }} SOLUTIONS</h2>
      </div>
      <div class="w3-padding-16">
        <div
          v-for="(detail, detailIndex) in area.area_details"
          :key="'detail-' + detailIndex"
          class="w3-row hide-animate"
        >
          <list-card
            :num="detail.id"
            :title="detail.title"
            :subtitle="detail.subtitle"
            :image="detail.image"
            :alt="'Abstract image of the ' + detail.name"
            :description="detail.description"
          >
          </list-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Location from '~/components/Location.vue'
import IntroVideo from '~/components/IntroVideo.vue'
export default {
  components: {
    Location,
    IntroVideo,
  },
  layout: 'default',
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas/${id}`)
    const area = data
    return {
      area,
    }
  },
  data() {
    return {
      introVideo: {
        src: 'https://vod-progressive.akamaized.net/exp=1626378548~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3748%2F14%2F368740653%2F1526460590.mp4~hmac=63fc9702761f0c636a3c9f9e4ee4e321633c1d088271e371903aa5b032061fe7/vimeo-prod-skyfire-std-us/01/3748/14/368740653/1526460590.mp4',
      },
      introTextStyle: {
        titleAlign: 'center',
        subtitleWidth: '100%',
        subtitleColor: '#1d90eb',
        subtitleSize: '2rem',
        subtitlePosition: 'center',
        subtitleAlign: 'center',
      },
    }
  },
  computed: {
    pathName() {
      return this.$route.name.toUpperCase()
    },
    videoStyle() {
      return {
        '--video-opacity': '0.3',
      }
    },
  },
  mounted() {
    this.$showComponentsInViewport()
  },
}
</script>

<style scoped>
.listcard-container {
  max-width: 60% !important;
}
.intro {
  min-height: fit-content;
  background-color: #323846dc !important;
}
</style>
