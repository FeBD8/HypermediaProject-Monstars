<template>
  <div>
    <div class="area-description">
      <section class="background">
        <paragraph
          :title="area.name"
          :subtitle="area.subtitle"
          :description="area.description"
          :style="introTextStyle"
          class="horizontally-centered animation-in"
        ></paragraph>
      </section>
      <location :name="area.name"></location>
      <!-- Details Container -->
      <section id="content" class="w3-container">
        <div class="w3-center hide-animate">
          <h2 class="section-title">{{ area.name }} SOLUTIONS</h2>
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
              :alt="'Abstract image of the ' + detail.title"
              :description="detail.description"
              :card-style="cardStyle"
            >
            </list-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Location from '~/components/Location.vue'
import Paragraph from '~/components/Paragraph.vue'
export default {
  components: {
    Location,
    Paragraph,
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
      cardStyle: {
        titleColor: '#1b65a6',
        subtitleColor: '#5c74a0',
        descriptionColor: 'black',
      },
    }
  },
  computed: {
    introTextStyle() {
      return {
        '--title-align': 'center',
        '--title-responsive-align': 'center',
        '--subtitle-color': '#1d90eb',
        '--subtitle-align': 'center',
        '--subtitle-responsive-align': 'center',
        '--description-align': 'center',
      }
    },
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped>
.background {
  background: #41295a;
  background: -webkit-linear-gradient(to left, #41295a, #2f0743);
  background: linear-gradient(to left, #41295a, #2f0743);
  max-height: 70vh;
}
.area-description {
  padding-bottom: 100px;
}
.location {
  margin-top: 30px;
}
.listcard-container {
  width: 60vw;
}
.text-container {
  padding-top: 15vh;
  padding-bottom: 10vh;
  width: 50vw;
}
</style>
