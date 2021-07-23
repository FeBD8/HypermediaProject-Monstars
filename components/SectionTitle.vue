<template>
  <!-- Section title component used to introduce a new section inside the different pages. -->
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
h3 {
  color: var(--title-color, #0d2b66);
}
.section-title {
  font-size: 3rem;
}
@media (max-width: 1000px) {
  .section-title {
    font-size: 2.5rem;
  }
}
</style>
