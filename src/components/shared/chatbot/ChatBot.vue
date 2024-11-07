<script setup>
import { io } from 'socket.io-client'
import { ref, onMounted, watch } from 'vue'

const socket = io('http://localhost:3000')
const messages = ref([])
const message = ref('')
const messagesContainer = ref(null)

const sendMessage = () => {
  messages.value.push({
    sender: 'Usted',
    text: message.value
  })
  socket.emit('sendMessage', { socketId: socket.id, text: message.value })
  message.value = ''
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

onMounted(() => {
  socket.on('receiveMessage', (response) => {
    if (response.socketId == socket.id) {
      messages.value.push(response.message)
    }
  })
})

watch(messages, scrollToBottom, { deep: true })
</script>

<template>
  <div
    id="chatbot"
    class="card shadow p-3 m-3 position-fixed bottom-0 end-0 bg-body-tertiary"
    style="margin-bottom: 100px !important"
  >
    <h4>PonBot</h4>
    <div
      ref="messagesContainer"
      id="messages"
      class="border bg-light rounded p-1 overflow-auto"
      style="height: 200px; width: 300px"
    >
      <div v-for="(message, index) in messages" :key="index">
        <strong> {{ message.sender }}: </strong>
        {{ message.text }}
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <div class="input-group">
        <input type="text" class="form-control" v-model="message" placeholder="Mensaje..." />
        <button class="btn btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>
