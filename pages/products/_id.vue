<template>
  <div class="product">
    <section class="intro">
      <intro-image
        img="https://www.akamas.io/wp-content/uploads/2021/05/homepage-hero@2x.jpg"
        :title="product.name"
        :subtitle="product.subtitle"
        :description="product.description"
      >
      </intro-image>
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
import IntroImage from '~/components/IntroImage.vue'
export default {
  components: {
    IntroImage,
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
}
</script>

<style scoped>
#topBar {
  background-color: white !important;
  color: black !important;
}
.intro {
  min-height: 80vh !important;
}
img {
  height: auto !important;
  width: 100% !important;
}
.product {
  background-color: #08193a;
}
.listcard-container {
  max-width: 60% !important;
}
</style>
