<template>
  <div class="font-montserrat fontsize-small animation-in">
    <nuxt-link :to="'/' + indexName">
      <span
        ><b>{{ indexName.toUpperCase() }}</b></span
      >
    </nuxt-link>
    <span
      ><i
        ><b> > {{ name.toUpperCase() }}</b></i
      ></span
    >
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
  },
  computed: {
    indexName() {
      const regexp = /\w+/
      return this.$route.path.match(regexp)[0]
    },
  },
}
</script>

<style scoped></style>
