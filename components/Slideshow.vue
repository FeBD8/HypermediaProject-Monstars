<template>
  <!-- Slideshow component used inside the products in order to show the customers. 
  It automatically changes its content after a timeout is fired. -->
  <div class="slideshow-container hide-animate">
    <!-- Images are divided in group of itemPerDiv (=4) and they are switched automatically after a timer is fired -->
    <div
      v-for="(i, iIndex) in divCount"
      :key="'div-' + iIndex"
      class="slide w3-animate-opacity"
    >
      <img
        v-for="(img, imgIndex) in images.slice(
          (i - 1) * itemsPerDiv,
          i * itemsPerDiv
        )"
        :key="'img-' + imgIndex"
        :src="images[i + imgIndex].image"
        :style="'width: ' + (1 / itemsPerDiv) * 100 + '%'"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: { type: Array, default: () => [] },
  },
  data() {
    return {
      // Number of images per each div
      itemsPerDiv: 4,
      slideIndex: 0,
      timeout: '',
    }
  },
  computed: {
    // Counts the number of divs in the slideshow
    divCount() {
      return Math.ceil(this.images.length / this.itemsPerDiv)
    },
  },
  mounted() {
    this.automaticShow()
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    // This method allows to show automatically the images in the slideshow
    automaticShow() {
      let i
      const slides = document.getElementsByClassName('slide')
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      this.slideIndex++
      if (this.slideIndex > slides.length) {
        this.slideIndex = 1
      }
      slides[this.slideIndex - 1].style.display = 'block'
      this.timeout = setTimeout(this.automaticShow, 7000)
    },
  },
}
</script>

<style scoped>
.slideshow-container {
  max-width: 800px;
  position: relative;
  margin: auto;
}
img {
  padding-right: 30px;
  padding-left: 30px;
}
.slide {
  display: none;
}
@media (max-width: 600px) {
  img {
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
