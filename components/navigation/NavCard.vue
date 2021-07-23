<template>
  <!-- Component of the card for the dropdown navigation link, with image and name 
  It is used for the areas and their shortcut image -->
  <div class="w3-display-container">
    <nuxt-link class="w3-button w3-large card-button" :to="path">
      <img :src="shortcutImage" alt="Logo area" />
      {{ name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    shortcutImage: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
img {
  max-width: 30px !important;
  margin-right: 10px !important;
}
.w3-display-container {
  font-family: 'Montserrat', sans-serif !important;
}
.w3-display-container:hover,
.w3-button:hover {
  background-color: #dbe7f8f8 !important;
}
.card-button {
  padding: 15px 20px !important;
  width: 100%;
  text-align: left;
}
</style>
