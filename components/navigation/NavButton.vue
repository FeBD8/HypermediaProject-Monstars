<template>
  <nuxt-link id="nav-button" class="w3-button" :to="path">
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
#nav-button:hover {
  color: white !important;
  background-color: transparent !important;
}
#nav-button::after {
  content: '';
  display: block;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s;
}
#nav-button:hover::after {
  width: 100%;
}
</style>
