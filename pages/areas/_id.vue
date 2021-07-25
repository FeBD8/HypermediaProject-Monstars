<template>
  <!-- Page of a specific area. The content is dynamically generated and retrieved from the DB. 
  It is composed of an introduction text, the details of the area and the transition links to 
  the related topics. -->
  <div>
    <section class="area-description">
      <!-- Introduction of the page. -->
      <div class="background">
        <intro-text
          :title="area.name"
          :subtitle="area.subtitle"
          :description="area.description"
          :style="introTextStyle"
        ></intro-text>
      </div>
      <location :name="area.name"></location>
      <!-- Details Container -->
      <div class="w3-container w3-padding-top-24">
        <section-title :title="area.name + ' SOLUTIONS'"></section-title>
        <list
          :list-items="area.area_details"
          alt="Abstract image of the "
          :style="{ '--background-alternate-color': 'trasparent' }"
        ></list>
      </div>
    </section>
    <!-- Transition links -->
    <section class="background-gradient hide-animate">
      <div class="links-container horizontally-centered">
        <section-title title="REFERENCE"></section-title>
        <div class="hide-animate">
          <transition-link
            title="Area Manager:"
            :items="area.manager"
            base-path="/people/"
          ></transition-link>
          <transition-link
            title="Employees:"
            :items="area.employees"
            base-path="/people/"
          ></transition-link>
          <transition-link
            title="Products:"
            :items="area.products"
            base-path="/products/"
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
import List from '~/components/list/List.vue'
import IntroText from '~/components/intro/IntroText.vue'
import TransitionLink from '~/components/navigation/TransitionLink.vue'
import BackButton from '~/components/navigation/BackButton.vue'
export default {
  components: {
    Location,
    IntroText,
    SectionTitle,
    List,
    TransitionLink,
    BackButton,
  },
  layout: 'default',
  // Function used for fetching the data of the specific area from the db for the ssr
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas/${id}`)
    const area = data
    return {
      area,
    }
  },
  head: {
    title: 'Area page',
    meta: [
      {
        hid: 'Area page description',
        name: 'Area page description',
        content:
          'Area page of the Monstars ICT company that shows the solutions for the specific area, the list of emplyees and products related to that area.',
      },
    ],
  },
  computed: {
    // Style of the introduction text
    introTextStyle() {
      return {
        '--subtitle-color': '#1d90eb',
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
.links-container {
  width: 60vw;
}
.location {
  margin-left: 30px;
  margin-top: 30px;
}
.text-container {
  padding-top: 15vh;
  padding-bottom: 10vh;
}
@media (max-width: 1000px) {
  .links-container {
    width: 90vw;
  }
}
</style>
