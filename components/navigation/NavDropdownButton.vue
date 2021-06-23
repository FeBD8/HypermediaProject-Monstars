<template>
  <!-- Dropdown button with the contents used in the navigation bar 
  In the website is used for the Areas button s-->
  <section class="w3-dropdown-hover">
    <nuxt-link class="w3-button" :to="path">
      <h3>{{ name }}</h3>
    </nuxt-link>
    <ul class="w3-dropdown-content w3-ul w3-animate-opacity">
      <li
        v-for="(item, itemIndex) of dropdowncontent"
        :key="'item-' + itemIndex"
      >
        <nav-card
          :name="item.name"
          :shortcutimage="item.shortcut_image"
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
    dropdowncontent: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.w3-dropdown-hover {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-dropdown-hover:hover > .w3-button {
  background-color: #1d4a8d !important;
  color: white !important;
}
ul li {
  padding: 0px !important;
}
</style>
