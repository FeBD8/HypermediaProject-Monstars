<template>
  <div class="main-page">
    <div class="header">
      <nuxt-link to="/" class="image"
        ><img
          src="https://cutewallpaper.org/21/monstars-logo-space-jam/Monstars-Logo-LogoDix.png"
          width="65"
          height="65"
        />
      </nuxt-link>
      <nuxt-link to="/areas" class="landmarks">Areas</nuxt-link>
      <nuxt-link to="/company" class="landmarks">Company</nuxt-link>
      <nuxt-link to="/people" class="landmarks">People</nuxt-link>
      <nuxt-link to="/products" class="landmarks">Products</nuxt-link>
      <nuxt-link to="/services" class="landmarks">Services</nuxt-link>
    </div>
    <div class="content">
      <Nuxt />
    </div>
    <div class="footer">
      © 2021 Monstar S.p.A.
      Via Schiaffino 11  
      20158 Milano, Italy
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header {
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  height: 30px;
  background: #0d2b66;
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
}
.landmarks {
  font-size: 15px;
  padding: 20px;
  color: white;
  text-decoration: none;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.landmarks:hover,
.landmarks:focus,
.landmarks:active {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
}
.image {
  margin-right: 300px;
}

.content{
  margin-top: 30px;
  height:500px;
}

.footer {
  height: 30px;
  background: green;
  color: white;
  font-size: 25px;
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%; /* Full width */
  font-size: 15px;
}
</style>
