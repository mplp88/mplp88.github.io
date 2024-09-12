<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <main>
    <h1>Counter</h1>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double count: {{ counterStore.doubleCount }}</p>
    <button class="btn btn-primary" @click="counterStore.increment">Increment</button>
    <br />
  </main>
</template>
