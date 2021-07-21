<template>
  <!-- It contains the socials buttons and links of the company -->
  <div class="icons-container">
    <div class="link">
      <a href="https://www.facebook.com/">
        <img src="~/static/icons/facebook.png" alt="Facebook logo" />
      </a>
    </div>
    <div class="link">
      <a href="https://www.instagram.com/">
        <img src="~/static/icons/instagram.png" alt="Instagram logo" />
      </a>
    </div>
    <div class="link">
      <a href="https://www.twitter.com/">
        <img src="~/static/icons/twitter.png" alt="Twitter logo" />
      </a>
    </div>
    <div class="link">
      <a href="https://www.linkedin.com/">
        <img src="~/static/icons/linkedin.png" alt="Linkedin logo" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.link {
  float: left;
  padding: 0px 0px !important;
  margin: 4px 8px !important;
}
.link:hover {
  opacity: 80%;
}
.icons-container {
  display: flex;
  padding-bottom: 24px;
}
</style>
