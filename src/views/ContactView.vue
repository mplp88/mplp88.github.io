<script setup>
import { ref } from 'vue'
const loading = ref(false)
const messageSent = ref(false)
const error = ref('')
const wasValidated = ref(false)

const formInfo = ref({
  name: '',
  email: '',
  message: ''
})

const sendMessage = () => {
  if (!validate()) return

  wasValidated.value = false
  loading.value = true
  formInfo.value = {
    name: '',
    email: '',
    message: ''
  }

  setTimeout(() => {
    loading.value = false
    messageSent.value = true
  }, 500)
}

const validate = () => {
  wasValidated.value = true
  const { name, email, message } = formInfo.value

  return name && email && message
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
    <form
      class="needs-validation"
      :class="{ 'was-validated': wasValidated }"
      @submit.prevent="sendMessage"
      novalidate
    >
      <div class="form-floating mb-3">
        <input
          class="form-control"
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
          type="email"
          placeholder="Email"
          v-model.trim="formInfo.email"
          required
        />
        <label for="email">Email</label>
        <small class="invalid-feedback">Campo requerido</small>
      </div>
      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Mensaje..."
          v-model.trim="formInfo.message"
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
