<template>
  <!-- Component of the navigation bar on large screen devices. It is composed of navigation buttons and 
  dropdown menus based on the menuOptions defined inside the default layout. If the dropdown props is true, 
  the content of the dropdown menu is shown only on hover like in the header while if it is false the content is 
  always visible like in the footer. -->
  <nav class="w3-hide-small w3-hide-medium">
    <ul class="w3-bar-item">
      <li
        v-for="(item, itemIndex) of options"
        :key="'item-' + itemIndex"
        :class="{ 'w3-dropdown-hover': dropdown && item.content }"
        class="w3-bar-item"
      >
        <nav-button
          class="underline-animation"
          :name="item.name"
          :path="item.path"
        ></nav-button>
        <div v-if="!dropdown && item.content" class="border-bottom"></div>
        <nav-dropdown
          v-if="item.content"
          :path="item.path"
          :dropdown="dropdown"
          :dropdown-content="item.content"
          :style="dropStyle"
        >
        </nav-dropdown>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavDropdown from '~/components/navigation/NavDropdown.vue'
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    NavDropdown,
    NavButton,
  },
  props: {
    options: { type: Array, default: () => [] },
    dropdown: { type: Boolean, default: () => true },
    dropdownStyle: { type: Object, default: () => Object() },
  },
  computed: {
    // Style of the dropdown content
    dropStyle() {
      return {
        '--border-bottom': this.dropdownStyle.border ?? '',
        '--font-size': this.dropdownStyle.fontSize ?? '',
        '--padding-top': this.dropdownStyle.paddingTop ?? '',
      }
    },
  },
}
</script>

<style scoped>
nav {
  margin-left: auto;
  padding: 0 !important;
  font-size: var(--font-size, 1.6rem);
  color: var(--text-color, #041a47);
}
ul {
  padding: 0 !important;
  margin: 0;
}
li {
  text-align: var(--text-align);
  padding-top: 28px !important;
  padding-bottom: 28px !important;
}
.w3-dropdown-hover,
.w3-dropdown-hover:hover > .w3-button {
  background-color: transparent !important;
  color: inherit !important;
}
.w3-dropdown-hover {
  cursor: auto;
}
</style>
