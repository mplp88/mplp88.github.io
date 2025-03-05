<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import ChatBot from './components/shared/chatbot/ChatBot.vue'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  <main class="container" style="padding-bottom: 120px">
    <RouterView />
    <ChatBot></ChatBot>
  </main>
  <FooterComponent></FooterComponent>
</template>

<style scoped></style>
