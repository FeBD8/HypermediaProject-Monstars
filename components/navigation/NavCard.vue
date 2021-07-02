<template>
  <!-- Card for the dropdown navigation link, with image and name 
  It is used in for the areas and their shortcut image -->
  <div class="w3-display-container">
    <nuxt-link
      class="w3-button w3-padding-large w3-large"
      :to="path"
      style="width: 100%; text-align: left"
    >
      <img :src="shortcutImage" style="margin-right: 10px" alt="Logo area" />
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
  align-items: center;
}
.w3-display-container {
  font-family: 'Montserrat', sans-serif !important;
  background-color: white !important;
  color: black !important;
}
.w3-display-container:hover,
.w3-button:hover {
  background-color: #a0bae0 !important;
}
.w3-padding-large {
  padding: 15px 20px !important;
}
</style>
