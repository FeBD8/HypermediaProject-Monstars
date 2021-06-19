<template>
  <header class="header">
    <div class="logo">
      <nuxt-link to="/">
        <img src = "https://cutewallpaper.org/21/monstars-logo-space-jam/Monstars-Logo-LogoDix.png"/>
      </nuxt-link>
    </div>
    <nav class="top">
      <div
        v-for="(item, itemIndex) of menuOptions"
        :key="'menu-item-' + itemIndex"
        class="menu-item"
      >
        <nuxt-link class="landmark" :to="item.path">
          {{ item.name }}
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOptions: [
        {
          name: 'Areas',
          path: '/areas',
        },
        {
          name: 'Products',
          path: '/products',
        },
        {
          name: 'Company',
          path: '/company',
        },
        {
          name: 'People',
          path: '/people',
        },
      ],
    }
  },
}
</script>

<style>
.header {
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  height: 100px;
  background: #0d2b66;
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
}
.top {
  float: right;
}
.menu-item {
  text-align: center;
  display: inline-block;
}
.landmark {
  font-size: 25px;
  padding: 20px;
  color: white;
  text-align: center;
  font-family: 'Staatliches', cursive;
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
.logo{
    height: 100px;
    width: 100px;
}
.logo img{
  width: auto;
  height: 100%;
}
.content {
  margin-top: 30px;
  height: 500px;
}
</style>