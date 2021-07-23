<template>
  <!-- Component that computes the current location of the user starting from the URL. 
  When it is used into dynamic pages, it has an attribute name in order to specify the 
  actual name of the dynamic content of the page. -->
  <div class="location font-montserrat animation-in" style="font-size: 1.2rem">
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
    // Methods that separates the various part of the URL in order to show them separately with their links
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
    /* If the URL is composed only of one field, it means that it is one of the main pages so there is no need for the link 
    but only for the current location. / is transformed into HOME */
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

<style scoped></style>
