<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
import ChatBot from './components/shared/chatbot/ChatBot.vue'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
languageStore.getInitialLanguage()
</script>

<template>
  <div class="app-container">
    <header>
      <NavBar></NavBar>
    </header>
    <main class="container content" style="padding-bottom: 120px">
      <RouterView />
      <ChatBot></ChatBot>
    </main>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
