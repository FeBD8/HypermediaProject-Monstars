<template>
  <div class="team-container w3-padding-16 horizontally-centered">
    <div>
      <!-- In the table it creates 1 row for each triplet of people and for each row puts inside 3 people -->
      <div
        v-for="(i, iIndex) in rowCount"
        :key="'row-' + iIndex"
        class="w3-row"
      >
        <person-card
          v-for="(person, personIndex) in people.slice(
            (i - 1) * peoplePerRow,
            i * peoplePerRow
          )"
          :key="'person-' + personIndex"
          class="hide-animate"
          :name="person.name"
          :surname="person.surname"
          :image="person.image"
          :role="person.role"
          :path="$route.path + '/' + person.id"
          :style="cardStyle"
        >
        </person-card>
      </div>
    </div>
  </div>
</template>

<script>
import PersonCard from '~/components/table/PersonCard.vue'
export default {
  components: {
    PersonCard,
  },
  props: {
    people: { type: Array, default: () => [] },
    // Number of people per row, by default it's 3
    peoplePerRow: { type: Number, default: () => 3 },
  },
  computed: {
    // Counts the number of rows in the table
    rowCount() {
      return Math.ceil(this.people.length / this.peoplePerRow)
    },
    cardStyle() {
      return {
        '--card-width': 100 / this.peoplePerRow + '%',
      }
    },
  },
}
</script>

<style scoped>
.team-container {
  max-width: 60vw;
}
</style>
