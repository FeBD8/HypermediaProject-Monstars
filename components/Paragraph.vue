<template>
  <!-- Paragraph component composed by a title or a logo image, a subtitle and a description. 
  It is used as the text part inside the listcard and in pages. -->
  <div class="text-container">
    <div class="w3-row">
      <h4 v-if="!logo && title" class="title font-staatliches">
        <span>{{ title }}</span>
      </h4>
      <div v-if="logo" class="logo">
        <img class="filter" :src="logo" :alt="'Logo' + title" />
      </div>
      <h5 v-if="subtitle" class="subtitle">
        <b>{{ subtitle }}</b>
      </h5>
      <p v-if="description" class="description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: () => '' },
    subtitle: { type: String, default: () => '' },
    logo: { type: String, default: () => '' },
    description: { type: String, default: () => '' },
  },
}
</script>

<style scoped>
.title {
  color: var(--title-color, #47546b);
  font-size: 2.2rem;
}
.subtitle {
  color: var(--subtitle-color, #5c74a0);
  font-size: 1.4rem;
}
.description {
  color: var(--description-color, black);
  font-size: 1.1rem;
}
.logo {
  padding-top: 15px;
  padding-bottom: 15px;
}
.logo > img {
  max-width: 250px !important;
  width: auto !important;
}
.text-container {
  position: relative;
}
@media (max-width: 600px) {
  .logo > img {
    max-width: 150px !important;
  }
}
@media (max-width: 1000px) {
  .text-container {
    width: var(--container-responsive-width, 90vw) !important;
  }
  .title {
    width: 100%;
    font-size: 2rem;
  }
  .subtitle {
    width: 100%;
    font-size: 1.5rem;
  }
  .description {
    width: 100%;
  }
}
</style>
