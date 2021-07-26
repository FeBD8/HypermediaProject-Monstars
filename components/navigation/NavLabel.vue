<template>
  <!-- Navigation label used as landmark for navigation in the header, the footer and for the transition links. -->
  <nuxt-link class="w3-button" :to="path" @click.native="scrollUp()">
    <span class="hover">{{ name }}</span>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
  methods: {
    /* This methods allows to scroll the page up to the top if the user clicks 
    the navbutton of the currently open page. */
    scrollUp() {
      if (this.$route.name === this.name.toLowerCase()) {
        this.$scrollToTop()
      }
    },
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
