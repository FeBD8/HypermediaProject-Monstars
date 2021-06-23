<template>
  <div>
    <the-header></the-header>
    <div class="content">
      <Nuxt />
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
h1,
h2,
h3 {
  font-family: 'Staatliches', cursive;
}
h4,
h5,
h6 {
  font-family: 'Montserrat', sans-serif !important;
}
</style>
