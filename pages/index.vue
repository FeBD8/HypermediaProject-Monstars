<template>
  <div class="content">
    <div id="image" class="logo_description">
      <nuxt-link to="/">
      <img
        src="https://cutewallpaper.org/21/monstars-logo-space-jam/Monstars-Logo-LogoDix.png"
        width="200"
        height="200"
      />
      </nuxt-link>
    </div>
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
#description{
  text-shadow: -1px 0 blue, 0 1px blue, 1px 0 blue, 0 -1px blue;
  color: yellow;
  font-weight: bold;
  padding:10px;
  height: 200px;
  width: 500px;
  padding-top: 55px;
  font-size: 20px;
}
.content{
  background-image: url("https://cdn.statically.io/img/wallpapercave.com/wp/wp2758214.gif");
}
</style>
