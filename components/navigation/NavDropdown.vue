<template>
  <!-- Dropdown button with the contents used in the navigation bar 
  In the website is used for the Areas button s-->
  <ul
    :class="{ 'w3-dropdown-content': dropdown, shadow: dropdown }"
    class="w3-ul w3-animate-opacity"
  >
    <li v-for="(item, itemIndex) of dropdownContent" :key="'item-' + itemIndex">
      <nav-card
        v-if="dropdown"
        :name="item.name"
        :shortcut-image="item.shortcut_image"
        :path="path + '/' + item.id"
      >
      </nav-card>
      <nav-button
        v-else
        :name="item.name"
        :path="path + '/' + item.id"
        class="font-montserrat margin-top"
      >
      </nav-button>
    </li>
  </ul>
</template>

<script>
import NavCard from '~/components/navigation/NavCard.vue'
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    NavCard,
    NavButton,
  },
  props: {
    path: { type: String, default: () => '' },
    dropdown: { type: Boolean, default: () => true },
    dropdownContent: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.w3-dropdown-content {
  top: 100%;
}
ul li {
  padding: 0px !important;
  font-size: var(--font-size);
  border-bottom: var(--border-bottom, 1px solid #ddd);
}
</style>
