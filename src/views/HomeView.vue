<script setup>
import { ref } from 'vue'

const name = ref('World')
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
    <h3>Prueba de reactividad</h3>
    <div class="row mb-3">
      <div class="col-lg-4 col-sm-12">
        <input class="form-control" v-model="name" placeholder="Ingrese su nombre" />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <p>{{ greeting() }}</p>
      </div>
    </div>
  </main>
</template>
