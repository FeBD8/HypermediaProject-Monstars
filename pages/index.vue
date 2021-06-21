<template>
  <div class="content">
    <div id="description" class="logo_description">
      Monstar is a multinational consulting and software group of companies,
      helping customers harness the power of transformative technologies.
    </div>
  </div>
</template>

<script>
export default {
  layout: 'menu',
}
</script>

<style>
.logo_description {
  display: inline-block;
}
#image {
  float: left;
}
#description {
  text-shadow: -1px 0 blue, 0 1px blue, 1px 0 blue, 0 -1px blue;
  color: yellow;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 10px;
  height: 200px;
  width: 500px;
  padding-top: 55px;
  font-size: 20px;
}
.content {
  background-color: black;
}
</style>
