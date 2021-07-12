<template>
  <!-- Component for the introduction video of all the main pages.
  It contains a video, a title, a subtitle and an arrow that bring the user to the main content of the page -->
  <div>
    <div class="video-container w3-animate-opacity">
      <video muted="" autoplay="" playsinline="" loop="" :poster="poster">
        <source :src="video" type="video/mp4" />
        The video cannot be loaded.
      </video>
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
        <div class="w3-col l8 m12 s12 w3-right">
          <p class="w3-large">
            <b>{{ subtitle }}</b>
          </p>
        </div>
      </div>
    </div>
    <div id="scrollIcon" class="scrolldown-icon">
      <button @click="scrollToContent()">
        <img src="~/static/icons/arrow.png" alt="Scrolldown icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: { type: String, default: () => '' },
    poster: { type: String, default: () => '' },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
  },
  computed: {
    pathName() {
      if (this.$route.name === 'index') {
        return 'HOME'
      }
      return this.$route.name.toUpperCase()
    },
  },
  // Add the listener when resize in order to hide the arrow when the text overlaps
  mounted() {
    window.addEventListener('resize', this.showArrow)
    this.showArrow()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.showArrow)
  },
  methods: {
    // This function scroll the page to the main content of the page. There should be one section in the page with id = 'content'
    scrollToContent() {
      const content = document.getElementById('content')
      const header = document.getElementById('topBar')
      if (content !== null) {
        content.style['scroll-margin-top'] =
          header.getBoundingClientRect().height + 'px'
        content.scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
    // This function hide the arrow for scrolling to the content when the text overlaps on small screens
    showArrow() {
      const text = document.getElementById('text')
      const arrow = document.getElementById('scrollIcon')
      if (
        text.getBoundingClientRect().bottom > arrow.getBoundingClientRect().top
      ) {
        arrow.style.visibility = 'hidden'
      } else {
        arrow.style.visibility = 'visible'
      }
    },
  },
}
</script>

<style scoped>
button {
  background-color: transparent;
  border: none;
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
