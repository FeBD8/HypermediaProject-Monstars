<template>
  <!-- Component of an item list: it is composed of a series of listcard.
It is used inside the dynamic pages where the items are retrieved from the DB. -->
  <div class="w3-padding-16">
    <div
      v-for="(item, itemIndex) in listItems"
      :key="'item-' + itemIndex"
      class="hide-animate"
      style="margin-bottom: 25px"
    >
      <div :class="{ 'background-alternate': itemIndex % 2 }">
        <list-card
          :num="itemIndex"
          :title="item.name"
          :subtitle="item.subtitle"
          :logo="item.logo"
          :image="item.image"
          :alt="alt + item.name"
          :description="item.description"
          :button-name="'Go to ' + item.name"
          :button-path="button ? $route.path + '/' + item.id : ''"
          :card-style="cardStyle"
        >
        </list-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItems: { type: Array, default: () => [] },
    button: { type: Boolean, default: () => false },
    alt: { type: String, default: () => '' },
    cardStyle: { type: Object, default: () => {} },
  },
}
</script>

<style scoped>
.background-alternate {
  background-color: var(--background-alternate-color, #f7f8fc);
}
.listcard-container {
  max-width: 70vw;
}
@media (max-width: 1000px) {
  .listcard-container {
    max-width: 90vw;
  }
}
</style>
