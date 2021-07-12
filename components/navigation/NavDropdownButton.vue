<template>
  <!-- Dropdown button with the contents used in the navigation bar 
  In the website is used for the Areas button s-->
  <ul class="w3-dropdown-content w3-ul w3-animate-opacity">
    <li v-for="(item, itemIndex) of dropdownContent" :key="'item-' + itemIndex">
      <nav-card
        :name="item.name"
        :shortcut-image="item.shortcut_image"
        :path="path + '/' + item.id"
      >
      </nav-card>
    </li>
  </ul>
</template>

<script>
import NavCard from '~/components/navigation/NavCard.vue'
export default {
  components: {
    NavCard,
  },
  props: {
    path: { type: String, default: () => '' },
    dropdownContent: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
ul li {
  padding: 0px !important;
}
</style>
