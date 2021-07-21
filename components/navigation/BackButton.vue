<template>
  <!-- Back button. If the user navigates between pages, the back button brings the user to the last 
    visited page, otherwise it brings the user to the topic page -->
  <div>
    <div class="back-button">
      <nuxt-link
        :to="
          $nuxt.context.from === undefined ? basePath : $nuxt.context.from.path
        "
      >
        <button
          class="w3-button w3-round-xxlarge w3-border"
          @click="$closeNav()"
        >
          <b>Back to previous page</b>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    basePath() {
      return '/' + this.$route.path.match(/\w+/)[0]
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
