<template>
  <footer class="w3-bottom">
    <div class="w3-display-container">
      <section class="w3-bar">
        <the-logo class="logo"></the-logo>
        <div class="w3-bar-item w3-display-left">
          <p class="w3-large">
            © 2021 Monstar S.p.A. Via Schiaffino 11 20158 Milano, Italy
          </p>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import TheLogo from '~/components/TheLogo.vue'
export default {
  components: {
    TheLogo,
  },
}
</script>

<style scoped>
footer {
  font-family: 'Staatliches', cursive;
}
.logo {
  margin-left: 200px;
}
.w3-bar {
  height: 300px !important;
}
.w3-display-container {
  background-color: #1d4a8d !important;
  color: white !important;
}
</style>
