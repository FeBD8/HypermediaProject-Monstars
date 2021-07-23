<template>
  <div>
    <section class="intro">
      <intro-video
        :intro-video="introVideo"
        :intro-text="introText"
      ></intro-video>
    </section>
    <!-- Contact Container -->
    <section id="content" class="w3-container background-gradient">
      <section-title title="CONTACTS"></section-title>
      <div class="contacts-container horizontally-centered hide-animate">
        <div style="margin-top: 80px">
          <section class="offices-container">
            <h4 class="title">
              <span>Our Offices</span>
            </h4>
            <div class="row">
              <div>
                <p>
                  <b>Italy HQ<br /></b>
                  <span>Via Schiaffino, 11<br /></span>
                  <span>Milano, 20158<br /></span>
                  <span>T: +39 02 4951 7001</span>
                </p>
              </div>
              <div>
                <p>
                  <b>USA Boston<br /> </b><span>211 Congress Street<br /></span>
                  <span>Boston, MA 02110<br /></span>
                  <span>T: +1 617 936 0212</span>
                </p>
              </div>
            </div>
            <div class="row">
              <div>
                <p>
                  <b>USA Los Angeles<br /></b>
                  <span>12130 Millennium Drive<br /></span>
                  <span>Los Angeles, CA 90094<br /></span>
                  <span>T: +1 323 524 0524</span>
                </p>
              </div>
              <div>
                <p>
                  <b>Singapore<br /></b>
                  <span>5 Temasek Blvd,<br /></span>
                  <span>Singapore, 03898<br /></span>
                  <span>T: +6 571 617 527</span>
                </p>
              </div>
            </div>
          </section>
          <div class="border-bottom"></div>
          <section class="email-container" style="margin-top: 40px">
            <h4 class="title">
              <span>Contact Emails</span>
            </h4>
            <div class="row">
              <div>
                <p>
                  <b>For general enquiries<br /></b>
                  <a href="mailto:info@monstars.com">
                    <span>info@monstars.com</span>
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <b>For careers and jobs<br /></b>
                  <a href="mailto:jobs@monstars.com">
                    <span>jobs@monstars.com</span>
                  </a>
                </p>
              </div>
            </div>
            <div class="row">
              <div>
                <p>
                  <b>For marketing, PR and sales<br /></b>
                  <a href="mailto:marketing@monstars.com">
                    <span>marketing@monstars.com</span>
                  </a>
                </p>
              </div>
              <div>
                <p>
                  <b>For partnerships<br /></b>
                  <a href="mailto:partners@monstars.com">
                    <span>partners@monstars.com</span>
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <div id="form"></div>
          <the-contact-form></the-contact-form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionTitle from '~/components/SectionTitle.vue'
import TheContactForm from '~/components/TheContactForm.vue'
export default {
  components: {
    SectionTitle,
    TheContactForm,
  },
  layout: 'default',
  data() {
    return {
      introVideo: {
        src: 'https://bendingspoons.com/assets/video/careers.mp4',
        poster: 'https://bendingspoons.com/assets/video/careers.jpg',
      },
      introText: {
        title: 'Get in touch with us',
        subtitle:
          "Thank you for your interest in Monstars! Below you can find our offices and all the information you need. Please fill out the form to contact us and don't forget to check the box if you'd like to receive news, articles and insights.",
      },
    }
  },
  mounted() {
    this.$animateComponents()
  },
}
</script>

<style scoped>
#form {
  margin-bottom: 100px;
}
.contacts-container {
  width: 75vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  line-height: 1.5;
  padding-bottom: 50px;
}
.title {
  font-size: 2rem;
}
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 25px;
}
.offices-container,
.email-container {
  line-height: 2;
}
.border-bottom {
  border-bottom: 1px solid #e4cdcd !important;
}
a {
  color: #2867c5;
}
a:hover {
  opacity: 0.8;
}
b {
  color: #1551ac;
  font-size: 1.2rem;
}
@media (max-width: 1000px) {
  .row {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
  .contacts-container {
    grid-template-columns: 1fr;
    width: 80vw;
  }
}
</style>
