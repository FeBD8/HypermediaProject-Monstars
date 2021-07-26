<template>
  <!-- Component of the navigation bar on small screen devices. It is composed of navigation buttons displayed properly 
  for devices with small screen. It is used both in the header and in the footer. -->
  <nav id="navSmallScreen" class="navbar-small w3-hide-large">
    <ul class="w3-ul">
      <li v-for="(item, itemIndex) of options" :key="'menu-item-' + itemIndex">
        <nav-label
          :name="item.name"
          :path="item.path"
          class="underline-animation"
          @click.native="$closeNav()"
        >
        </nav-label>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLabel from '~/components/navigation/NavLabel.vue'
export default {
  components: {
    NavLabel,
  },
  props: {
    options: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.navbar-small {
  width: var(--bar-width, 100%);
  color: var(--text-color, #041a47);
  background-color: var(--background-color, white);
  display: none;
  visibility: var(--bar-visibility, hidden);
  opacity: var(--bar-opacity, 0);
  border-bottom: 1px solid var(--border-color, #47546b65) !important;
  border-top: 1px solid var(--border-color, #47546b65) !important;
  position: relative;
  overflow-y: auto;
}
nav {
  font-size: var(--font-size, 1.6rem);
}
ul li {
  padding: 8px 16px !important;
  border-bottom: none !important;
  text-align: center;
}
</style>
