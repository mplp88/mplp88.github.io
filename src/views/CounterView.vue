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
  <p class="my-3">
    En este componente se puede ver como se guarda el estado del contador y se comparte entre
    distintos componente, en este caso, la barra de navegación también muesta el acumulado del
    contador, a la vez que los datos no se pieden al navegar entre vistas.
  </p>
  <p class="my-3">
    El contador doble se calcula en base al acumulado del contador y lo multiplica por 2
  </p>
</template>
