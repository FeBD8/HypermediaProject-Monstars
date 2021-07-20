<template>
  <div>
    <div class="background-color">
      <h1 class="title w3-center animation-in" style="color: white">
        PERSONAL FILE
      </h1>
    </div>
    <div class="background-gradient">
      <location :name="person.name"></location>
      <div class="w3-container person-container horizontally-centered">
        <!-- Person Container -->
        <section class="animation-in">
          <div
            class="
              img-container
              w3-hide-large w3-hide-medium
              horizontally-centered
            "
          >
            <img :src="person.image" alt="Profile image" />
          </div>
          <div class="flex">
            <div class="img-container w3-hide-small">
              <img :src="person.image" alt="Profile image" />
            </div>
            <paragraph
              :title="person.name"
              :subtitle="person.intro"
              :description="person.description"
              :style="textStyle"
            ></paragraph>
          </div>
        </section>
        <!-- Transition Links -->
        <section class="roles-container hide-animate">
          <section-title title="ROLES"></section-title>
          <div class="hide-animate">
            <transition-link
              title="Working Area:"
              :items="person.working_area"
              base-path="/areas/"
            ></transition-link>
            <transition-link
              title="Manager of Area:"
              :items="person.manager_of_area"
              base-path="/areas/"
            ></transition-link>
            <transition-link
              title="Product Manager of:"
              :items="person.product_manager_of"
              base-path="/products/"
            ></transition-link>
            <transition-link
              title="Reference assistant of:"
              :items="person.reference_assistant_of"
              base-path="/products/"
            ></transition-link>
          </div>
        </section>
      </div>
      <back-button class="animation-in"></back-button>
    </div>
  </div>
</template>

<script>
import Location from '~/components/intro/Location.vue'
import TransitionLink from '~/components/navigation/TransitionLink.vue'
import Paragraph from '~/components/Paragraph.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import BackButton from '~/components/navigation/BackButton.vue'
export default {
  components: {
    Location,
    Paragraph,
    SectionTitle,
    TransitionLink,
    BackButton,
  },
  layout: 'default',
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(
      `${process.env.BASE_URL}/api/people/${id}`
    )
    const person = data
    return {
      person,
    }
  },
  computed: {
    textStyle() {
      return {
        '--title-color': '#041a47',
        '--title-size': '2.5rem',
        '--title-responsive600-align': 'center',
        '--title-responsive-size': '2rem',
        '--subtitle-color': '#465d88',
        '--subtitle-size': '1.5rem',
        '--description-size': '1.1rem',
      }
    },
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped>
img {
  padding: 10px 0px;
}
.title {
  margin: 0;
  font-size: 3rem;
  padding-top: 15vh;
  padding-bottom: 2vh;
}
.background-color {
  background-color: #041a47;
  height: fit-content;
}
.horizontally-centered {
  display: inherit;
}
.img-container {
  max-width: 20vw;
  height: min-content;
}
.person-container {
  width: 70vw;
  padding-top: 20px;
}
.location {
  padding-left: 30px;
  padding-top: 30px;
}
.text-container {
  padding-left: 5vw;
  width: 90vw;
}
.roles-container {
  padding-top: 3vh;
}
@media (max-width: 600px) {
  .text-container {
    padding: 0 !important;
  }
  .img-container {
    max-width: 40vw !important;
  }
}
@media (max-width: 1000px) {
  .img-container {
    max-width: 25vw;
  }
  .person-container {
    width: 90vw;
  }
}
</style>
