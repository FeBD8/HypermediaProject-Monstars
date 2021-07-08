<template>
  <section class="intro">
    <div class="video-container w3-animate-opacity">
      <video muted="" autoplay="" playsinline="" loop="">
        <source :src="src" type="video/mp4" />
      </video>
    </div>
    <div class="background-overlay"></div>
    <div class="text-container center">
      <div class="w3-row hide-animate">
        <div class="w3-col l8 m12 s12">
          <h1>
            <span class="w3-xxxlarge">
              {{ title }}
            </span>
          </h1>
        </div>
        <div class="w3-col l8 m12 s12 w3-right">
          <p class="w3-large">
            <b>{{ subtitle }}</b>
          </p>
        </div>
      </div>
    </div>
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
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
  },
  methods: {
    scrollToContent() {
      const content = document.getElementById('content')
      const header = document.getElementById('topBar')
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
.video-container {
  height: 100%;
  position: absolute;
  width: 100%;
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
  background-color: rgba(0, 0, 0, 0.6);
}
.scrolldown-icon {
  position: absolute;
  bottom: 20px;
  margin-left: -20px;
  left: 50%;
}
.text-container {
  color: white;
  position: relative;
  z-index: 1;
}
.center {
  width: 50vw;
  padding-top: 35vh;
  float: none;
  margin: auto !important;
  display: table;
}
@media (max-width: 600px) {
  section.intro {
    min-height: 60vh;
  }
  .center {
    width: 90vw;
    padding-top: 15vh;
  }
}
@media (max-width: 901px) {
  .center {
    width: 90vw;
  }
  .w3-col {
    text-align: center !important;
  }
  .w3-xxxlarge {
    font-size: 30px !important;
  }
  .w3-large {
    font-size: 15px !important;
  }
}
</style>
