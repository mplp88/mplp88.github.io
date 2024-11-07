import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePokedexStore = defineStore('pokedex', () => {
  const cache = ref([])
  function addToCache(pokemon) {
    cache.value.push(pokemon)
  }
  function getFromCache(search) {
    const pokemon = cache.value.find((p) => {
      return p.id == search || p.name == search
    })
    return pokemon
  }

  return { cache, addToCache, getFromCache }
})
