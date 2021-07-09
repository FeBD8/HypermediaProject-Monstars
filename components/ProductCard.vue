<template>
  <!-- Component for the product list.
  It contains a logo, a title, a subtitle, an image and a brief description of the product.
  The number is used in large screen devices to display alternatively the image and the text between different rows. -->
  <div :id="'productRow' + num" class="w3-row w3-padding-32">
    <div class="product-container">
      <div v-if="num % 2 !== 0" class="center w3-padding-large">
        <img :src="image" alt="Screenshot product interface" />
      </div>
      <div v-if="num % 2 === 0" class="center w3-padding-large w3-hide-large">
        <img :src="image" alt="Screenshot product interface" />
      </div>
      <div class="center w3-padding-large">
        <div class="text-container">
          <div class="logo">
            <img :src="logo" alt="Product logo" />
          </div>
          <h3 class="w3-xlarge">{{ subtitle }}</h3>
          <p>{{ description }}</p>
          <nuxt-link :to="path"
            ><button class="w3-button w3-round-xxlarge w3-border">
              <b>Go to {{ title }}</b>
            </button>
          </nuxt-link>
        </div>
      </div>
      <div
        v-if="num % 2 === 0"
        class="center w3-padding-large w3-hide-medium w3-hide-small"
      >
        <img :src="image" alt="Screenshot product interface" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: { type: Number, default: () => 0 },
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    logo: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
  // This function change the background color of consecutive rows
  mounted() {
    const productRow = document.getElementById('productRow' + this.num)
    if (this.num % 2 !== 0) {
      productRow.style.backgroundColor = 'rgba(154, 179, 223, 0.1)'
    } else {
      productRow.style.backgroundColor = 'trasparent'
    }
  },
}
</script>

<style scoped>
img {
  height: auto !important;
  max-width: 100% !important;
}
.logo {
  text-align: left;
  width: 200px;
  margin-bottom: 20px;
}
.w3-border {
  border-color: #47546b !important;
}
.w3-button {
  white-space: normal !important;
  background-color: #47546b;
  color: white;
  transition: background-color 0.3s ease-out;
}
.w3-button:hover {
  background-color: transparent !important;
  color: #47546b !important;
}
.product-container {
  max-width: 70%;
  float: none;
  margin: auto !important;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.center {
  align-items: center;
  display: grid;
}
@media (max-width: 901px) {
  .product-container {
    grid-template-columns: 1fr;
  }
}
</style>
