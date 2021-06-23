<template>
  <div>
    <the-header :menu-options="menuOptions"></the-header>
    <div class="content">
      <Nuxt />
    </div>
    <the-footer :menu-options="menuOptions"></the-footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
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

<style></style>
