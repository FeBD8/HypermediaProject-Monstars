<template>
  <div>
    <div class="product-description">
      <section class="background">
        <paragraph
          :logo="product.logo"
          :subtitle="product.subtitle"
          :description="product.description"
          :style="introTextStyle"
          class="horizontally-centered animation-in"
        ></paragraph>
        <location :name="product.name" class="location" style="color: white">
        </location>
      </section>
      <!-- Details Container -->
      <section id="content" class="w3-container">
        <section-title
          :title="'THE ' + product.name + ' SUITE'"
          :style="{ '--title-color': 'white' }"
        ></section-title>
        <detail-list
          :details="product.product_details"
          :card-style="cardStyle"
        ></detail-list>
      </section>
    </div>
    <section class="w3-padding-32">
      <section-title :title="product.name + ' CUSTOMERS'"></section-title>
      <slideshow :images="product.customers"></slideshow>
    </section>
  </div>
</template>

<script>
import Paragraph from '~/components/Paragraph.vue'
import Location from '~/components/Location.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import Slideshow from '~/components/Slideshow.vue'
import DetailList from '~/components/list/DetailList.vue'
export default {
  components: {
    Paragraph,
    Location,
    SectionTitle,
    Slideshow,
    DetailList,
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
        descriptionColor: 'white',
      },
    }
  },
  computed: {
    introTextStyle() {
      return {
        '--title-color': 'white',
        '--title-responsive-align': 'center',
        '--subtitle-color': '#4fff63',
        '--subtitle-align': 'center',
        '--subtitle-responsive-align': 'center',
        '--description-color': 'white',
        '--description-align': 'center',
        '--logo-margin': 'auto',
        '--logo-align': 'center',
        '--logo-filter': 'brightness(50%) sepia(100%) invert(100%)',
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
  position: absolute;
  margin-top: -70px;
}
#content {
  margin-top: -20px;
}
.listcard-container {
  width: 60vw;
}
.text-container {
  padding-top: 15vh;
  padding-bottom: 20vh;
  width: 50vw;
}
@media (max-width: 600px) {
  .product-description {
    background-size: 50%;
    padding-bottom: 0;
  }
}
</style>
