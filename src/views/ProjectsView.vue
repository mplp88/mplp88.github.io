<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Proyectos</h1>
  <div class="row">
    <div class="col-10 offset-1 col-md-6 offset-md-0 col-lg-4">
      <RouterLink
        to="/projects/todo-list"
        class="card shadow project"
        style="text-decoration: none"
      >
        <img src="/src/assets/todo_list.png" alt="Todo List Preview" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">Lista de tareas</h4>
          <div class="card-text">Aplicación de lista de tareas con guardado en localStorage</div>
        </div>
      </RouterLink>
    </div>
    <div class="col-10 offset-1 col-md-6 offset-md-0 col-lg-4">
      <RouterLink to="/projects/pokedex" class="card shadow project" style="text-decoration: none">
        <img src="" alt="Pokedex Preview" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">Pokedex</h4>
          <div class="card-text">Aplicación de Pokedex</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
