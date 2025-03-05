<script setup>
import { ref } from 'vue'
const loading = ref(false)
const messageSent = ref(false)
const error = ref('')
const wasValidated = ref(false)
const isValidName = ref(true)
const isValidEmail = ref(true)
const isValidMessage = ref(true)
const invalidEmailMessage = ref('Campo requerido')

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://portfolio-api.martinponce.com.ar'

const formInfo = ref({
  name: '',
  email: '',
  message: ''
})

const sendMessage = () => {
  if (!validate()) return

  wasValidated.value = false
  loading.value = true

  fetch(`${apiUrl}/email`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formInfo.value)
  })
    .then((res) => res.json())
    .then(() => {
      formInfo.value = {
        name: '',
        email: '',
        message: ''
      }

      loading.value = false
      messageSent.value = true
    })
    .catch((err) => {
      loading.value = false
      error.value = err.message
      console.error(err.data)
    })
}

const validate = () => {
  wasValidated.value = true
  isValidName.value = true
  isValidMessage.value = true
  isValidEmail.value = true
  const { name, email, message } = formInfo.value
  let valid = true
  valid = valid && name && message

  if (!name) {
    isValidName.value = false
  }

  if (!message) {
    isValidMessage.value = false
  }

  const validEmail = validateEmail(email)
  valid = valid && validEmail

  return valid
}

const validateEmail = (email) => {
  const regex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  let valid = true

  if (!email.length) {
    valid = false
    invalidEmailMessage.value = 'Campo requerido'
  }

  if (valid && !regex.test(email)) {
    valid = false
    invalidEmailMessage.value = 'Ingrese un email válido'
  }

  isValidEmail.value = valid
  return valid
}

const dismissError = () => {
  error.value = ''
}

const dismissMessage = () => {
  messageSent.value = false
}
</script>

<template>
  <h1>Contacto</h1>
  <div v-if="messageSent" class="alert alert-success my-3">
    Mensaje enviado correctamente.
    <span style="cursor: pointer; float: right" @click="dismissMessage">
      <i class="fa-solid fa-xmark"></i>
    </span>
  </div>
  <div v-if="error" class="alert alert-danger my-3">
    {{ error }}
    <span style="cursor: pointer; float: right" @click="dismissError">
      <i class="fa-solid fa-xmark"></i>
    </span>
  </div>
  <div v-if="loading" class="alert alert-info">Enviando...</div>
  <div v-else class="card p-3 shadow">
    <form class="needs-validation" @submit.prevent="sendMessage" novalidate>
      <div class="form-floating mb-3">
        <input
          class="form-control"
          :class="{
            'is-invalid': wasValidated && !isValidName,
            'is-valid': wasValidated && isValidName
          }"
          id="nombre"
          type="text"
          placeholder="Nombre"
          v-model.trim="formInfo.name"
          required
        />
        <label for="nombre">Nombre</label>
        <small class="invalid-feedback">Campo requerido</small>
      </div>
      <div class="form-floating mb-3">
        <input
          class="form-control"
          :class="{
            'is-invalid': wasValidated && !isValidEmail,
            'is-valid': wasValidated && isValidEmail
          }"
          type="email"
          placeholder="Email"
          v-model.trim="formInfo.email"
          required
        />
        <label for="email">Email</label>
        <small class="invalid-feedback">{{ invalidEmailMessage }}</small>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          :class="{
            'is-invalid': wasValidated && !isValidMessage,
            'is-valid': wasValidated && isValidMessage
          }"
          placeholder="Mensaje..."
          v-model.trim="formInfo.message"
          row="50"
          required
        ></textarea>
        <label for="nombre">Mensaje</label>
        <small class="invalid-feedback">Campo requerido</small>
      </div>
      <div>
        <button class="btn btn-primary">Enviar</button>
      </div>
    </form>
  </div>
</template>
