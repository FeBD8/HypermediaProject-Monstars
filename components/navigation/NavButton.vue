<template>
  <div class="w3-padding-16">
    <nuxt-link :to="buttonPath">
      <button class="w3-button w3-round-xxlarge w3-border" @click="$closeNav()">
        <b>{{ buttonName }}</b>
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    buttonPath: { type: String, default: () => '' },
    buttonName: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.w3-button {
  background-color: #0d2b66 !important;
  color: white !important;
  transition: background-color 0.3s ease-out;
  border-color: #0d2b66 !important;
}
.w3-button:hover {
  background-color: transparent !important;
  color: #0d2b66 !important;
}
</style>
