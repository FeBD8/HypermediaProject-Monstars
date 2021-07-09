<template>
  <div>
    <intro-video
      :src="intro.src"
      :title="intro.title"
      :subtitle="intro.subtitle"
    ></intro-video>
    <!-- Team Container -->
    <section id="content" class="w3-container w3-padding-16 w3-center">
      <div class="hide-animate">
        <h1 class="w3-xxxlarge">CONTACTS</h1>
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
        title: '',
        subtitle: '',
        src: '',
      },
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
