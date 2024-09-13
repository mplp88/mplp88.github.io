<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <header class="container-fluid">
    <NavBar></NavBar>
  </header>

  <RouterView class="container" />
  <footer class="container-fluid">
    <FooterComponent></FooterComponent>
  </footer>
</template>

<style scoped></style>
