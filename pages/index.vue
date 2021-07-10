<template>
  <div>
    <intro-video
      :video="intro.video"
      :poster="intro.poster"
      :title="intro.title"
      :subtitle="intro.subtitle"
    ></intro-video>
    <section id="content" class="hide-animate">
      <h1>HOME PAGE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
        tempor incidunt ut labore et ssdolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid
        ex ea commodi consequatur. Duis a ute irure reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <h2>ANOTHER LOREM IPSUM</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
        tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid
        ex ea commodi consequatur. Duis aute irure reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  </div>
</template>

<script>
import IntroVideo from '~/components/IntroVideo.vue'

export default {
  components: {
    IntroVideo,
  },
  layout: 'default',
  data() {
    return {
      intro: {
        title: 'Transforming business\nOne company at a time',
        subtitle:
          'Monstar is a multinational consulting and software group of companies, helping customers harness the power of transformative technologies. We specialize in artificial intelligence and security, but we are exploring new frontiers of technology.',
        video:
          'https://www.moviri.com/wp-content/uploads/2020/12/Video-HP-01120_V1.mp4',
        poster: 'https://bendingspoons.com/assets/video/home.jpg',
      },
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style></style>
