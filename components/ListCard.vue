<template>
  <!-- Component used in a generic description list: it contains a logo or a title if the first is empty, a subtitle, an image and a brief description.
  The number is used in large screen devices to display alternatively the image and the text between different rows -->
  <div class="listcard-container horizontally-centered">
    <div
      v-if="num % 2 !== 0"
      class="vertically-centered w3-padding-large w3-hide-medium w3-hide-small"
    >
      <img :src="image" :alt="alt" />
    </div>
    <div class="vertically-centered w3-padding-large">
      <div>
        <div v-if="logo !== ''" class="logo">
          <img :src="logo" :alt="'Logo' + title" />
        </div>
        <h3 v-if="logo === ''" class="w3-xxlarge">{{ title }}</h3>
        <h4 class="w3-xlarge">{{ subtitle }}</h4>
        <div class="w3-hide-large">
          <img class="horizontally-centered" :src="image" :alt="alt" />
        </div>
        <p>{{ description }}</p>
        <br />
        <nuxt-link v-if="path !== ''" :to="path">
          <button class="w3-button w3-round-xxlarge w3-border">
            <b>Go to {{ title }}</b>
          </button>
        </nuxt-link>
      </div>
    </div>
    <div
      v-if="num % 2 === 0"
      class="vertically-centered w3-padding-large w3-hide-medium w3-hide-small"
    >
      <img :src="image" :alt="alt" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: { type: Number, default: () => 0 },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    logo: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    alt: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
h2 {
  font-family: 'Staatliches', 'cursive' !important;
  color: #47546b;
}
img {
  height: auto !important;
  max-width: 100% !important;
  padding: 32px 32px !important;
}
.logo {
  text-align: left;
  width: 200px;
  margin-bottom: 20px;
}
.logo > img {
  padding: 0 !important;
}
.w3-button {
  white-space: normal !important;
  background-color: #47546b;
  color: white;
  transition: background-color 0.3s ease-out;
}
.w3-button:hover {
  background-color: transparent !important;
  color: #47546b !important;
}
.listcard-container {
  max-width: 70%;
  grid-template-columns: 1fr 1fr;
}
@media (max-width: 1000px) {
  .listcard-container {
    max-width: 90%;
    grid-template-columns: 1fr;
  }
}
</style>
