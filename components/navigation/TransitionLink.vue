<template>
  <!-- Component for the transition links between dynamic pages. It is composed of a title and a single navbutton 
  if the specific topic is associated with a hasOne relationship or a list of navbuttons if the specific topic
  is associated with a hasMany relationship inside the DB. -->
  <div v-if="items" class="flex">
    <div>
      <h3>
        <span>{{ title }}</span>
      </h3>
    </div>
    <div v-if="Array.isArray(items)" class="grid">
      <div
        v-for="(elem, elemIndex) in items"
        :key="'item-' + elemIndex"
        class="list"
      >
        <nav-button
          :name="elem.name"
          :path="basePath + elem.id"
          class="font-montserrat link"
          :style="linkStyle"
        ></nav-button>
      </div>
    </div>
    <div v-else class="single">
      <nav-button
        :name="items.name"
        :path="basePath + items.id"
        class="font-montserrat link"
        :style="linkStyle"
      ></nav-button>
    </div>
  </div>
</template>

<script>
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    NavButton,
  },
  props: {
    title: { type: String, default: () => '' },
    items: { type: [Object, Array], default: () => [Object(), []] },
    basePath: { type: String, default: () => '' },
  },
  computed: {
    // Style for the link in the navbutton
    linkStyle() {
      return {
        '--hover-color': '#335db1',
      }
    },
  },
}
</script>

<style scoped>
h3 {
  height: min-content;
}
.flex {
  padding-bottom: 32px;
  color: #0d2b66;
}
.single {
  margin-left: 1vw;
  font-size: 1rem;
}
.list {
  margin-left: 3vw;
  display: list-item;
}
.grid {
  align-items: center;
}
.link {
  font-size: 1.5rem;
  text-decoration: underline;
}
@media (max-width: 600px) {
  .flex {
    display: block !important;
  }
}
@media (max-width: 1000px) {
  .list {
    margin-left: 7vw !important;
  }
}
</style>
