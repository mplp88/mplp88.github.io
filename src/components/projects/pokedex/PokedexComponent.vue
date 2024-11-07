<script setup>
import { usePokedexStore } from '@/stores/pokedex'
import { ref } from 'vue'

const pokedexStore = usePokedexStore()
const pokeApiUrl = 'https://pokeapi.co/api/v2/'

const search = ref('')
const pokemon = ref({})
const abilities = ref({})
const loading = ref(false)

const getPokemon = async () => {
  loading.value = true
  let _pokemon = pokedexStore.getFromCache(search)

  if (!_pokemon) {
    console.log('Pokemon not found in cache. Fetching API')
    const res = await fetch(`${pokeApiUrl}/pokemon/${search.value}`)
    const json = await res.json()
    _pokemon = json
  }

  if (_pokemon.id) {
    pokemon.value = _pokemon
    console.log(_pokemon)
    _pokemon.abilities.forEach((ability) => {
      if (ability.is_hidden) {
        abilities.value.hidden = ability.ability
      } else {
        abilities.value[`slot${ability.slot}`] = ability.ability
      }
    })
  }
  loading.value = false
}
</script>

<template>
  <div class="row pt-3">
    <div class="col-6 offset-3">
      <form @submit.prevent="getPokemon">
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            placeholder="Buscar por numero o nombre..."
            v-model="search"
          />
          <button class="btn btn-primary">Buscar</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row pt-3">
    <div v-if="loading" class="alert alert-info">Cargando...</div>
    <div v-else class="col-6 offset-3">
      <div class="card text-center" v-if="pokemon.id">
        <div class="card-header">
          <h4>{{ pokemon.name }}</h4>
        </div>
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          class="card-img-top"
          alt="..."
        />
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Habilidades</strong>
          </li>
          <li class="list-group-item">{{ abilities.slot1.name }} {{ abilities.slot2?.name }}</li>
          <li class="list-group-item">{{ abilities.hidden.name }} (oculta)</li>
        </ul>
      </div>
    </div>
  </div>
</template>
