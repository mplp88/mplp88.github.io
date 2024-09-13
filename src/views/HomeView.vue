<script setup>
import { ref } from 'vue'

const name = ref('')
const greeting = () => {
  let greeting = 'Hello'

  if (name.value) {
    greeting += `, ${name.value}`
  }

  greeting += '!'
  return greeting
}
</script>

<template>
  <main>
    <h1>Inicio</h1>
    <h3>Prueba de ractividad</h3>
    <div class="row mb-3">
      <div class="col-6">
        <input class="form-control" v-model="name" placeholder="Ingrese su nombre" />
      </div>
    </div>
    <p>{{ greeting() }}</p>
  </main>
</template>
