<template>
  <div class="chat">
    <div v-if="isOpen" class="chat-container">
      <div id="chat-window" class="chat-window">
        <div
          v-for="(message, messageIndex) of chatList"
          :key="`message-${messageIndex}`"
          class="message"
          :class="{ sender: message.sender }"
        >
          <div class="message-content" :class="{ sender: message.sender }">
            {{ message.content }}
          </div>
        </div>
      </div>
      <div class="input-container">
        <input
          v-model="messageToSend"
          class="input"
          type="text"
          @keypress.enter="sendMessage"
        />
      </div>
    </div>
    <div class="button" @click="isOpen = !isOpen">
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
    chatList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      messageToSend: '',
      isOpen: true,
    }
  },
  methods: {
    sendMessage() {
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
  },
}
</script>

<style>
.chat {
  z-index: 100;
}
.button {
  height: 80px;
  width: 80px;
  padding: 10px;
  float: right;
}
.chat-container {
  background-color: rgb(233, 243, 232);
  border: 1px solid black;
  border-radius: 15px;
  height: 500px;
  width: 300px;
  position: absolute;
  bottom: 80px;
  right: 0px;
}
.chat-window {
  overflow-y: scroll;
  max-height: calc(100% - 45px);
}
.message {
  display: flex;
  justify-content: flex-end;
}
.message.sender {
  justify-content: flex-start;
  width: calc(100% - 20px);
}
.message-content {
  padding: 5px 10px;
  margin: 4px;
  background: #f3f3f3;
  color: black;
  border: 1px solid #041a47;
  border-radius: 15px;
}
.message-content.sender {
  margin: 10px;
  background: #247a02;
  color: white;
  border: 1px solid #1b5803;
}
.input-container {
  width: 100%;
  padding: 0 10px;
  position: absolute;
  bottom: 10px;
}
input {
  box-sizing: border-box;
  padding: 0 10px;
  min-height: 27px;
  background-color: #f5f8fa;
  width: 100%;
  border: 1px solid #041a47;
  border-radius: 10px;
}
</style>
