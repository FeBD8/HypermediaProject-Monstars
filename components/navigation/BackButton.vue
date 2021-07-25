<template>
  <!-- Component for the back button. It is used inside kind of topic pages and it
  brings the user back to the group page -->
  <div>
    <div class="back-button">
      <nuxt-link
        :to="'/' + basePath"
      >
        <button
          class="w3-button w3-round-xxlarge w3-border"
          @click="$closeNav()"
        >
          <b>Back to {{ basePath }}</b>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
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
  padding: 5vh 5vw;
}
.w3-button {
  background-color: #0d2b66 !important;
  color: white !important;
  transition: background-color 0.3s ease-out;
  border-color: #0d2b66 !important;
}
.w3-button:hover {
  background-color: transparent !important;
  color: #0d2b66 !important;
}
</style>
