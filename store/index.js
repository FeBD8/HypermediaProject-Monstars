import Vue from 'vue'

export const state = () => {
  return {
    messages: [],
    newMessage: false,
  }
}

export const mutations = {
  // Function that adds a new message to the list of messages of the chatbot
  addMessage(state, message) {
    const messages = state.messages
    state.newMessage = true
    messages.push(message)
    Vue.set(state, 'messages', messages)
  },
  // Function that sets the newMessage to false since it has been read from the user
  messageRead(state) {
    state.newMessage = false
  },
}
