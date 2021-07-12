<template>
  <!-- Logo of the company with the link to the home page -->
  <nuxt-link to="/" @click.native="$scrollToTop()">
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
  max-height: 90px;
}
@media (max-width: 1000px) {
  .logo {
    max-height: 80px !important;
  }
}
</style>
