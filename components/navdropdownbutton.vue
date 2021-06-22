<template>
  <div class="w3-dropdown-hover">
    <nuxt-link class="w3-button" :to="path">
      {{ name }}
    </nuxt-link>
    <div class="w3-dropdown-content w3-animate-opacity">
      <div
        v-for="(item, itemIndex) of dropdowncontent"
        id="dropdown-row"
        :key="'item-' + itemIndex"
        class="w3-cell-row"
      >
        <navcard :name="item.name" :shortcutimage="item.shortcut_image">
        </navcard>
      </div>
    </div>
  </div>
</template>

<script>
import navcard from '~/components/navcard.vue'

export default {
  components: {
    navcard,
  },
  props: {
    name: { type: String, default: () => '' },
    path: { type: String, default: () => '' },
    dropdowncontent: { type: Array, default: () => [] },
  },
}
</script>

<style>
.w3-dropdown-hover {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-dropdown-hover:hover > .w3-button {
  background-color: #1d4a8d !important;
  color: white !important;
}
#dropdown-row:hover {
  color: black !important;
  background-color: #a0bae0 !important;
}
</style>
