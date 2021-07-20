<template>
  <!-- Navigation button for the header and the footer -->
  <nuxt-link
    class="w3-button"
    :to="path"
    @click.native="scroll ? $scrollToTop() : null"
  >
    <span class="hover">{{ name }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
    scroll: { type: Boolean, default: () => '' },
  },
}
</script>

<style scoped>
.w3-button {
  margin: 8px 16px;
  padding: 0;
}
.hover:hover {
  color: var(--hover-color);
}
.nuxt-link-active:after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
}
</style>
