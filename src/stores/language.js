import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const language = ref('es')

  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      language.value = savedLanguage
    } else {
      const browserLanguage = navigator.language.slice(0, 2)
      language.value = ['es', 'en'].includes(browserLanguage) ? browserLanguage : 'es'
    }
  }
  const setLanguage = (lang) => {
    language.value = lang
    localStorage.setItem('language', lang)
  }

  return {
    language,
    getInitialLanguage,
    setLanguage
  }
})
