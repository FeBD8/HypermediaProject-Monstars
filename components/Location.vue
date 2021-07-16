<template>
  <div class="location font-montserrat fontsize animation-in">
    <nuxt-link :to="'/' + indexName" @click.native="$closeNav()">
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

<style scoped>
.location {
  width: 100%;
  margin-left: 30px;
  z-index: 2;
}
.fontsize {
  font-size: 1.2rem;
}
</style>
