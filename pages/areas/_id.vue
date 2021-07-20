<template>
  <div>
    <section class="area-description">
      <div class="background">
        <intro-text
          :intro-text="introText"
          :intro-text-style="introTextStyle"
        ></intro-text>
      </div>
      <location :name="area.name"></location>
      <!-- Details Container -->
      <div class="w3-container">
        <section-title :title="area.name + ' SOLUTIONS'"></section-title>
        <detail-list
          :details="area.area_details"
          :card-style="cardStyle"
        ></detail-list>
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
import DetailList from '~/components/list/DetailList.vue'
import IntroText from '~/components/intro/IntroText.vue'
import TransitionLink from '~/components/navigation/TransitionLink.vue'
import BackButton from '~/components/navigation/BackButton.vue'
export default {
  components: {
    Location,
    IntroText,
    SectionTitle,
    DetailList,
    TransitionLink,
    BackButton,
  },
  layout: 'default',
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas/${id}`)
    const area = data
    return {
      introText: {
        title: area.name,
        subtitle: area.subtitle,
        description: area.description,
      },
      area,
    }
  },
  data() {
    return {
      cardStyle: {
        titleColor: '#1b65a6',
        subtitleColor: '#5c74a0',
      },
      introTextStyle: {
        subtitleColor: '#1d90eb',
      },
    }
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
  width: 50vw;
}
@media (max-width: 1000px) {
  .links-container {
    width: 90vw;
  }
}
</style>
