<template>
  <!-- Contact form container used inside the contact page. It contains some input fields and 
  a fake button for the submission that only opens an alert. -->
  <section class="shadow form-container">
    <div class="text">
      <h4 class="title">
        <span>Contact Us</span>
      </h4>
      <div class="label-container">
        <label>
          <span>Full name</span>
          <span>*</span>
        </label>
        <input type="text" class="input" />
        <div class="input-container"></div>
      </div>
      <div class="label-container">
        <label>
          <span>Work email</span>
          <span>*</span>
          <input type="text" class="input" />
        </label>
      </div>
      <div class="label-container">
        <label>
          <span>Company name</span>
          <span>*</span><input type="text" class="input" />
        </label>
      </div>
      <div class="label-container">
        <label>
          <span>Country</span>
          <span>*</span>
          <input type="text" class="input" />
        </label>
      </div>
      <div class="label-container">
        <label>
          <span>Message</span>
          <textarea class="input" style="max-width: 530px"></textarea>
        </label>
      </div>
      <div class="privacy">
        <p>
          Monstars respects and protects your privacy. From time to time, we may
          contact you about our products, services, and content that may be of
          interest to you. Please tick below to provide your consent:
        </p>
      </div>
      <div class="w3-padding-16">
        <button class="w3-button w3-round-xxlarge w3-border" @click="submit()">
          <b>Submit</b>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    // Fake methos for submission
    submit() {
      alert('Form submitted!')
    },
  },
}
</script>

<style scoped>
.form-container {
  background-color: white;
  max-width: 85%;
  float: right;
}
.title {
  font-size: 2rem;
  text-align: center;
}
.text {
  padding: 20px;
}
.privacy,
.label-container {
  margin: 25px;
}
.input {
  box-sizing: border-box;
  padding: 0 10px;
  min-height: 27px;
  background-color: #f5f8fa;
  width: 100%;
  border: 1px solid #041a47;
  border-radius: 10px;
}
.w3-button {
  background-color: #0d2b66 !important;
  color: white !important;
  transition: background-color 0.3s ease-out;
  border-color: #0d2b66 !important;
  margin: 10px;
}
.w3-button:hover {
  background-color: transparent !important;
  color: #0d2b66 !important;
}
@media (max-width: 1000px) {
  .form-container {
    max-width: 100%;
  }
}
</style>
