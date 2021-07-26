<template>
  <!-- Home page composed of the introduction video, the preview of the areas and the products. -->
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <section id="content" class="hide-animate">
      <section>
        <div class="areas-container horizontally-centered">
          <h4 class="title">
            <span>The Areas</span>
          </h4>
          <div class="w3-row">
            <div
              v-for="(area, areaIndex) in areas.slice(0, maxAreaToShow)"
              :key="'area-' + areaIndex"
              :style="'width:' + 100 / maxAreaToShow + '%'"
              class="card"
            >
              <div class="shadow-blue w3-round-xlarge" style="height: 100%">
                <div class="padding" style="padding-bottom: 0 !important">
                  <img class="shortcut-area" :src="area.shortcut_image" />
                </div>
                <paragraph
                  :subtitle="area.name"
                  :description="area.subtitle"
                  class="padding"
                  style="padding-top: 0 !important"
                  :style="areasParagraphStyle"
                >
                </paragraph>
              </div>
            </div>
          </div>
          <nav-button
            button-name="All Areas"
            button-path="/areas"
            style="text-align: center"
          ></nav-button>
        </div>
      </section>
      <section class="background-gradient">
        <div class="products-container horizontally-centered">
          <h4 class="title">
            <span>We build category-defining technology products</span>
          </h4>
          <p>
            We systematically develop, and invest in, innovative software and
            technology products to deliver our solutions to global markets.
          </p>
          <div>
            <paragraph
              v-for="(prod, prodIndex) in products.slice(0, maxProdToShow)"
              :key="'prod-' + prodIndex"
              :logo="prod.logo"
              :subtitle="prod.subtitle"
              class="padding"
            >
            </paragraph>
            <nav-button
              button-name="All Products"
              button-path="/products"
            ></nav-button>
          </div>
        </div>
      </section>
      <section
        class="customers-container horizontally-centered"
        style="padding-top: 40px"
      >
        <div>
          <h4 class="title">
            <span
              >We use data and software to solve our customers' technology
              challenges</span
            >
          </h4>
          <slideshow
            v-for="(prod, prodIndex) in products"
            :key="'prod-' + prodIndex"
            :images="prod.customers"
          ></slideshow>
        </div>
      </section>
      <section style="padding-top: 50px">
        <section-title
          class="img-title"
          title="A global footprint"
          :style="{ '--title-color': 'white' }"
        >
        </section-title>
        <div class="img-container">
          <div class="w3-hide-small">
            <img
              src="https://www.moviri.com/wp-content/uploads/2020/11/home-map-2048x1014.jpg"
            />
          </div>
          <div class="w3-hide-large w3-hide-medium">
            <img
              src="https://www.moviri.com/wp-content/uploads/2020/11/mobile_map5-533x1024.jpg"
            />
          </div>
        </div>
      </section>
      <section class="hide-animate background-gradient">
        <div class="about-team-container horizontally-centered padding">
          <div class="w3-row">
            <div class="team padding">
              <h4 class="title">
                <span>Meet our team</span>
              </h4>
              <p>
                We’d like to introduce you to our family of brilliant,
                hard-working and talentuous team components.
              </p>
              <nav-button
                button-name="People"
                button-path="/people"
                style="text-align: center"
              ></nav-button>
            </div>
            <div class="about padding">
              <h4 class="title">
                <span>About us</span>
              </h4>
              <p>
                We'd like to present you our company, the history of our
                business and the and the goals we have achieved.
              </p>
              <nav-button
                button-name="About Us"
                button-path="/about"
                style="text-align: center"
              ></nav-button>
            </div>
          </div>
        </div>
      </section>
      <section class="hide-animate margin-separator">
        <h4 class="title">
          <span>Call the specialists</span>
        </h4>
        <list-card
          :num="1"
          subtitle="We are top experts in security and AI."
          description="We help some of some of the largest companies and most recognizable brands worldwide solve their most pressing technology and business challenges. We can do that for your company too. "
          image="https://www.moviri.com/wp-content/uploads/2020/11/picture-0235@2x-1024x901.jpg"
          button-path="/contact"
          button-name="Contact Us"
        >
        </list-card>
      </section>
    </section>
  </div>
</template>

<script>
import IntroVideo from '~/components/intro/IntroVideo.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import Paragraph from '~/components/Paragraph.vue'
import Slideshow from '~/components/Slideshow.vue'
import NavButton from '~/components/navigation/NavButton.vue'
export default {
  components: {
    IntroVideo,
    SectionTitle,
    Paragraph,
    Slideshow,
    NavButton,
  },
  layout: 'default',
  // Function used for fetching the data of the products and areas from the db for the ssr
  async asyncData({ $axios }) {
    const prodData = await $axios.get(`${process.env.BASE_URL}/api/products`)
    const products = prodData.data
    const areaData = await $axios.get(`${process.env.BASE_URL}/api/areas`)
    const areas = areaData.data
    return {
      products,
      areas,
    }
  },
  data() {
    return {
      introVideo: {
        src: 'https://www.moviri.com/wp-content/uploads/2020/12/Video-HP-01120_V1.mp4',
        poster: 'https://bendingspoons.com/assets/video/home.jpg',
      },
      introText: {
        title: 'Transforming business\nOne company at a time',
        subtitle:
          'Monstar is a multinational consulting and software group of companies, helping customers harness the power of transformative technologies. We specialize in artificial intelligence and security, but we are exploring new frontiers of technology.',
      },
      // Max number of products to show in the homepage
      maxProdToShow: 3,
      // Max number of areas to show in the homepage
      maxAreaToShow: 2,
    }
  },
  // Meta tag used by the SEO that improve the visibility of the website
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'Home page description',
        name: 'Home page description',
        content:
          'Home page of the Monstars ICT company that shows the main sections of the website like the areas, the products and the customers.',
      },
    ],
  },
  computed: {
    // Style for the area paragraph
    areasParagraphStyle() {
      return {
        '--subtitle-color': '#47546b',
        '--description-color': '#717b99',
        '--container-responsive-width': 'auto',
      }
    },
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped>
.areas-container,
.products-container,
.customers-container,
.about-team-container,
.listcard-container {
  width: 60vw;
}
.products-container {
  text-align: center;
  padding: 50px 0;
}
.areas-container {
  padding-bottom: 50px;
}
.team,
.about {
  width: 50%;
  float: left;
}
.img-container {
  max-width: 100vw;
}
.img-title {
  margin-bottom: -100px;
}
.shortcut-area {
  width: 80px;
  height: 80px;
}
.title {
  font-size: 2rem;
  text-align: center;
}
.card {
  float: left;
  padding: 50px 70px;
  height: 100%;
  word-wrap: break-word !important;
}
.margin-separator {
  margin-top: 40px;
  margin-bottom: 40px;
}
.padding {
  padding: 24px;
}
p {
  color: #717b99;
}
@media (max-width: 600px) {
  .img-title {
    margin-bottom: -100px !important;
  }
}
@media (max-width: 1000px) {
  .img-title {
    margin-bottom: -80px;
  }
  .customers-container,
  .about-team-container,
  .products-container {
    width: 90vw;
  }
  .team,
  .about {
    width: 100%;
  }
  .areas-container {
    width: 100vw;
  }
  .card {
    width: 100% !important;
    padding: 30px 40px;
  }
  .text-container {
    width: auto;
  }
  .horizontally-centered {
    display: block;
  }
}
</style>
