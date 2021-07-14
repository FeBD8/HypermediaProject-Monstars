<template>
  <!-- Card for the people page. It contains an image, the full name and the role of the person. -->
  <div>
    <nuxt-link
      class="w3-button w3-padding-32 zoom-animate"
      :to="path"
      style="width: 100%"
    >
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
.text-container {
  word-wrap: break-word !important;
}
</style>
