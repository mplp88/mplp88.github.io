<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand">
    <a href="/" class="navbar-brand">mplp88.github.io</a>
    <div class="navbar-nav">
      <div class="nav-item">
        <RouterLink class="nav-link" to="/">Inicio</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink class="nav-link" to="/counter">Contador</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink class="nav-link" to="/projects">Proyectos</RouterLink>
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
        <RouterLink class="nav-link" to="/contact">Contacto</RouterLink>
      </div>
    </div>
  </nav>
</template>
