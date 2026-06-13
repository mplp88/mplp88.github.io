import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLanguageStore = defineStore('language', () => {
  const language = ref('en')

  const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage) {
      language.value = savedLanguage
    } else {
      const browserLanguage = navigator.language.slice(0, 2)
      language.value = ['es', 'en'].includes(browserLanguage) ? browserLanguage : 'en'
      setLanguage(language.value)
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
