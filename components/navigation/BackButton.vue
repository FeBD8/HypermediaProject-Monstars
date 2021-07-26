<template>
  <!-- Component for the back button. It is used inside kind of topic pages and it
  brings the user back to the group page -->
  <div>
    <nav-button
      class="back-button"
      :button-name="'Back to ' + basePath"
      :button-path="'/' + basePath"
    ></nav-button>
  </div>
</template>

<script>
import NavButton from './NavButton.vue'
export default {
  components: { NavButton },
  computed: {
    // This methods computes the base path from the url
    basePath() {
      return this.$route.path.match(/\w+/)[0]
    },
  },
}
</script>

<style scoped>
.back-button {
  padding: 5vh 5vw !important;
}
</style>
