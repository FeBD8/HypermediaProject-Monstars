<template>
  <!-- Component of the card for the people page. It contains an image, the full name and the role of the person.
  It is used inside the people table for each person retrieved from the DB. -->
  <div class="person-card">
    <nuxt-link class="w3-button zoom-animate" :to="path" style="width: 100%">
      <div>
        <img :src="image" alt="Profile image" />
      </div>
      <div class="text-container">
        <h2 class="name font-montserrat">
          <b class="w3-center">{{ name }}</b>
        </h2>
        <p class="role">{{ role }}</p>
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
.w3-button {
  padding: 0;
}
.name {
  font-size: 1.6rem;
}
.role {
  font-size: 1.1rem;
}
.person-card {
  width: var(--card-width, 33.3%);
  padding: 30px;
  float: left;
}
.text-container {
  word-wrap: break-word !important;
}
@media (max-width: 1000px) {
  .person-card {
    width: 100%;
  }
}
@media (min-width: 600px) and (max-width: 1000px) {
  img {
    max-width: 70%;
  }
}
</style>
