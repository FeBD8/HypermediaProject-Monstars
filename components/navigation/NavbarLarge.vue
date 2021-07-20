<template>
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
          :scroll="true"
        ></nav-button>
        <div v-if="!dropdown && item.content" class="border-bottom"></div>
        <nav-dropdown
          v-if="item.content"
          :path="item.path"
          :dropdown="dropdown"
          :dropdown-content="item.content"
          :style="style"
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
    style() {
      return {
        '--border-bottom': this.dropdownStyle.border ?? '',
        '--font-size': this.dropdownStyle.fontSize ?? '',
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
