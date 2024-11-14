<script setup>
import Pusher from 'pusher-js'
import { ref, onMounted, watch } from 'vue'

const pusher = new Pusher('6bd7c0f7e17261428890', {
  cluster: 'us2'
})
const channel = pusher.subscribe('ponbot')
const messages = ref([])
const message = ref('')
const messagesContainer = ref(null)
const chatInitialized = ref(false)
const showChat = ref(false)
const chatId = ref('')
const receivingMessage = ref(false)

const sendMessage = () => {
  messages.value.push({
    sender: 'Usted',
    text: message.value
  })

  //TODO cambiar for fetch
  fetch(`http://localhost:3000/chatbot/sendMessage/${chatId.value}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message.value
    })
  })
  message.value = ''
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const initChat = () => {
  if (!chatInitialized.value) {
    chatInitialized.value = true
    receivingMessage.value = true

    fetch(`http://localhost:3000/chatbot/init/${chatId.value}`)
      .then((res) => {
        if (!res.ok) {
          throw 'Error contactando al chatbot'
        }
        return res.json()
      })
      .then((json) => {
        chatId.value = json.chatId
        receivingMessage.value = false
      })
      .catch((err) => console.error(err))
  }

  showChat.value = true
}

const closeChat = () => {
  showChat.value = false
}

onMounted(() => {
  fetch('http://localhost:3000/chatbot')
    .then((res) => {
      if (!res.ok) {
        throw 'Error contactando al chatbot'
      }
      return res.json()
    })
    .then((json) => {
      chatId.value = json.chatId
      console.log(chatId.value)
    })
    .catch((err) => console.error(err))

  channel.bind('init', (response) => {
    console.log('init', response)
    if (response.chatId === chatId.value) {
      messages.value.push(response.message)
    }
  })

  channel.bind('receiveMessage', (response) => {
    if (response.chatId === chatId.value) {
      messages.value.push(response.message)
    }
  })
})

watch(messages, scrollToBottom, { deep: true })
</script>

<template>
  <span
    v-if="!chatInitialized || !showChat"
    @click="initChat"
    class="chat-button shadow p-3 m-3 position-fixed bottom-0 end-0 card btn btn-outline-primary"
    ><i class="fa-regular fa-comment"></i
  ></span>
  <div
    id="chatbot"
    class="card shadow p-3 m-3 position-fixed bottom-0 end-0 bg-body-tertiary"
    v-else
  >
    <div>
      <div class="row">
        <div class="col-10">
          <h4>PonBot</h4>
        </div>
        <div class="col-2 text-center text-secondary" style="cursor: pointer" @click="closeChat">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
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
  </div>
</template>

<style scoped>
#chatbot {
  margin-bottom: 100px !important;
}

.chat-button {
  margin-bottom: 100px !important;
  border-radius: 50%;
  cursor: pointer;
}
</style>
