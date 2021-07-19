<template>
  <nav id="navSmallScreen" class="navbar-small w3-hide-large">
    <ul class="w3-ul">
      <li v-for="(item, itemIndex) of options" :key="'menu-item-' + itemIndex">
        <nav-button
          :name="item.name"
          :path="item.path"
          class="underline-animation"
          @click.native="$closeNav()"
        >
        </nav-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    NavButton,
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
  display: block;
  visibility: var(--bar-visibility, hidden);
  opacity: var(--bar-opacity, 0);
  transition: visibility 0s linear 0.5s, opacity 0.5s linear;
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
.visible {
  visibility: visible !important;
  opacity: 1 !important;
  transition-delay: 0s !important;
}
</style>
