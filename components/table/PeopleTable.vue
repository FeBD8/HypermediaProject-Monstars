<template>
  <!-- Component for the table of people. It is used inside the people page and it is composed of a series of 
  person cards. It has the props peoplePerRow that is used to specify how many people are shown for each single row. -->
  <div class="team-container w3-padding-16 horizontally-centered">
    <div>
      <!-- In the table it creates 1 new row every time one is compleated and for each row puts inside 
      the number of items specified inside the props peoplePerRow. -->
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
          :style="personCardStyle"
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
    // Style fot the person card
    personCardStyle() {
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
