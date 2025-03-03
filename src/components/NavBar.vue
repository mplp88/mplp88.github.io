<script setup>
import { RouterLink } from 'vue-router'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'
import { useCounterStore } from '@/stores/counter'

const collapse = () => {
  if (window.innerWidth <= 992) {
    const menuToggle = document.getElementById('navbarCollapse')
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, { toggle: false })
    bsCollapse.toggle()
  }
}
const counterStore = useCounterStore()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Portfolio Martín Ponce</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav">
        <div class="nav-item">
          <RouterLink class="nav-link" @click="collapse" to="/">Inicio</RouterLink>
        </div>
        <div class="nav-item">
          <RouterLink class="nav-link" @click="collapse" to="/counter"
            >Contador <span v-if="counterStore.count">({{ counterStore.count }})</span></RouterLink
          >
        </div>
        <div class="nav-item">
          <RouterLink class="nav-link" @click="collapse" to="/projects">Proyectos</RouterLink>
        </div>
        <!-- nav dropdown example 
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Desplegable</a>
        <ul class="dropdown-menu">
          <li class="dropdown-item">
            <a class="nav-link">Item</a>
          </li>
          <li class="dropdown-item">
            <a class="nav-link">Item</a>
          </li>
          <li class="dropdown-item">
            <a class="nav-link">Item</a>
          </li>
        </ul>
      </div>
      -->
        <div class="nav-item">
          <RouterLink class="nav-link" @click="collapse" to="/contact">Contacto</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
