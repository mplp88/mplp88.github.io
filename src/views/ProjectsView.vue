<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1>Proyectos</h1>
  <div class="row row-cols-1 row-cols-lg-3 g-3">
    <div class="col col-md-4">
      <RouterLink
        to="/projects/todo-list"
        class="card shadow project"
        style="text-decoration: none"
      >
        <img src="/src/assets/todo_list.png" alt="Todo List Preview" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">Todo List</h4>
          <div class="card-text">Aplicación de lista de tareas con guardado en localStorage</div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
