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

<style></style>
