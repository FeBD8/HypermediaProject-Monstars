<template>
  <div>
    <section class="intro">
      <intro-video
        :video="intro.video"
        :poster="intro.poster"
        :title="intro.title"
        :subtitle="intro.subtitle"
      ></intro-video>
    </section>
    <!-- Team Container -->
    <section id="content" class="w3-container w3-padding-16 w3-center">
      <div class="hide-animate">
        <h1 class="w3-xxxlarge">ABOUT US</h1>
      </div>
      <br />
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      intro: {
        title: 'These are the values\nwe believe in',
        subtitle:
          'Monstars is founded on values we all share and are ready to stand for. They bring us together well beyond our current products and technologies. They’ve defined our identity since the beginning, and they’ll continue to do so, no matter how our business evolves.',
        video: 'https://bendingspoons.com/assets/video/home.mp4',
        poster: 'https://bendingspoons.com/assets/video/manifesto.jpg',
      },
    }
  },
  mounted() {
    this.$showComponentsInViewport()
  },
}
</script>

<style scoped></style>
