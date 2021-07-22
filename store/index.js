import Vue from 'vue'

export const state = () => {
  return {
    messages: [],
    newMessage: false,
  }
}

export const mutations = {
  addMessage(state, message) {
    const messages = state.messages
    state.newMessage = true
    messages.push(message)
    Vue.set(state, 'messages', messages)
  },
  messageRead(state) {
    state.newMessage = false
  },
}
