<template>
  <!-- Component of the chatbot. It has an icon image that is the button used in order to 
  open and close it, an image for the notification and the chat window that displays all the
  messages that are retrieved from the store. -->
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="chat-message"
          :class="{ sender: message.sender }"
        >
          <div class="chat-message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <div class="chat-input-container">
        <input
          id="input"
          v-model="messageToSend"
          class="chat-input"
          type="text"
          @keypress.enter="sendMessage"
        />
      </div>
    </div>
    <div class="chat-button" @click="openChat()">
      <div v-if="!isOpen && newMessage" class="chat-notification-container">
        <img src="~/static/icons/notification.png" alt="Notification logo" />
      </div>
      <img
        class="w3-round-xxlarge"
        src="~/static/icons/chatbot.png"
        alt="Chat logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chatList: { type: Array, required: true },
    newMessage: { type: Boolean, default: () => false },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: false,
    }
  },
  methods: {
    // Methods used for sending messages
    sendMessage() {
      if (this.messageToSend === '') {
        return
      }
      const { WebSocketEventBus } = require('mmcc/WebSocketEventBus')
      this.$store.commit('addMessage', {
        sender: false,
        content: this.messageToSend,
      })
      const packet = {
        message: { type: 'data', payload: { data: this.messageToSend } },
        configurationId: process.env.configurationId,
      }
      WebSocketEventBus.$emit('send', packet)
      this.messageToSend = ''
    },
    // Methods used for opening the chat and commit to the store that the messages have been read
    openChat() {
      this.isOpen = !this.isOpen
      this.$store.commit('messageRead')
      setTimeout(() => this.updateScroll())
    },
    // Methods used for scrolling down to the last message the view inside the chat window
    updateScroll() {
      const container = document.getElementById('chat-window')
      const input = document.getElementById('input')
      if (container !== null) {
        container.scrollTop = container.scrollHeight
      }
      if (input !== null) {
        input.focus()
      }
    },
  },
}
</script>

<style>
.chat {
  z-index: 100;
}
.chat-button {
  height: 80px;
  width: 80px;
  padding: 10px;
  float: right;
}
.chat-notification-container {
  width: 25px;
  height: 25px;
  position: absolute;
  top: -5px;
}
.chat-container {
  background-color: rgb(233, 243, 232);
  border: 1px solid black;
  border-radius: 15px;
  height: 400px;
  width: 300px;
  position: absolute;
  bottom: 80px;
  right: 0px;
}
.chat-window {
  overflow-y: scroll;
  max-height: calc(100% - 45px);
}
.chat-message {
  display: flex;
  justify-content: flex-end;
}
.chat-message.sender {
  justify-content: flex-start;
  width: calc(100% - 20px);
}
.chat-message-content {
  padding: 5px 10px;
  margin: 4px;
  background: #f3f3f3;
  color: black;
  border: 1px solid #041a47;
  border-radius: 15px;
}
.chat-message-content.sender {
  margin: 10px;
  background: #247a02;
  color: white;
  border: 1px solid #1b5803;
}
.chat-input-container {
  width: 100%;
  padding: 0 10px;
  position: absolute;
  bottom: 10px;
}
.chat-input {
  box-sizing: border-box;
  padding: 0 10px;
  min-height: 27px;
  background-color: #f5f8fa;
  width: 100%;
  border: 1px solid #041a47;
  border-radius: 10px;
}
</style>
