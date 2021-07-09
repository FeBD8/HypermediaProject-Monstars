<template>
  <div>
    <nuxt-link
      class="w3-button w3-padding-32 zoom"
      :to="path"
      style="width: 100%"
    >
      <div>
        <img :src="image" alt="Profile image" />
      </div>
      <div class="text-container">
        <h2 class="w3-xlarge">
          <b class="w3-center">{{ name }} {{ surname }}</b>
        </h2>
        <p>{{ role }}</p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: () => '' },
    surname: { type: String, default: () => '' },
    image: { type: String, default: () => '' },
    role: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.text-container {
  word-wrap: break-word !important;
}
img {
  height: auto !important;
  max-width: 100% !important;
}
.w3-button {
  white-space: normal !important;
}
.w3-button:hover {
  background-color: transparent !important;
}
.zoom {
  transition: transform 0.2s;
}
.zoom:hover {
  -ms-transform: scale(1.1); /* IE 9 */
  -webkit-transform: scale(1.1); /* Safari 3-8 */
  transform: scale(1.1);
}
</style>
