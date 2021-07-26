<template>
  <!-- About page. The content is statically generated. -->
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- About Container -->
    <section id="content" class="w3-container">
      <section class="background-gradient">
        <div class="hide-animate" style="padding: 50px 0">
          <h4 class="title">
            <span>A Global Technology Business</span>
          </h4>
          <list-card
            :num="1"
            description="Founded in Italy in 2000, today Monstars is a multinational
                  group that focuses its consulting offering on hard technology
                  challenges with large-scale business impact in performance
                  engineering, analytics, security and IoT."
            image="https://www.pngall.com/wp-content/uploads/1/World-Map-PNG-Photo.png"
          >
          </list-card>
          <div class="flex">
            <div class="w3-padding-large">
              <div>
                <h5 class="number">
                  <strong>200+</strong>
                </h5>
              </div>
              <div>
                <p>Experts</p>
              </div>
            </div>
            <div class="w3-padding-large">
              <div>
                <h5 class="number">
                  <strong>30+</strong>
                </h5>
              </div>
              <div>
                <p>Countries</p>
              </div>
            </div>
            <div class="w3-padding-large">
              <div>
                <h5 class="number">
                  <strong>280+</strong>
                </h5>
              </div>
              <div>
                <p>Customers</p>
              </div>
            </div>
            <div class="w3-padding-large">
              <div>
                <h5 class="number">
                  <strong>50%</strong>
                </h5>
              </div>
              <div>
                <p>International Sales</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="margin-separator">
        <div class="hide-animate">
          <list-card
            title="Certifications and Awards"
            subtitle="Gartner Cool Vendor 2021 per Software Engineering Technology"
            description="We are thrilled to be one of the three solutions worldwide selected by Gartner to emerge as Software Engineering Technology."
            image="https://website.test.mia-platform.eu/files/download/638bb6f9-8c95-4c6e-9bb4-430d402b3210.png"
          >
            <paragraph
              subtitle="Technology"
              description="We are partners of the best technology standards in the world: collaboration and innovation guarantee cutting-edge and unique expertise on the market that we bring to every project we create."
            ></paragraph>
            <paragraph
              subtitle="FT 1000 Europe’s Fastest Growing Companies"
              description="We are one of the 1,000 fastest growing companies in Europe, according to the annual Financial Times ranking."
            ></paragraph>
            <paragraph
              subtitle="ISO 9001"
              description="We are equipped with a Quality Management System based on the international UNI EN ISO 9001 standard."
            ></paragraph>
          </list-card>
        </div>
      </section>
      <section class="background-gradient margin-separator">
        <div
          class="center-container horizontally-centered hide-animate"
          style="padding: 50px 0"
        >
          <div>
            <h4 class="title">
              <span>Big problems need companies with big ideas.</span>
            </h4>
            <div class="row">
              <div class="w3-padding-large">
                <p>
                  When we started in 2000, we saw that the Internet was about to
                  change the world forever and we decided we had to be
                  <strong>part of that change</strong>. For us, this meant
                  reinventing how the capacity planning of hardware resources
                  had to be done in the new era of distributed systems and
                  online businesses.
                </p>
                <p>
                  We did it with an engineering mindset and business acumen, and
                  we created <strong>Caplan</strong>, a technology destined to
                  become the world leader in its space with the transition to
                  BMC Software in 2010.
                </p>
              </div>
              <div class="w3-padding-large">
                <p>
                  We processed massive quantities of data to build models and
                  predict future outcomes, simplifying and automating what was
                  previously seen as black magic. Today we would call all this
                  Big Data and AI, but back then we thought of it simply as
                  <strong>smart engineering</strong>.
                </p>
                <h5><b>We still do that today!</b></h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="hide-animate margin-separator">
        <h4 class="title">
          <span>Join our Team</span>
        </h4>
        <list-card
          :num="1"
          subtitle="Technology, ambition, and problems worth solving."
          description="At Monstars, we have a special relationship with data, engineering
            and machine intelligence. We are bringing personalization to new
            frontiers in marketing and business automation. Do you have what it
            takes?"
          image="https://www.moviri.com/wp-content/uploads/2020/12/careers-screen2@2x.png"
          button-path="/contact"
          button-name="Contact Us"
        >
        </list-card>
      </section>
    </section>
  </div>
</template>

<script>
import ListCard from '~/components/list/ListCard.vue'
export default {
  components: {
    ListCard,
  },
  layout: 'default',
  data() {
    return {
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/home.mp4',
        poster: 'https://bendingspoons.com/assets/video/manifesto.jpg',
      },
      introText: {
        title: 'These are the values\nwe believe in',
        subtitle:
          'Monstars is founded on values we all share and are ready to stand for. They bring us together well beyond our current products and technologies. They’ve defined our identity since the beginning, and they’ll continue to do so, no matter how our business evolves.',
      },
    }
  },
  // Meta tag used by the SEO that improve the visibility of the website
  head: {
    title: 'About page',
    meta: [
      {
        hid: 'About page description',
        name: 'About page description',
        content:
          'About page of the Monstars ICT company that explains the history of the company, its milestones and the global numbers.',
      },
    ],
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped>
#content {
  padding-top: 0;
}
.listcard-container,
.center-container {
  width: 60vw;
}
.flex {
  width: min-content;
  text-align: center;
  margin: auto;
}
.number {
  font-size: 2rem;
}
.title {
  font-size: 2rem;
  text-align: center;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 25px;
}
p {
  color: #717b99;
  font-size: 1.1rem;
}
strong {
  color: #47546b;
}
h5 {
  color: cornflowerblue !important;
}
.margin-separator {
  margin-top: 40px;
  margin-bottom: 40px;
}
@media (max-width: 1000px) {
  .row {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
  .center-container {
    width: 90vw;
  }
  p {
    font-size: 1.1rem;
  }
  .flex {
    display: block;
  }
}
</style>
