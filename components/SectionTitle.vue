<template>
  <div class="w3-center hide-animate">
    <h3 class="section-title">
      <span>{{ title }}</span>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
h2 {
  color: var(--title-color, #0d2b66);
}
</style>
