<template>
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
        <div class="input-container">
          <input type="text" />
        </div>
      </div>
      <div class="label-container">
        <label>
          <span>Work email</span>
          <span>*</span>
        </label>
        <div class="input-container">
          <input type="text" />
        </div>
      </div>
      <div class="label-container">
        <label>
          <span>Company name</span>
          <span>*</span>
        </label>
        <div class="input-container">
          <input type="text" />
        </div>
      </div>
      <div class="label-container">
        <label>
          <span>Country</span>
          <span>*</span>
        </label>
        <div class="input-container">
          <input type="text" />
        </div>
      </div>
      <div class="label-container">
        <label>
          <span>Message</span>
        </label>
        <div class="input-container">
          <input type="text" />
        </div>
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
    submit() {
      alert('Form submitted!')
    },
  },
}
</script>

<style scoped>
.form-container {
  background-color: white;
  margin-top: 20px;
}
.title {
  font-size: 2rem;
  text-align: center;
}
.text {
  padding: 20px;
}
.input-container {
  width: 100%;
  padding: 10px 0;
}
.privacy,
.label-container {
  margin: 10px;
}
input {
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
</style>
