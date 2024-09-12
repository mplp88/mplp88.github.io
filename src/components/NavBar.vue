<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand">
    <a href="/" class="navbar-brand">mplp88.github.io</a>
    <div class="navbar-nav">
      <div class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink class="nav-link" to="/counter">Counter</RouterLink>
      </div>
      <div class="nav-item">
        <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
      </div>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"> Dropdown </a>
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
      <div class="nav-item">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </div>
    </div>
  </nav>
</template>
