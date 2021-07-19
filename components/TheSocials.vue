<template>
  <!-- It contains the socials buttons and links of the company -->
  <div class="icons-container">
    <a href="https://www.facebook.com/">
      <img src="~/static/icons/facebook.png"
    /></a>
    <a href="https://www.instagram.com/">
      <img src="~/static/icons/instagram.png" />
    </a>
    <a href="https://www.twitter.com/">
      <img src="~/static/icons/twitter.png" />
    </a>
    <a href="https://www.linkedin.com/">
      <img src="~/static/icons/linkedin.png" />
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  float: left;
  padding: 0px 0px !important;
  margin: 4px 8px !important;
}
a:hover {
  opacity: 80%;
}
.icons-container {
  display: flex;
  padding-bottom: 24px;
}
</style>
