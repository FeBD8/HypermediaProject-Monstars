<template>
  <!-- Logo of the company with the link to the home page -->
  <nuxt-link
    to="/"
    @click.native="$route.name === 'index' ? $scrollToTop() : null"
  >
    <img src="~/static/icons/logo.png" alt="Logo Monstar" class="logo" />
  </nuxt-link>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  max-height: 60px;
  margin: 16px;
  width: auto;
}
@media (max-width: 1000px) {
  .logo {
    max-height: 50px !important;
  }
}
</style>
