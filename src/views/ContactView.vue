<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

const loading = ref(false)
const message = ref('')
const error = ref(false)
const wasValidated = ref(false)
const isValidName = ref(true)
const isValidEmail = ref(true)
const isValidMessage = ref(true)
const invalidEmailMessage = ref('Campo requerido')

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://portfolio-api.martinponce.com.ar'

const languageStore = useLanguageStore()

const t = (key) => {
  return getTranslation(languageStore.language, key)
}

const formInfo = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sendEmail = () => {
  if (!validate()) return

  wasValidated.value = false
  loading.value = true
  message.value = 'Cargando...'

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

      error.value = false
      message.value = 'Mensaje enviado correctamente.'
    })
    .catch((err) => {
      message.value = 'Error enviando el mensaje.'
      error.value = true
      console.error(`Error: ${err.message}`)
      console.error(`Data: ${err.data}`)
    })
    .finally(() => {
      loading.value = false
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

const dismissMessage = () => {
  message.value = ''
}
</script>

<template>
  <div class="container py-5">
    <div class="row g-5 align-items-start">
      <!-- Información -->
      <div class="col-lg-4">
        <h1 class="mb-3">{{ t('contact.title') }}</h1>

        <p class="text-secondary">
          {{ t('contact.interested') }}
        </p>

        <div class="card shadow-sm">
          <div class="card-body">
            <div class="mb-4 row">
              <div class="col-7">
                <h5>
                  <i class="fa-solid fa-envelope me-2"></i>
                  Email
                </h5>
              </div>
              <div class="col-5">
                <a href="/cv.pdf" target="_blank" class="btn btn-outline-primary w-100">
                  {{ t('contact.cv') }}
                </a>
              </div>
              <a href="mailto:martin@martinponce.com.ar" class="text-decoration-none">
                martin@martinponce.com.ar
              </a>
            </div>

            <div class="mb-4">
              <h5>
                <i class="fa-brands fa-linkedin me-2"></i>
                LinkedIn
              </h5>

              <a
                href="https://www.linkedin.com/in/mplp88/"
                target="_blank"
                class="text-decoration-none"
              >
                linkedin.com/in/mplp88
              </a>
            </div>

            <div class="mb-4">
              <h5>
                <i class="fa-brands fa-github me-2"></i>
                GitHub
              </h5>

              <a href="https://github.com/mplp88" target="_blank" class="text-decoration-none">
                github.com/mplp88
              </a>
            </div>

            <div>
              <h5>
                <i class="fa-solid fa-location-dot me-2"></i>
                Ubicación
              </h5>

              <span>Buenos Aires, Argentina</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <h3 class="mb-4">{{ t('contact.send') }}</h3>

            <form
              @submit.prevent="sendEmail"
              novalidate
              class="needs-validation"
              :class="{ 'was-validated': wasValidated }"
            >
              <div class="mb-3">
                <label class="form-label">{{ t('contact.form.name') }}</label>

                <input
                  type="text"
                  class="form-control"
                  v-model.trim="formInfo.name"
                  required
                  :disabled="loading"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>

                <input
                  type="email"
                  class="form-control"
                  v-model.trim="formInfo.email"
                  required
                  :disabled="loading"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">{{ t('contact.form.subject') }}</label>

                <input
                  type="text"
                  class="form-control"
                  v-model.trim="formInfo.subject"
                  required
                  :disabled="loading"
                />
              </div>

              <div class="mb-4">
                <label class="form-label">{{ t('contact.form.message') }}</label>

                <textarea
                  class="form-control"
                  rows="6"
                  v-model.trim="formInfo.message"
                  required
                  :disabled="loading"
                >
                </textarea>
              </div>

              <div class="row">
                <div class="col-6">
                  <button type="submit" class="btn btn-primary">{{ t('contact.send') }}</button>
                </div>
                <div class="col-6">
                  <div
                    v-if="message"
                    class="alert py-1 mb-0"
                    :class="{
                      'alert-danger': error,
                      'alert-success': !error,
                      'alert-info': loading
                    }"
                  >
                    {{ message }}
                    <span
                      v-if="!loading"
                      style="cursor: pointer; float: right"
                      @click="dismissMessage"
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
