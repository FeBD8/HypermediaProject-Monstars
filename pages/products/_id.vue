<template>
  <div class="product">
    <section id="background">
      <div id="text" class="text-container horizontally-centered">
        <div class="w3-row animation-in">
          <div class="w3-col">
            <div v-if="product.logo !== ''" class="logo horizontally-centered">
              <img
                class="horizontally-centered filter"
                :src="product.logo"
                :alt="'Logo' + product.name"
              />
            </div>
            <h1 v-if="product.logo === ''" class="font-jumbo">
              {{ product.name }}
            </h1>
            <h2 class="w3-xlarge">
              <b>{{ product.subtitle }}</b>
            </h2>
            <p class="w3-large">{{ product.description }}</p>
          </div>
        </div>
      </div>
      <location :name="product.name" class="location" style="color: white">
      </location>
    </section>
    <!-- Details Container -->
    <section id="content" class="w3-container">
      <div class="w3-padding-16">
        <div
          v-for="(detail, detailIndex) in product.product_details"
          :key="'detail-' + detailIndex"
          class="w3-row margin-bottom-large hide-animate"
        >
          <list-card
            :num="detail.id"
            :title="detail.title"
            :subtitle="detail.subtitle"
            :image="detail.image"
            :alt="'Abstract image of the ' + detail.title"
            :description="detail.description"
            style="color: white"
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
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/products/${id}`
    )
    const product = data
    return {
      product,
    }
  },

  mounted() {
    this.$showComponentsInViewport()
    this.index = document.referrer
    this.resizeBackground()
    const cardTitle = document.querySelectorAll('#card-title')
    const cardSubtitle = document.querySelectorAll('#card-subtitle')
    cardTitle.forEach((item) => (item.style.color = '#1d90eb'))
    cardSubtitle.forEach((item) => (item.style.color = '#5c74a0'))
    window.addEventListener('resize', this.resizeBackground)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeBackground)
  },
  methods: {
    resizeBackground() {
      const introText = document.getElementById('text')
      const background = document.getElementById('background')
      background.style.minHeight =
        introText.offsetHeight + 0.3 * window.innerHeight + 'px'
    },
  },
}
</script>

<style scoped>
#content {
  padding-top: 0;
}
#background {
  background-image: url('https://uploads-ssl.webflow.com/6020129a813fe0c8f1e8053e/605367dda8d43f98d78b77ec_Home%20page-Sfera%20Blu-Why%20Cleafy-Vuota.png');
  background-position: 50% 70%;
  background-size: 130%;
  background-repeat: no-repeat;
  position: relative;
}
.product {
  background-color: #082140;
  background-image: url('https://www.akamas.io/wp-content/uploads/2021/04/shuttle1@2x.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 30% auto;
}
.listcard-container {
  max-width: 60% !important;
}
.text-container {
  width: 40vw;
  padding-top: 20vh;
  position: relative;
  z-index: 1;
}
h2 {
  font-family: 'Montserrat', 'sans-serif';
  color: #5c74a0 !important;
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
.filter {
  filter: brightness(50%) sepia(100%) saturate(100%) invert(100%);
  -webkit-filter: brightness(50%) sepia(100%) saturate(100%) invert(100%);
}
.logo {
  max-width: 300px;
  margin-bottom: 20px;
}
.w3-col {
  text-align: center !important;
}
.location {
  position: absolute;
  bottom: 40px;
  margin-left: 30px;
}
.font-jumbo {
  font-size: 100px;
}
@media (max-width: 600px) {
  .text-container {
    width: 90vw;
    padding-top: 20vh;
  }
  h2 {
    margin-top: 25px;
  }
}
@media (max-width: 1000px) {
  .logo {
    max-width: 200px;
    margin-bottom: 20px;
  }
  .text-container {
    width: 90vw;
  }
  .listcard-container {
    max-width: 90% !important;
  }
}
</style>
