<template>
  <!-- Default layout composed of the header, the main content, the chatbot and the footer. -->
  <div>
    <the-header :menu-options="menuOptions"></the-header>
    <div>
      <Nuxt />
      <chat
        :chat-list="list"
        :new-message="newMessage"
        class="w3-hide-small w3-hide-medium"
      ></chat>
    </div>
    <the-footer :menu-options="menuOptions"></the-footer>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import Chat from '~/components/Chat.vue'
import MMCCMixin from '~/mixins/mmcc-mixin.js'
export default {
  components: {
    TheHeader,
    TheFooter,
    Chat,
  },
  mixins: [MMCCMixin],
  data() {
    return {
      /* The content is used for the dropdown menu with its content into the navigation bar 
      and the list of elements in the footer */
      menuOptions: [
        {
          name: 'Areas',
          path: '/areas',
          content: [],
        },
        {
          name: 'Products',
          path: '/products',
        },
        {
          name: 'People',
          path: '/people',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
      ],
    }
  },
  // Function used for fetching the data of the areas from the db for the ssr
  async fetch() {
    for (let i = 0; i < this.menuOptions.length; i++) {
      if (this.menuOptions[i].content) {
        const { data } = await this.$axios.get(
          `${process.env.BASE_URL}/api${this.menuOptions[i].path}`
        )
        this.menuOptions[i].content = data
      }
    }
  },
}
</script>

<style>
#content {
  padding: 40px 0;
}
img {
  height: auto;
  width: 100%;
}
.w3-button:hover {
  color: inherit !important;
  background-color: transparent !important;
}
.w3-button {
  color: inherit !important;
  background-color: transparent !important;
  white-space: normal !important;
}
.chat {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
@media (max-width: 1000px) {
  #content {
    padding: 20px 0;
  }
}
</style>
