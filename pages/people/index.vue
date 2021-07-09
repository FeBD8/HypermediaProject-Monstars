<template>
  <!-- People page composed by the introduction video and the team container with all the people -->
  <div>
    <intro-video
      :video="intro.video"
      :poster="intro.poster"
      :title="intro.title"
      :subtitle="intro.subtitle"
    ></intro-video>
    <!-- Team Container -->
    <section id="content" class="w3-container">
      <div class="w3-center hide-animate">
        <h1 class="w3-xxxlarge">OUR TALENTS</h1>
      </div>
      <br />
      <div class="team-container w3-padding-16">
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
              class="w3-third hide-animate"
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
  // Function used for fetching the data of the people from the db for the ssr
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.BASE_URL}/api/people`)
    const people = data
    return {
      people,
    }
  },
  data() {
    return {
      intro: {
        title: 'Have you met our team?',
        subtitle:
          'We’d like to introduce you to our family of brilliant, hard-working, lovely weirdos (in a good way!). We dream big dreams and have the guts to go after them. Rumor has it we’re table tennis and foosball pros too, but you’ve got to see it for yourself.',
        video: 'https://bendingspoons.com/assets/video/team.mp4',
        poster: 'https://bendingspoons.com/assets/video/team.jpg',
      },
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
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped>
.team-container {
  max-width: 60%;
  float: none;
  margin: auto !important;
  display: table;
}
</style>
