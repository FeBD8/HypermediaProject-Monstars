<template>
  <!-- Component for the introduction video of all the main pages.
  It contains a video, a title, a subtitle and an arrow that bring the user to the main content of the page -->
  <div>
    <div class="img-container">
      <img :src="img" />
    </div>
    <div class="background-overlay"></div>
    <div id="text" class="text-container horizontally-centered">
      <div class="w3-row animation-in">
        <div class="w3-col l8 m12 s12" style="line-height: normal">
          <p class="w3-xlarge">{{ pathName }}</p>
          <h1>
            <span class="w3-xxxlarge" style="color: white">{{ title }}</span>
          </h1>
        </div>
        <div class="w3-col l8 m12 s12">
          <p class="w3-large">
            <b>{{ subtitle }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
  },
  computed: {
    pathName() {
      return this.$route.name.toUpperCase()
    },
  },
}
</script>

<style scoped>
.img-container {
  height: 100%;
  position: absolute;
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.background-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00000041;
}
.text-container {
  width: 50vw;
  padding-top: 25vh;
  white-space: pre-line;
  color: white;
  position: relative;
  z-index: 1;
}
h1,
p {
  margin-top: 0 !important;
  margin-bottom: 10px;
}
@media (max-width: 600px) {
  .text-container {
    width: 90vw;
    padding-top: 15vh;
  }
}
@media (max-width: 1000px) {
  .text-container {
    width: 90vw;
  }
  .w3-col {
    text-align: center !important;
  }
}
</style>
