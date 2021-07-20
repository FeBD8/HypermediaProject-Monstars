<template>
  <div v-if="items" class="flex">
    <h3>
      {{ title }}
    </h3>
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
          :style="textStyle"
        ></nav-button>
      </div>
    </div>
    <div v-else class="single">
      <nav-button
        :name="items.name"
        :path="basePath + items.id"
        class="font-montserrat link"
        :style="textStyle"
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
    textStyle() {
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
  align-items: center;
  color: #0d2b66;
}
.single {
  margin-left: 1vw;
}
.list {
  margin-left: 1vw;
  display: list-item;
}
.grid {
  display: grid;
}
</style>
