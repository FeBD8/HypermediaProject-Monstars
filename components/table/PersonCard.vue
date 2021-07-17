<template>
  <!-- Card for the people page. It contains an image, the full name and the role of the person. -->
  <div class="person-card">
    <nuxt-link class="w3-button w3-padding-32 zoom-animate" :to="path">
      <div>
        <img :src="image" alt="Profile image" />
      </div>
      <div class="text-container">
        <h2 class="w3-xlarge font-montserrat">
          <b class="w3-center">{{ name }} {{ surname }}</b>
        </h2>
        <p>{{ role }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    surname: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
h2 {
  padding-top: 10px;
  padding-bottom: 0;
}
.person-card {
  width: var(--card-width, 33.3%);
  float: left;
}
.text-container {
  word-wrap: break-word !important;
}
@media (max-width: 1000px) {
  .person-card {
    width: 100%;
  }
}
@media (min-width: 600px) and (max-width: 1000px) {
  img {
    max-width: 70%;
  }
}
</style>
