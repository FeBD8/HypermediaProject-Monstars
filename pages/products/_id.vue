<template>
  <div>
    <div class="product-description">
      <section class="background">
        <paragraph
          :logo="product.logo"
          :subtitle="product.subtitle"
          :description="product.description"
          :style="introTextStyle"
          class="horizontally-centered"
        ></paragraph>
        <location :name="product.name" class="location" style="color: white">
        </location>
      </section>
      <!-- Details Container -->
      <section id="content" class="w3-container">
        <div class="w3-padding-16">
          <div
            v-for="(detail, detailIndex) in product.product_details"
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
    <section class="w3-padding-32 hide-animate">
      <div class="w3-center">
        <h2 class="w3-xxxlarge">{{ product.name }} CUSTOMERS</h2>
      </div>
      <slideshow :images="product.customers"></slideshow>
    </section>
  </div>
</template>

<script>
import Paragraph from '~/components/Paragraph.vue'
import Location from '~/components/Location.vue'
import Slideshow from '~/components/Slideshow.vue'
export default {
  components: {
    Paragraph,
    Location,
    Slideshow,
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
  data() {
    return {
      cardStyle: {
        titleColor: '#1d90eb',
        subtitleColor: '#5c74a0',
      },
    }
  },
  computed: {
    introTextStyle() {
      return {
        '--subtitle-color': '#4fff63',
        '--subtitle-align': 'center',
        '--description-align': 'center',
        '--logo-margin': 'auto',
        '--logo-align': 'center',
        '--logo-filter': 'brightness(50%) sepia(100%) invert(100%)',
      }
    },
  },
  mounted() {
    this.$showComponentsInViewport()
  },
}
</script>

<style scoped>
.background {
  background-image: url('https://uploads-ssl.webflow.com/6020129a813fe0c8f1e8053e/605367dda8d43f98d78b77ec_Home%20page-Sfera%20Blu-Why%20Cleafy-Vuota.png');
  background-position: 50% 65%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}
.product-description {
  background-color: #082140;
  background-image: url('https://www.akamas.io/wp-content/uploads/2021/04/shuttle1@2x.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 30%;
  padding-bottom: 100px;
}
.location {
  bottom: 10vh;
}
.listcard-container {
  width: 60vw;
}
.text-container {
  padding-top: 15vh;
  padding-bottom: 30vh;
  width: 50vw;
}
@media (max-width: 600px) {
  .product-description {
    background-size: 50%;
    padding-bottom: 0;
  }
}
</style>
