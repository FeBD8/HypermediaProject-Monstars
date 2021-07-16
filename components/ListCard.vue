<template>
  <!-- Component used in a generic description list: it contains an image, a paragraph and a button.
  The number is used in large screen devices to display alternatively the image and the text between different rows -->
  <div class="listcard-container horizontally-centered">
    <div
      v-if="!(num % 2)"
      class="vertically-centered w3-padding-large w3-hide-medium w3-hide-small"
    >
      <img :src="image" :alt="alt" />
    </div>
    <div class="vertically-centered">
      <div>
        <paragraph
          :title="title"
          :logo="logo"
          :subtitle="subtitle"
          :description="description"
          :style="textStyle"
        ></paragraph>
        <div v-if="path" class="w3-padding-16">
          <nuxt-link :to="path">
            <button
              class="w3-button w3-round-xxlarge w3-border"
              @click="$closeNav()"
            >
              <b>Go to {{ title }}</b>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      v-if="num % 2"
      class="vertically-centered w3-padding-large w3-hide-medium w3-hide-small"
    >
      <img :src="image" :alt="alt" />
    </div>
    <div class="vertically-centered w3-padding-large w3-hide-large">
      <img :src="image" :alt="alt" />
    </div>
  </div>
</template>

<script>
import Paragraph from '~/components/Paragraph.vue'

export default {
  components: { Paragraph },
  props: {
    num: { type: Number, default: () => 0 },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    logo: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    alt: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
    cardStyle: {
      type: Object,
      default: () => {
        return {
          titleColor: 'black',
          subtitleColor: 'black',
          descriptionColor: 'black',
        }
      },
    },
  },
  computed: {
    textStyle() {
      return {
        '--title-color': this.cardStyle.titleColor,
        '--title-size': '2.2rem',
        '--title-responsive-size': '2rem',
        '--subtitle-color': this.cardStyle.subtitleColor,
        '--subtitle-size': '1.4rem',
        '--description-color': this.cardStyle.descriptionColor,
        '--description-size': '1.1rem',
      }
    },
  },
}
</script>

<style scoped>
img {
  padding: 32px 32px !important;
}
.w3-button {
  background-color: #0d2b66 !important;
  color: white !important;
  transition: background-color 0.3s ease-out;
  border-color: #0d2b66 !important;
}
.w3-button:hover {
  background-color: transparent !important;
  color: #0d2b66 !important;
}
.listcard-container {
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 1000px) {
  .listcard-container {
    grid-template-columns: 1fr;
    width: 90vw !important;
  }
}
</style>
