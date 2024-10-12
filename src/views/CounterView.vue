<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <h1>Contador</h1>
  <h3>Esta contador guarda el estado con Pinia</h3>
  <p>Cuenta: {{ counterStore.count }}</p>
  <p>Cuenta doble: {{ counterStore.doubleCount }}</p>
  <button class="btn btn-primary" @click="counterStore.increment">Incrementar</button>
  <br />
</template>
