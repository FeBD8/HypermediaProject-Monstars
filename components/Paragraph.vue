<template>
  <!-- Paragraph component composed by a title or a logo image, a subtitle and a description -->
  <div class="text-container">
    <div class="w3-row">
      <h1 v-if="!logo" class="title">
        <span>{{ title }}</span>
      </h1>
      <div v-else class="logo">
        <img class="filter" :src="logo" :alt="'Logo' + title" />
      </div>
      <h2 v-if="subtitle" class="font-montserrat subtitle">
        <b>{{ subtitle }}</b>
      </h2>
      <p v-if="description" class="description">{{ description }}</p>
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
  color: var(--title-color, black);
  width: var(--title-width);
  float: var(--title-position);
  text-align: var(--title-align);
  font-size: var(--title-size, 3.2rem);
}
.subtitle {
  color: var(--subtitle-color, black);
  width: var(--subtitle-width);
  float: var(--subtitle-position);
  text-align: var(--subtitle-align);
  font-size: var(--subtitle-size, 1.6rem);
}
.description {
  color: var(--description-color, black);
  width: var(--description-width);
  float: var(--description-position);
  text-align: var(--description-align);
  font-size: var(--description-size, 1.2rem);
}
.logo {
  margin: var(--logo-margin);
  text-align: var(--logo-align);
  padding-top: 15px;
  padding-bottom: 15px;
}
.logo > img {
  max-width: 250px !important;
  width: auto !important;
}
.filter {
  filter: var(--logo-filter);
  -webkit-filter: var(--logo-filter);
}
.text-container {
  position: relative;
}
@media (max-width: 600px) {
  .title {
    text-align: var(--title-responsive600-align) !important;
  }
}
@media (max-width: 1000px) {
  .text-container {
    width: 90vw !important;
  }
  .title {
    width: 100%;
    text-align: var(--title-responsive-align);
    font-size: var(--title-responsive-size, 2.3rem);
  }
  .subtitle {
    width: 100%;
    text-align: var(--subtitle-responsive-align);
    font-size: var(--subtitle-responsive-size, 1.5rem);
  }
  .description {
    width: 100%;
  }
}
</style>
