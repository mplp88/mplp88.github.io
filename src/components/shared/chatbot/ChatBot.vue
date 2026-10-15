<script setup>
import Pusher from 'pusher-js'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'
import { nextTick, ref, onMounted, onBeforeUnmount, watch } from 'vue'
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
const sendingMessage = ref(false)
const wasValidated = ref(false)

let reconnectTimer = null

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.101:3000'
    : 'https://portfolio-api.martinponce.com.ar'

// Configuración de Markdown
const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
  typographer: true
})

// Abrir los enlaces en una pestaña nueva de forma segura
const defaultLinkOpen =
  markdown.renderer.rules.link_open ||
  ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options))

markdown.renderer.rules.link_open = (tokens, idx, options, env, self) => {
  const token = tokens[idx]

  token.attrSet('target', '_blank')
  token.attrSet('rel', 'noopener noreferrer')

  return defaultLinkOpen(tokens, idx, options, env, self)
}

const renderMarkdown = (text) => {
  const html = markdown.render(text || '')
  return DOMPurify.sanitize(html)
}

const scrollToBottom = async () => {
  await nextTick()

  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const connectToChat = async () => {
  if (chatBotOnline.value) return

  try {
    const res = await fetch(`${apiUrl}/chatbot`)

    if (!res.ok) {
      throw new Error('Error contactando al chatbot')
    }

    const json = await res.json()

    chatId.value = json.chatId
    chatBotOnline.value = true
  } catch (error) {
    console.error('Error conectando con PonBot:', error)
    chatBotOnline.value = false

    clearTimeout(reconnectTimer)
    reconnectTimer = setTimeout(connectToChat, 30 * 1000)
  }
}

const initChat = async () => {
  if (!chatBotOnline.value) {
    await connectToChat()
  }

  if (!chatBotOnline.value || chatInitialized.value) return

  try {
    receivingMessage.value = true

    const res = await fetch(`${apiUrl}/chatbot/init/${chatId.value}`)

    if (!res.ok) {
      throw new Error('Error iniciando la conversación')
    }

    const json = await res.json()

    if (json.chatId) {
      chatId.value = json.chatId
    }

    chatInitialized.value = true
  } catch (error) {
    console.error('Error iniciando PonBot:', error)

    receivingMessage.value = false

    SwalMixins.danger.fire({
      title: 'No se pudo iniciar el chat',
      text: 'Intentá nuevamente en unos segundos.',
      icon: 'error'
    })
  }
}

const doShowChat = async () => {
  showChat.value = true

  if (!chatInitialized.value) {
    await initChat()
  }

  scrollToBottom()
}

const closeChat = () => {
  showChat.value = false
}

const sendMessage = async () => {
  const text = message.value.trim()

  if (
    !text ||
    !chatBotOnline.value ||
    !chatInitialized.value ||
    sendingMessage.value ||
    receivingMessage.value
  ) {
    return
  }

  wasValidated.value = true
  sendingMessage.value = true
  receivingMessage.value = true

  messages.value.push({
    sender: 'Usted',
    text
  })

  message.value = ''

  try {
    const res = await fetch(`${apiUrl}/chatbot/sendMessage/${chatId.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: text })
    })

    if (!res.ok) {
      throw new Error('Error enviando el mensaje')
    }
  } catch (error) {
    console.error('Error enviando mensaje:', error)

    receivingMessage.value = false

    SwalMixins.danger.fire({
      title: 'Error',
      text: 'Ocurrió un error enviando el mensaje.',
      icon: 'error'
    })

    chatBotOnline.value = false
    chatInitialized.value = false
    connectToChat()
  } finally {
    sendingMessage.value = false
  }
}

const handleInit = (response) => {
  if (response.chatId !== chatId.value) return

  receivingMessage.value = false

  if (response.message) {
    messages.value.push(response.message)
  }
}

const handleReceiveMessage = (response) => {
  if (response.chatId !== chatId.value) return

  receivingMessage.value = false

  if (response.message) {
    messages.value.push(response.message)
  }
}

onMounted(() => {
  channel.bind('init', handleInit)
  channel.bind('receiveMessage', handleReceiveMessage)

  connectToChat()
})

onBeforeUnmount(() => {
  clearTimeout(reconnectTimer)

  channel.unbind('init', handleInit)
  channel.unbind('receiveMessage', handleReceiveMessage)

  pusher.unsubscribe('ponbot')
})

watch(() => messages.value.length, scrollToBottom)
</script>

<template>
  <!-- Botón flotante -->
  <button
    v-if="!showChat"
    type="button"
    class="chat-button shadow"
    aria-label="Abrir chat con PonBot"
    @click="doShowChat"
  >
    <i class="fa-regular fa-comment-dots"></i>
  </button>

  <!-- Ventana del chatbot -->
  <section v-else id="chatbot" class="card shadow-lg" aria-label="Chat con PonBot">
    <!-- Encabezado -->
    <header class="chat-header d-flex align-items-center gap-3 p-3">
      <div class="bot-avatar">
        <i class="fa-solid fa-robot"></i>
      </div>

      <div class="flex-grow-1 overflow-hidden">
        <h5 class="mb-1">PonBot</h5>

        <div class="chat-status">
          <span class="status-dot" :class="{ online: chatBotOnline }"></span>

          {{ chatBotOnline ? 'Asistente virtual' : 'Conectando...' }}
        </div>
      </div>

      <button type="button" class="btn-close" aria-label="Cerrar chat" @click="closeChat"></button>
    </header>

    <!-- Mensajes -->
    <div
      ref="messagesContainer"
      id="messages"
      class="chat-messages"
      role="log"
      aria-live="polite"
      aria-relevant="additions"
    >
      <div v-if="!chatBotOnline" class="connection-notice">
        <i class="fa-solid fa-circle-exclamation me-2"></i>
        PonBot no está disponible en este momento. Intentaremos reconectar automáticamente.
      </div>

      <div v-if="messages.length === 0 && chatBotOnline" class="welcome-message">
        <div class="welcome-icon">
          <i class="fa-solid fa-comments"></i>
        </div>

        <h6>¡Hola! Soy PonBot</h6>

        <p>Puedo contarte sobre la experiencia, las tecnologías y los proyectos de Martín.</p>

        <span>¿Qué te gustaría conocer?</span>
      </div>

      <div
        v-for="(item, index) in messages"
        :key="index"
        class="message-row"
        :class="item.sender === 'Usted' ? 'message-user' : 'message-bot'"
      >
        <div v-if="item.sender !== 'Usted'" class="message-avatar" aria-hidden="true">
          <i class="fa-solid fa-robot"></i>
        </div>

        <article class="message-bubble">
          <div class="message-sender">
            {{ item.sender === 'Usted' ? 'Vos' : 'PonBot' }}
          </div>

          <div
            v-if="item.sender === 'PonBot'"
            class="message-content markdown-body"
            v-html="renderMarkdown(item.text)"
          ></div>

          <div v-else class="message-content">
            {{ item.text }}
          </div>
        </article>
      </div>

      <!-- Indicador de escritura -->
      <div
        v-if="receivingMessage && chatBotOnline"
        class="message-row message-bot"
        aria-label="PonBot está escribiendo"
      >
        <div class="message-avatar" aria-hidden="true">
          <i class="fa-solid fa-robot"></i>
        </div>

        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <!-- Campo de entrada -->
    <form class="chat-composer p-3" @submit.prevent="sendMessage">
      <div class="input-group">
        <textarea
          v-model="message"
          class="form-control chat-input"
          placeholder="Escribí tu consulta..."
          aria-label="Escribí tu mensaje"
          rows="1"
          maxlength="2000"
          :disabled="!chatBotOnline || !chatInitialized || receivingMessage"
          @keydown.enter.exact.prevent="sendMessage"
        ></textarea>

        <button
          type="submit"
          class="btn btn-primary send-button"
          aria-label="Enviar mensaje"
          :disabled="!chatBotOnline || !chatInitialized || receivingMessage || !message.trim()"
        >
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>

      <div class="composer-footer">
        <span>Enter para enviar · Shift + Enter para nueva línea</span>
        <span>{{ message.length }}/2000</span>
      </div>
    </form>
  </section>
</template>

<style scoped>
.chat-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1050;
  width: 60px;
  height: 60px;
  border: 0;
  border-radius: 50%;
  background: var(--bs-primary, #0d6efd);
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.chat-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgb(0 0 0 / 20%);
}

#chatbot {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  width: 420px;
  height: min(680px, 75dvh);
  max-height: calc(100dvh - 48px);
  overflow: hidden;
  border: 1px solid var(--bs-border-color, #dee2e6);
  border-radius: 18px;
  background: var(--bs-body-bg, #fff);
}

.chat-header {
  flex-shrink: 0;
  border-bottom: 1px solid var(--bs-border-color, #dee2e6);
  background: var(--bs-tertiary-bg, #f8f9fa);
}

.chat-header h5 {
  font-size: 1rem;
  font-weight: 700;
}

.bot-avatar,
.message-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--bs-primary, #0d6efd);
  color: white;
}

.chat-status {
  color: var(--bs-secondary-color, #6c757d);
  font-size: 0.78rem;
}

.status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 5px;
  border-radius: 50%;
  background: #dc3545;
}

.status-dot.online {
  background: #198754;
}

.chat-messages {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 20px 14px;
  background: var(--bs-body-bg, #fff);
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

.welcome-message {
  max-width: 290px;
  margin: 35px auto;
  text-align: center;
  color: var(--bs-body-color, #212529);
}

.welcome-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin: 0 auto 16px;
  border-radius: 16px;
  background: var(--bs-primary-bg-subtle, #cfe2ff);
  color: var(--bs-primary, #0d6efd);
  font-size: 23px;
}

.welcome-message h6 {
  font-weight: 700;
}

.welcome-message p,
.welcome-message span {
  font-size: 0.9rem;
  line-height: 1.6;
}

.welcome-message p {
  margin-bottom: 8px;
  color: var(--bs-secondary-color, #6c757d);
}

.welcome-message span {
  font-weight: 600;
}

.connection-notice {
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 10px;
  background: var(--bs-danger-bg-subtle, #f8d7da);
  color: var(--bs-danger-text-emphasis, #842029);
  font-size: 0.85rem;
}

.message-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 16px;
}

.message-user {
  justify-content: flex-end;
}

.message-bot {
  justify-content: flex-start;
}

.message-avatar {
  width: 28px;
  height: 28px;
  font-size: 12px;
}

.message-bubble {
  max-width: 85%;
  min-width: 0;
  padding: 10px 13px;
  border-radius: 14px;
  overflow-wrap: anywhere;
}

.message-user .message-bubble {
  border-bottom-right-radius: 4px;
  background: var(--bs-primary, #0d6efd);
  color: white;
}

.message-bot .message-bubble {
  border: 1px solid var(--bs-border-color, #dee2e6);
  border-bottom-left-radius: 4px;
  background: var(--bs-tertiary-bg, #f8f9fa);
  color: var(--bs-body-color, #212529);
}

.message-sender {
  margin-bottom: 5px;
  font-size: 0.72rem;
  font-weight: 700;
  opacity: 0.8;
}

.message-content {
  font-size: 0.9rem;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.chat-composer {
  flex-shrink: 0;
  border-top: 1px solid var(--bs-border-color, #dee2e6);
  background: var(--bs-body-bg, #fff);
}

.chat-input {
  min-height: 44px;
  max-height: 120px;
  resize: vertical;
  font-size: 0.9rem;
}

.chat-input:focus {
  box-shadow: none;
}

.send-button {
  min-width: 46px;
}

.composer-footer {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  color: var(--bs-secondary-color, #6c757d);
  font-size: 0.68rem;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 14px;
  border: 1px solid var(--bs-border-color, #dee2e6);
  border-radius: 14px;
  background: var(--bs-tertiary-bg, #f8f9fa);
}

.typing-indicator span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--bs-secondary-color, #6c757d);
  animation: typing 1.2s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.15s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes typing {
  0%,
  60%,
  100% {
    opacity: 0.35;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
    transform: translateY(-4px);
  }
}

/* Estilos del Markdown renderizado */
.markdown-body :deep(p) {
  margin: 0 0 0.65rem;
}

.markdown-body :deep(p:last-child) {
  margin-bottom: 0;
}

.markdown-body :deep(h1),
.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4),
.markdown-body :deep(h5) {
  margin: 0.85rem 0 0.45rem;
  font-size: 1rem;
  font-weight: 700;
}

.markdown-body :deep(ul),
.markdown-body :deep(ol) {
  padding-left: 1.35rem;
  margin: 0.45rem 0 0.75rem;
}

.markdown-body :deep(li + li) {
  margin-top: 0.25rem;
}

.markdown-body :deep(a) {
  color: var(--bs-link-color, #0d6efd);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.markdown-body :deep(strong) {
  font-weight: 700;
}

.markdown-body :deep(code) {
  padding: 0.12rem 0.3rem;
  border-radius: 4px;
  background: var(--bs-secondary-bg, #e9ecef);
  font-size: 0.85em;
}

.markdown-body :deep(pre) {
  overflow-x: auto;
  padding: 10px;
  border-radius: 8px;
  background: var(--bs-secondary-bg, #e9ecef);
}

.markdown-body :deep(pre code) {
  padding: 0;
  background: transparent;
  white-space: pre;
}

.markdown-body :deep(blockquote) {
  margin: 0.5rem 0;
  padding-left: 10px;
  border-left: 3px solid var(--bs-primary, #0d6efd);
  color: var(--bs-secondary-color, #6c757d);
}

.markdown-body :deep(hr) {
  margin: 0.75rem 0;
  border-color: var(--bs-border-color, #dee2e6);
}

@media (max-width: 575.98px) {
  #chatbot {
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100dvh;
    max-height: 100dvh;
    border: 0;
    border-radius: 0;
  }

  .chat-button {
    right: 18px;
    bottom: 18px;
  }

  .chat-messages {
    padding: 18px 12px;
  }

  .message-bubble {
    max-width: 90%;
  }

  .chat-composer {
    padding-bottom: max(12px, env(safe-area-inset-bottom));
  }
}

@media (prefers-reduced-motion: reduce) {
  .chat-button,
  .typing-indicator span {
    animation: none;
    transition: none;
  }
}
</style>
