<template>
  <section class="w3-dropdown-hover">
    <nuxt-link class="w3-button" :to="path">
      {{ name }}
    </nuxt-link>
    <div class="w3-dropdown-content w3-animate-opacity">
      <ul
        v-for="(item, itemIndex) of dropdowncontent"
        id="dropdown-row"
        :key="'item-' + itemIndex"
        class="w3-ul"
      >
        <li>
          <nav-card
            :name="item.name"
            :shortcutimage="item.shortcut_image"
            :path="path + '/' + item.id"
          >
          </nav-card>
        </li>
      </ul>
    </div>
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
.w3-dropdown-content {
  font-family: 'Montserrat', sans-serif;
}
.w3-dropdown-hover {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-dropdown-hover:hover > .w3-button {
  background-color: #1d4a8d !important;
  color: white !important;
}
li:hover {
  color: black !important;
  background-color: #a0bae0 !important;
}
li {
  padding: 0px;
}
</style>
