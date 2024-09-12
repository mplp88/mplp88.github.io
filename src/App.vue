<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView class="container" />
</template>

<style scoped></style>
