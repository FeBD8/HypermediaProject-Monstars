<template>
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Contact Container -->
    <section id="content" class="w3-container w3-padding-16 w3-center">
      <div class="hide-animate">
        <h2 class="section-title">CONTACTS</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  data() {
    return {
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/careers.mp4',
        poster: 'https://bendingspoons.com/assets/video/careers.jpg',
      },
      introText: {
        title: 'Get in touch with us',
        subtitle:
          "Thank you for your interest in Monstars! Below you can find our offices and all the information you need. Please fill out the form to contact us and don't forget to check the box if you'd like to receive news, articles and insights.",
      },
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
