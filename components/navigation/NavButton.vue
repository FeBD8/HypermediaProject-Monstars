<template>
  <!-- Navigation button for the header and the footer -->
  <nuxt-link class="w3-button" :to="path" @click.native="$scrollToTop()">
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
.nuxt-link-active:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
}
</style>
