<template>
  <!-- Component of the dropdown content used in the navigation bar for large screen devices.
  It is composed of navcards if the dropdown props is set to true like in the header where the 
  dropdown menu is shown only on hover, otherwise it is composed of navbuttons like in the footer. 
  In the website is used for the specific Areas. -->
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
      <nav-label
        v-else
        :name="item.name"
        :path="path + '/' + item.id"
        class="font-montserrat"
      >
      </nav-label>
    </li>
  </ul>
</template>

<script>
import NavCard from '~/components/navigation/NavCard.vue'
import NavLabel from '~/components/navigation/NavLabel.vue'
export default {
  components: {
    NavCard,
    NavLabel,
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
  padding: 0;
  padding-top: var(--padding-top, 0px);
  font-size: var(--font-size);
  border-bottom: var(--border-bottom, 1px solid #ddd);
}
</style>
