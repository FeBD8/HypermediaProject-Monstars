<template>
  <!-- Page of a specific product. The content is dynamically generated and retrieved from the DB. 
  It is composed of an introduction text, the details of the product, a slideshow with the customers
  and the transition links to the related topics. -->
  <div>
    <section class="product-description">
      <div class="background">
        <intro-text
          :logo="product.logo"
          :subtitle="product.subtitle"
          :description="product.description"
          :style="introTextStyle"
        ></intro-text>
        <location :name="product.name" class="location" style="color: white">
        </location>
      </div>
      <!-- Details Container -->
      <div class="w3-container">
        <section-title
          :title="'THE ' + product.name + ' SUITE'"
          :style="{ '--title-color': 'white' }"
        ></section-title>
        <list
          :list-items="product.product_details"
          alt="Abstract image of the "
          :card-style="cardStyle"
          :style="{ '--background-alternate-color': 'trasparent' }"
        ></list>
      </div>
    </section>
    <!-- Customers Container -->
    <section class="w3-padding-32">
      <section-title :title="product.name + ' CUSTOMERS'"></section-title>
      <slideshow :images="product.customers"></slideshow>
    </section>
    <!-- Transition links -->
    <section class="background-gradient hide-animate">
      <div class="links-container horizontally-centered">
        <section-title title="REFERENCE"></section-title>
        <div class="hide-animate">
          <transition-link
            title="Area:"
            :items="product.membership_area"
            base-path="/areas/"
          ></transition-link>
          <transition-link
            title="Product Manager:"
            :items="product.product_manager"
            base-path="/people/"
          ></transition-link>
          <transition-link
            title="Assistance Referent:"
            :items="product.assistance_referent"
            base-path="/people/"
          ></transition-link>
        </div>
      </div>
      <back-button></back-button>
    </section>
  </div>
</template>

<script>
import Location from '~/components/intro/Location.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import Slideshow from '~/components/Slideshow.vue'
import List from '~/components/list/List.vue'
import IntroText from '~/components/intro/IntroText.vue'
import TransitionLink from '~/components/navigation/TransitionLink.vue'
import BackButton from '~/components/navigation/BackButton.vue'
export default {
  components: {
    Location,
    SectionTitle,
    Slideshow,
    List,
    IntroText,
    TransitionLink,
    BackButton,
  },
  layout: 'default',
  // Function used for fetching the data of the specific product from the db for the ssr
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
      // Style of the list card for the detail list
      cardStyle: {
        titleColor: '#1d90eb',
        subtitleColor: '#5c74a0',
        descriptionColor: 'white',
      },
    }
  },
  head: {
    title: 'Product page',
    meta: [
      {
        hid: 'Product page description',
        name: 'Product page description',
        content:
          'Product page of the Monstars ICT company that shows the suite for the specific product, the list of customers, the area and the main people related to the product.',
      },
    ],
  },
  computed: {
    // Style for the introductory text
    introTextStyle() {
      return {
        '--subtitle-color': '#4fff63',
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
  margin-top: -50px;
  margin-left: 30px;
}
#content {
  margin-top: -20px;
}
.links-container,
.listcard-container {
  width: 60vw;
}
.text-container {
  padding-top: 15vh;
  padding-bottom: 20vh;
}
@media (max-width: 600px) {
  .product-description {
    background-size: 50%;
    padding-bottom: 0;
  }
}
@media (max-width: 1000px) {
  .links-container {
    width: 90vw;
  }
}
</style>
