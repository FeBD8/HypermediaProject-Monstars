<template>
  <div>
    <section>
      <div class="w3-center hide-animate">
        <h1 class="w3-xxxlarge">{{ area.name }}</h1>
      </div>
      <h2 class="w3-xlarge">{{ area.subtitle }}</h2>
      <p>{{ area.description }}</p>
      <br />
    </section>
    <!-- Details Container -->
    <section id="content" class="w3-container">
      <div class="w3-padding-16">
        <div
          v-for="(detail, detailIndex) in area.area_details"
          :key="'detail-' + detailIndex"
          class="w3-row margin-bottom-large hide-animate"
        >
          <list-card
            :num="detail.id"
            :title="detail.title"
            :subtitle="detail.subtitle"
            :image="detail.image"
            :alt="'Abstract image of the ' + detail.name"
            :description="detail.description"
          >
          </list-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $axios, route }) {
    const { id } = route.params
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/areas/${id}`)
    const area = data
    return {
      area,
    }
  },
}
</script>

<style scoped>
.listcard-container {
  max-width: 60% !important;
}
</style>
