export default {
  data() {
    const list = []
    const newMessage = ''
    const configurationId = process.env.configurationId
    return { list, newMessage, configurationId }
  },
  watch: {
    '$store.state.messages'() {
      this.list = this.$store.state.messages
    },
    '$store.state.newMessage'() {
      this.newMessage = this.$store.state.newMessage
    },
  },
  mounted() {
    const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
    // Connection config
    const data = {
      configurationId: process.env.configurationId,
      interaction: localStorage.getItem('mmcc-interaction') || null,
    }
    // Emitting the connect event to initialize the communication
    WebSocketEventBus.$emit('connect', data)

    // Adding the default event listener for messages
    WebSocketEventBus.onMessage((message) => {
      if (message.utterance) {
        this.$store.commit('addMessage', {
          sender: true,
          content: message.utterance,
        })
      }
      if (message.payload) {
        if (message.payload.guide) {
          this.$router.push(message.payload.guide)
        }
      }
      const container = document.getElementById('chat-window')
      if (container !== null) {
        setTimeout(() => (container.scrollTop = container.scrollHeight))
      }
    })
  },
}
