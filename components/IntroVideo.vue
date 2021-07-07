<template>
  <section class="intro">
    <div class="video-container w3-animate-opacity">
      <video muted="" autoplay="" playsinline="" loop="">
        <source :src="src" type="video/mp4" />
      </video>
    </div>
    <div class="background-overlay"></div>
    <div class="scrolldown-icon">
      <button @click="scrollToContent()">
        <img src="~/static/icons/arrow.png" alt="Scrolldown icon" />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    src: { type: String, default: () => '' },
  },
  methods: {
    scrollToContent() {
      const content = document.getElementById('content')
      const header = document.getElementById('top-bar')
      content.style['scroll-margin-top'] =
        header.getBoundingClientRect().height + 'px'
      content.scrollIntoView({
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
}
section.intro {
  min-height: 100vh;
  position: relative;
}
@media (max-width: 600px) {
  section.intro {
    min-height: 60vh;
  }
}
.video-container {
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 0;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.background-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.scrolldown-icon {
  position: absolute;
  width: 40px;
  height: 10px;
  bottom: 50px;
  margin-left: -20px;
  left: 50%;
}
</style>
