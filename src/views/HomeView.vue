<script setup>
import { ref } from 'vue'

const name = ref('')
const greeting = () => {
  let greeting = 'Hola'

  if (name.value) {
    greeting += `, ${name.value}`
  }

  greeting += '!'
  return greeting
}
</script>

<template>
  <h1>Inicio</h1>
  <h3>Prueba de reactividad</h3>
  <div class="row mb-3">
    <div class="col-lg-4 col-sm-12">
      <input class="form-control" v-model="name" placeholder="Ingrese su nombre" />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4 col-sm-12">
      <h3>{{ greeting() }}</h3>
      <p>
        Bienvenido a mi página de portfolio, en ella encontrará algunos proyectos en los que estoy o
        estuve trabajando, así como también una opción para ponerse en contacto conmigo
      </p>
      <p>
        Utilice la barra de navegación de arriba para poder navegar libremente por la página,
        disfrute de su estadía
      </p>
    </div>
  </div>
</template>
