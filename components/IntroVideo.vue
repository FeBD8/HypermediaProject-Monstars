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
    <!-- <p class="w3-xlarge" style="margin: 0">{{ pathName }}</p> -->
    <div v-if="introText">
      <paragraph
        :title="introText.title"
        :subtitle="introText.subtitle"
        :description="introText.description"
        :style="textStyle"
        class="horizontally-centered animation-in"
      ></paragraph>
    </div>
    <div id="scrollIcon" class="scrolldown-icon w3-hide-small">
      <button class="w3-button" @click="scrollToContent()">
        <img src="~/static/icons/arrow.png" alt="Scrolldown icon" />
      </button>
    </div>
  </div>
</template>

<script>
import Paragraph from '~/components/Paragraph.vue'
export default {
  components: {
    Paragraph,
  },
  props: {
    introVideo: { type: Object, default: () => {} },
    introText: { type: Object, default: () => {} },
    introTextStyle: {
      type: Object,
      default: () => {
        return {
          titleWidth: '66.6%',
          titleAlign: 'left',
          subtitleWidth: '66.6%',
          subtitleColor: 'white',
          subtitleSize: '1.2rem',
          subtitlePosition: 'right',
          subtitleAlign: 'left',
        }
      },
    },
  },
  computed: {
    pathName() {
      if (this.$route.name === 'index') {
        return 'HOME'
      }
      return this.$route.name.toUpperCase()
    },
    textStyle() {
      return {
        '--title-width': this.introTextStyle.titleWidth,
        '--title-align': this.introTextStyle.titleAlign,
        '--title-responsive-align': 'center',
        '--subtitle-width': this.introTextStyle.subtitleWidth,
        '--subtitle-position': this.introTextStyle.subtitlePosition,
        '--subtitle-color': this.introTextStyle.subtitleColor,
        '--subtitle-size': this.introTextStyle.subtitleSize,
        '--subtitle-align': this.introTextStyle.titleAlign,
        '--subtitle-responsive-align': 'center',
        '--description-align': 'center',
      }
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
    // This function hide the arrow for scrolling to the content when the text overlaps
    showArrow() {
      const text = document.getElementById('text')
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
.container,
.video-container {
  width: 100%;
  height: 100%;
  position: absolute;
}
video {
  opacity: var(--video-opacity, 1);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.background-overlay {
  background-color: var(--overlay-color, #000000a1);
  position: absolute;
  width: 100%;
  height: 100%;
}
.text-container {
  padding-top: 20vh;
  padding-bottom: 20vh;
  width: 60vw;
  white-space: pre-line;
}
.scrolldown-icon {
  position: absolute;
  bottom: 20px;
  margin-left: -20px;
  left: 50%;
}
@media (max-width: 600px) {
  .text-container {
    width: 90vw;
    padding-top: 15vh;
    padding-bottom: 10vh;
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
