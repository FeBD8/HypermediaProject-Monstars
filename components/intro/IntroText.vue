<template>
  <paragraph
    :title="introText.title"
    :logo="introText.logo"
    :subtitle="introText.subtitle"
    :description="introText.description"
    :style="textStyle"
    class="horizontally-centered animation-in"
  ></paragraph>
</template>

<script>
export default {
  props: {
    introText: { type: Object, default: () => {} },
    introTextStyle: { type: Object, default: () => {} },
  },
  computed: {
    textStyle() {
      return {
        '--title-color': 'white',
        '--title-width': this.introTextStyle.titleWidth ?? '100%',
        '--title-align': this.introTextStyle.titleAlign ?? 'center',
        '--title-responsive-align': 'center',
        '--subtitle-width': this.introTextStyle.subtitleWidth ?? '100%',
        '--subtitle-position': this.introTextStyle.subtitlePosition ?? 'center',
        '--subtitle-color': this.introTextStyle.subtitleColor ?? 'white',
        '--subtitle-size': this.introTextStyle.subtitleSize ?? '1.6rem',
        '--subtitle-align': this.introTextStyle.subtitleAlign ?? 'center',
        '--subtitle-responsive-align': 'center',
        '--subtitle-responsive-size':
          this.introTextStyle.subtitleResponsiveSize ?? '1.5rem',
        '--description-align': 'center',
        '--description-color': 'white',
        '--logo-margin': 'auto',
        '--logo-align': 'center',
        '--logo-filter': 'brightness(50%) sepia(100%) invert(100%)',
      }
    },
  },
}
</script>

<style scoped>
.text-container {
  padding-top: 20vh;
  padding-bottom: 20vh;
  width: 60vw;
  white-space: pre-line;
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
}
</style>
