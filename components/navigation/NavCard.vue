<template>
  <!-- Card for the Areas navigation link, with image and name of the area -->
  <div class="w3-display-container" style="width: 100%">
    <nuxt-link
      class="w3-medium w3-button"
      :to="path"
      style="width: 100%; text-align: left"
    >
      <img :src="shortcutimage" style="margin-right: 10px" />
      {{ name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    shortcutimage: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
img {
  max-width: 30px !important;
  align-items: center;
}
.w3-display-container {
  background-color: white !important;
  color: black !important;
}
.w3-button:hover {
  background-color: #a0bae0 !important;
}
</style>
