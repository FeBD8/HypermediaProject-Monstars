<template>
  <!-- All people page composed by the introduction video and the team container with all the people -->
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Team Container -->
    <section id="content" class="w3-container">
      <section-title title="OUR TEAM"></section-title>
      <people-table :people="people"></people-table>
    </section>
  </div>
</template>

<script>
import PeopleTable from '~/components/table/PeopleTable.vue'
import SectionTitle from '~/components/SectionTitle.vue'
export default {
  components: {
    PeopleTable,
    SectionTitle,
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
    // Data used for the introduction of the page: the video and the intro text
    return {
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/team.mp4',
        poster: 'https://bendingspoons.com/assets/video/team.jpg',
      },
      introText: {
        title: 'Have you met our team?',
        subtitle:
          'We’d like to introduce you to our family of brilliant, hard-working, lovely weirdos (in a good way!). We dream big dreams and have the guts to go after them. Rumor has it we’re table tennis and foosball pros too, but you’ve got to see it for yourself.',
      },
    }
  },
  // Meta tag used by the SEO that improve the visibility of the website
  head: {
    title: 'People page',
    meta: [
      {
        hid: 'People page description',
        name: 'People page description',
        content:
          'People page of the Monstars ICT company that shows all the people that works in it.',
      },
    ],
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped></style>
