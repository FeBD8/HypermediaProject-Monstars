<template>
  <div class="w3-padding-16">
    <div
      v-for="(item, itemIndex) in group"
      :key="'item-' + itemIndex"
      class="margin-bottom hide-animate"
    >
      <div :class="{ background: itemIndex % 2 }">
        <list-card
          :num="item.id"
          :title="item.name"
          :subtitle="item.subtitle"
          :logo="item.logo"
          :image="item.image"
          :alt="alt + item.name"
          :description="item.description"
          :button-name="'Go to ' + item.name"
          :button-path="$route.path + '/' + item.id"
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
    group: { type: Array, default: () => [] },
    alt: { type: String, default: () => '' },
  },
  data() {
    return {
      cardStyle: {
        titleColor: '#1b65a6',
        subtitleColor: '#5c74a0',
      },
    }
  },
}
</script>

<style scoped>
.background {
  background-image: linear-gradient(180deg, #f7f8fc 0%, #f0f1f8 100%);
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
