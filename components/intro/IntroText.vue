<template>
  <!-- Component used for the introductory text in the various pages. It is composed of a title or a logo, 
  a subtitle and a description. -->
  <div class="text-container horizontally-centered animation-in">
    <div class="w3-row">
      <!-- If there is a logo, show the logo, otherwise show the title. -->
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
.text-container {
  position: relative;
  padding-top: 20vh;
  padding-bottom: 20vh;
  width: 60vw;
  white-space: pre-line;
}
.title {
  color: white;
  width: var(--title-width, 100%);
  float: var(--title-position);
  text-align: var(--title-align, center);
  font-size: var(--title-size, 3.2rem);
}
.subtitle {
  color: var(--subtitle-color, white);
  width: var(--subtitle-width, 100%);
  float: var(--subtitle-position, center);
  text-align: var(--subtitle-align, center);
  font-size: var(--subtitle-size, 1.6rem);
}
.description {
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}
.logo {
  margin: auto;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.logo > img {
  max-width: 250px !important;
  width: auto !important;
}
.filter {
  filter: brightness(50%) sepia(100%) invert(100%);
  -webkit-filter: brightness(50%) sepia(100%) invert(100%);
}
@media (max-width: 600px) {
  .text-container {
    padding-top: 15vh;
    padding-bottom: 10vh;
  }
  .logo > img {
    max-width: 150px !important;
  }
}
@media (max-width: 1000px) {
  .text-container {
    width: 90vw;
  }
  .title {
    width: 100%;
    text-align: center;
    font-size: var(--title-responsive-size, 2.3rem);
  }
  .subtitle {
    width: 100%;
    text-align: center;
    font-size: var(--subtitle-responsive-size, 1.5rem);
  }
  .description {
    width: 100%;
  }
}
</style>
