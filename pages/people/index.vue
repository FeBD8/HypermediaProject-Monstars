<template>
  <div>
    <section class="image"></section>
    <!-- Team Container -->
    <section class="w3-container w3-padding-16 w3-center">
      <div>
        <h1 class="w3-xxxlarge">OUR TEAM</h1>
      </div>
      <br />
      <div class="team-container">
        <div class="w3-table">
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
              class="w3-third"
              :number="person.id"
              :name="person.name"
              :surname="person.surname"
              :image="person.image"
              :role="person.role"
              :path="$route.path + '/' + person.id"
            >
            </person-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PersonCard from '~/components/PersonCard.vue'
export default {
  components: {
    PersonCard,
  },
  layout: 'default',
  // Function used for fetching the data of the areas from the db for the ssr
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const people = data
    return {
      people,
    }
  },
  data() {
    return {
      /* 
      Number of items per row
      If you want to change this property, you must change also the CSS class 
      in order to display the correct number of items per row! */
      peoplePerRow: 3,
    }
  },
  computed: {
    // Counts the number of rows in the table
    rowCount() {
      return Math.ceil(this.people.length / this.peoplePerRow)
    },
  },
}
</script>

<style scoped>
.image {
  background-color: black;
  height: 600px;
  width: 100%;
}
.team-container {
  max-width: 60%;
  float: none;
  margin: auto !important;
  display: table;
}
</style>
