<template>
  <!-- Component for the introduction video of all the main pages.
  It contains a video, a title, a subtitle and an arrow that bring the user to the main content of the page -->
  <div class="container">
    <div class="video-container w3-animate-opacity">
      <video muted="" autoplay="" loop="" :poster="introVideo.poster">
        <source :src="introVideo.src" type="video/mp4" />
        The video cannot be loaded.
      </video>
    </div>
    <div class="background-overlay"></div>
    <location class="horizontally-centered" style="color: white"></location>
    <intro-text
      v-if="introText"
      :intro-text="introText"
      :intro-text-style="textStyle"
    ></intro-text>
    <div id="scrollIcon" class="scrolldown-icon w3-hide-small">
      <button class="w3-button" @click="scrollToContent()">
        <img src="~/static/icons/arrow.png" alt="Scrolldown icon" />
      </button>
    </div>
  </div>
</template>

<script>
import IntroText from '~/components/intro/IntroText.vue'
import Location from '~/components/intro/Location.vue'
export default {
  components: {
    IntroText,
    Location,
  },
  props: {
    introVideo: { type: Object, default: () => {} },
    introText: { type: Object, default: () => {} },
  },
  data() {
    return {
      textStyle: {
        titleWidth: '66.6%',
        titleAlign: 'left',
        subtitleWidth: '66.6%',
        subtitleColor: 'white',
        subtitleSize: '1.2rem',
        subtitleResponsiveSize: '1.2rem',
        subtitlePosition: 'right',
        subtitleAlign: 'left',
      },
    }
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
    // This function hide the arrow for scrolling to the content when the text overlaps
    showArrow() {
      const text = document.getElementById('text-container')
      const arrow = document.getElementById('scrollIcon')
      if (text !== null && arrow !== null) {
        if (
          text.getBoundingClientRect().bottom >
          arrow.getBoundingClientRect().top
        ) {
          arrow.style.visibility = 'hidden'
        } else {
          arrow.style.visibility = 'visible'
        }
      }
    },
  },
}
</script>

<style scoped>
.location {
  position: relative;
  width: 60vw;
  padding-top: 20vh;
  margin-bottom: -20vh;
}
.container,
.video-container {
  width: 100%;
  height: 100%;
  position: absolute;
}
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.w3-button {
  padding: 0;
}
.scrolldown-icon {
  position: absolute;
  bottom: 20px;
  margin-left: -20px;
  left: 50%;
}
@media (max-width: 600px) {
  .location {
    width: 90vw;
    padding-top: 15vh;
    margin-bottom: -15vh;
  }
}
@media (max-width: 1000px) {
  .location {
    width: 90vw;
    text-align: center;
  }
}
</style>
