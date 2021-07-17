<template>
  <div class="w3-padding-16">
    <div
      v-for="(detail, detailIndex) in details"
      :key="'detail-' + detailIndex"
      class="hide-animate"
    >
      <list-card
        :num="detail.id"
        :title="detail.title"
        :subtitle="detail.subtitle"
        :image="detail.image"
        :alt="'Abstract image of the ' + detail.title"
        :description="detail.description"
        :card-style="cardStyle"
      >
      </list-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: { type: Array, default: () => [] },
    cardStyle: { type: Object, default: () => {} },
  },
}
</script>

<style scoped>
.listcard-container {
  width: 60vw;
}
</style>
