<template>
  <!-- Dropdown button with the contents used in the navigation bar 
  In the website is used for the Areas button s-->
  <section class="w3-dropdown-hover">
    <nuxt-link class="w3-button w3-xlarge" :to="path">
      {{ name }}
    </nuxt-link>
    <ul class="w3-dropdown-content w3-ul w3-animate-opacity">
      <li
        v-for="(item, itemIndex) of dropdownContent"
        :key="'item-' + itemIndex"
      >
        <nav-card
          :name="item.name"
          :shortcut-image="item.shortcut_image"
          :path="path + '/' + item.id"
        >
        </nav-card>
      </li>
    </ul>
  </section>
</template>

<script>
import NavCard from '~/components/navigation/NavCard.vue'

export default {
  components: {
    NavCard,
  },
  props: {
    name: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
    dropdownContent: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.w3-dropdown-hover,
.w3-dropdown-hover:hover > .w3-button {
  background-color: transparent !important;
  color: white !important;
}
ul li {
  padding: 0px !important;
}
</style>
