<script setup>
import Pusher from 'pusher-js'
import { ref, onMounted, watch } from 'vue'
import SwalMixins from '../sweetalert/swalBs'

const pusher = new Pusher('6bd7c0f7e17261428890', {
  cluster: 'us2'
})
const channel = pusher.subscribe('ponbot')
const messages = ref([])
const message = ref('')
const messagesContainer = ref(null)
const chatInitialized = ref(false)
const chatBotOnline = ref(false)
const showChat = ref(false)
const chatId = ref('')
const receivingMessage = ref(false)
const wasValidated = ref(false)

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://portfolio-api.martinponce.com.ar'

const sendMessage = () => {
  if (!chatBotOnline.value) {
    return
  }

  wasValidated.value = false
  if (!message.value) {
    wasValidated.value = true
    return
  }

  messages.value.push({
    sender: 'Usted',
    text: message.value
  })

  fetch(`${apiUrl}/chatbot/sendMessage/${chatId.value}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message.value
    })
  })
    .then((res) => {
      if (res.ok) {
        receivingMessage.value = true
      }
    })
    .catch((err) => {
      SwalMixins.danger.fire({
        title: 'Error',
        icon: 'error',
        message: 'Ocurrió un error enviando el mensaje'
      })
      console.error(err)
    })

  message.value = ''
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const initChat = () => {
  if (!chatBotOnline.value) {
    return
  }

  chatInitialized.value = true
  receivingMessage.value = true

  fetch(`${apiUrl}/chatbot/init/${chatId.value}`)
    .then((res) => {
      if (!res.ok) {
        throw 'Error contactando al chatbot'
      }
      return res.json()
    })
    .then((json) => {
      chatId.value = json.chatId
    })
    .catch((err) => console.error(err))
}

const doShowChat = () => {
  showChat.value = true
  if (!chatInitialized.value) {
    initChat()
  }
}

const closeChat = () => {
  showChat.value = false
}

const connectToChat = () => {
  fetch(`${apiUrl}/chatbot`)
    .then((res) => {
      if (!res.ok) {
        throw 'Error contactando al chatbot'
      }
      chatBotOnline.value = true
      return res.json()
    })
    .then((json) => {
      chatId.value = json.chatId
    })
    .catch((err) => {
      chatBotOnline.value = false
      console.error(err)
    })
}

onMounted(() => {
  connectToChat()

  channel.bind('init', (response) => {
    if (response.chatId === chatId.value) {
      receivingMessage.value = false
      messages.value.push(response.message)
    }
  })

  channel.bind('receiveMessage', (response) => {
    if (response.chatId === chatId.value) {
      receivingMessage.value = false
      messages.value.push(response.message)
    }
  })
})

watch(messages, scrollToBottom, { deep: true })
</script>

<template>
  <span
    v-if="!showChat"
    @click="doShowChat"
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
        <div v-if="!chatBotOnline" class="alert alert-danger">
          PonBot no está conectado en este momento
        </div>
        <div v-for="(message, index) in messages" :key="index">
          <strong> {{ message.sender }}: </strong>
          {{ message.text }}
        </div>
        <small
          v-if="chatBotOnline && receivingMessage"
          class="text-secondary bg-light shadow position-absolute bottom-0 p-1 border"
          style="margin-bottom: 60px"
          >PonBot está escribiendo...</small
        >
      </div>
      <form
        @submit.prevent="sendMessage"
        class="needs-validation"
        :class="{ 'was-validated': wasValidated }"
        novalidate
      >
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model.trim="message"
            placeholder="Mensaje..."
            autofocus
            required
            :disabled="{ disabled: !chatBotOnline }"
          />
          <button class="btn btn-primary" :class="{ disabled: !chatBotOnline }">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
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
