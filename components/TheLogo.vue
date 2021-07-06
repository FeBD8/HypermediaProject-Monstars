<template>
  <!-- Logo of the company with the link to the home page -->
  <nuxt-link to="/">
    <img
      src="~/static/icons/logo.png"
      alt="Logo Monstar"
      class="logo w3-padding-16"
    />
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  max-height: 100px;
}
@media (max-width: 900px) {
  .logo {
    max-height: 80px !important;
  }
}
</style>
