<template>
  <div class="main-page">
    <the-header></the-header>
    <div class="content">
      <Nuxt />
    </div>
    <div class="footer">
      © 2021 Monstar S.p.A.
      Via Schiaffino 11  
      20158 Milano, Italy
    </div>
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";

export default {
  components: {
    TheHeader,
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
