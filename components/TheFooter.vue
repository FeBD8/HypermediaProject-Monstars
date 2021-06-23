<template>
  <!-- The footer of the website -->
  <footer class="w3-bottom w3-bar">
    <div class="w3-margin-left w3-margin-right">
      <section class="w3-third">
        <ul class="w3-ul">
          <li class="w3-center">
            <the-logo></the-logo>
          </li>
          <li class="w3-center">
            <p class="w3-padding-small w3-large">
              ©2021 Monstar S.p.A. Piazza Leonardo da Vinci, 32 Milano, Italy
            </p>
          </li>
        </ul>
      </section>
      <section class="w3-third">
        <ul
          v-for="(elemDropdown, elemDropdownIndex) of elemsWithDropdownContent"
          :key="'item-' + elemDropdownIndex"
          class="w3-ul"
        >
          <li class="w3-center">
            <nuxt-link
              id="link-line"
              :to="elemDropdown.path"
              class="w3-button w3-xlarge"
            >
              {{ elemDropdown.name }}
            </nuxt-link>
          </li>
          <li
            v-for="(contentItem, contentIndex) of elemDropdown.content"
            id="content"
            :key="'content-item-' + contentIndex"
            class="w3-center"
          >
            <nuxt-link
              :to="elemDropdown.path + '/' + contentItem.id"
              class="w3-button w3-medium"
            >
              {{ contentItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </section>
      <section class="w3-third">
        <ul
          v-for="(menuItem, itemIndex) of menuElements"
          :key="'item-' + itemIndex"
          class="w3-ul"
        >
          <li class="w3-center">
            <nuxt-link :to="menuItem.path" class="w3-button w3-xlarge">
              {{ menuItem.name }}
            </nuxt-link>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import TheLogo from '~/components/TheLogo.vue'
export default {
  components: {
    TheLogo,
  },
  props: {
    menuOptions: { type: Array, default: () => [] },
  },
  computed: {
    elemsWithDropdownContent() {
      const elems = []
      this.menuOptions.forEach((item) => {
        if (item.dropdown) elems.push(item)
      })
      return elems
    },
    menuElements() {
      const elems = []
      this.menuOptions.forEach((item) => {
        if (!item.dropdown) elems.push(item)
      })
      return elems
    },
  },
}
</script>

<style scoped>
#content {
  font-family: 'Montserrat', sans-serif !important;
}
.w3-button:hover {
  color: white !important;
  background-color: transparent !important;
}
.w3-bar {
  background-color: #1d4a8d !important;
  color: white !important;
}
.w3-ul li {
  border-bottom: none;
}
#link-line {
  border-bottom: 1px solid rgba(255, 255, 255, 0.438);
}
</style>
