<template>
  <!-- The footer of the website -->
  <footer class="w3-bottom w3-bar">
    <div class="w3-bar-item center">
      <section class="w3-bar-item">
        <ul class="w3-ul w3-bar-item">
          <li class="w3-center">
            <the-logo></the-logo>
          </li>
          <li class="w3-center">
            <p id="inner" class="w3-padding-small w3-large">
              ©2021 Monstar S.p.A. Piazza Leonardo da Vinci, 32 Milano, Italy
            </p>
          </li>
        </ul>
      </section>
      <nav class="w3-bar-item w3-bar">
        <div class="w3-bar-item margin-right">
          <ul
            v-for="(dropItem, itemIndex) of elemsWithDropdownContent"
            :key="'drop-item-' + itemIndex"
            class="w3-bar-item w3-ul w3-center"
            style="width: 100%"
          >
            <li id="link-line">
              <nav-button
                :name="dropItem.name"
                :path="dropItem.path"
                class="w3-large"
              >
              </nav-button>
            </li>
            <li
              v-for="(contentItem, contentIndex) of dropItem.content"
              id="content"
              :key="'content-item-' + contentIndex"
            >
              <nav-button
                :name="contentItem.name"
                :path="dropItem.path + '/' + contentItem.id"
                class="w3-medium"
              >
              </nav-button>
            </li>
          </ul>
        </div>
        <nav-button
          v-for="(menuItem, itemIndex) of elemsWithoutDropdownContent"
          :key="'menu-item-' + itemIndex"
          class="w3-bar-item w3-large w3-padding-top-32 margin-right"
          :name="menuItem.name"
          :path="menuItem.path"
        >
        </nav-button>
      </nav>
      <section class="w3-bar-item">
        <ul class="w3-bar-item w3-ul w3-padding-top-24">
          <li>
            <p class="w3-large w3-center">Follow Us</p>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <img src="~/static/icons/facebook.png" class="w3-padding-small"
            /></a>
            <a href="https://www.instagram.com/">
              <img
                src="~/static/icons/instagram.png"
                class="w3-padding-small"
              />
            </a>
            <a href="https://www.twitter.com/">
              <img src="~/static/icons/twitter.png" class="w3-padding-small" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="~/static/icons/linkedin.png" class="w3-padding-small" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import TheLogo from '~/components/TheLogo.vue'
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    TheLogo,
    NavButton,
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
    elemsWithoutDropdownContent() {
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
.margin-right {
  margin-right: 50px !important;
}
.center {
  float: none;
  margin: auto !important;
  display: table;
}
#nav-button::after {
  transition: none;
}
#nav-button:hover::after {
  width: 0;
}
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
