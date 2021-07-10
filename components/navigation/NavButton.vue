<template>
  <nuxt-link id="button" class="w3-button nav-button" :to="path">
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.nav-button:hover {
  color: white !important;
  background-color: transparent !important;
}
.nav-button::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s;
}
.nav-button:hover::after {
  width: 100%;
}
.nuxt-link-active {
  color: rgb(15, 233, 233);
}
.nuxt-link-active:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background: rgb(15, 233, 233);
}
</style>
