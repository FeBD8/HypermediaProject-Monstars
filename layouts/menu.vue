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
.footer {
  height: 30px;
  background: green;
  color: white;
  font-size: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%; /* Full width */
  font-size: 15px;
}
</style>
