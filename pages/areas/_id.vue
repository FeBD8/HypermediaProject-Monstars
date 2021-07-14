<template>
  <div>
    <section id="background">
      <div class="background-overlay"></div>
      <div id="text" class="text-container horizontally-centered">
        <div class="w3-row animation-in">
          <div class="w3-col">
            <h1 class="font-jumbo">
              {{ area.name }}
            </h1>
            <h2 class="w3-xxlarge font-montserrat" style="color: #7d92b8">
              <b>{{ area.subtitle }}</b>
            </h2>
            <p class="w3-large">{{ area.description }}</p>
          </div>
        </div>
      </div>
    </section>
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
          class="w3-row margin-bottom-large hide-animate"
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
export default {
  components: {
    Location,
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
  computed: {
    pathName() {
      return this.$route.name.toUpperCase()
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
#content {
  padding-top: 0;
}
#background {
  background-image: url('https://www.akamas.io/wp-content/uploads/2021/05/2bis-scaled.jpg');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.background-overlay {
  background-color: #0000008a !important;
}
.text-container {
  width: 60vw;
  padding-top: 20vh;
  padding-bottom: 20vh;
  position: relative;
  z-index: 1;
}
h2 {
  margin-bottom: 25px;
  padding-bottom: 0;
}
h1,
p {
  color: white !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.w3-col {
  text-align: center !important;
}
.location {
  margin-left: 30px;
  margin-top: 30px;
}
.font-jumbo {
  font-size: 100px;
}
@media (max-width: 600px) {
  .text-container {
    width: 90vw;
    padding-top: 20vh;
    padding-bottom: 15vh;
  }
  h2 {
    margin-top: 25px;
  }
}
@media (max-width: 1000px) {
  .text-container {
    width: 90vw;
  }
  .listcard-container {
    max-width: 90% !important;
  }
}
</style>
