<template>
  <div class="location font-montserrat fontsize animation-in">
    <span v-for="(index, indexItem) in indexes" :key="'index-' + indexItem">
      <nuxt-link :to="'/' + index" @click.native="$closeNav()">
        <span>
          <b>{{ index.toUpperCase() }}</b>
        </span>
      </nuxt-link>
      <span><b> > </b></span>
    </span>
    <span>
      <i>
        <b>{{ pageName.toUpperCase() }}</b>
      </i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
  },
  data() {
    return {
      pageName: this.name,
    }
  },
  computed: {
    indexes() {
      if (this.$route.path.split(/\//).length > 2) {
        return this.$route.path
          .split(/\//)
          .filter((string) => string.match(/[^0-9]/))
      } else {
        return ''
      }
    },
  },
  mounted() {
    if (this.$route.path.split(/\//).length <= 2) {
      if (this.$route.name === 'index') {
        this.pageName = 'HOME'
      } else {
        this.pageName = this.$route.name
      }
    }
  },
}
</script>

<style scoped>
.fontsize {
  font-size: 1.2rem;
}
</style>
