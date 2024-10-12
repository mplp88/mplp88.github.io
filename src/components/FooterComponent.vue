<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer class="container-fluid fixed-bottom bg-light">
    <hr />
    <div class="row my-2">
      <div class="col-12 text-center">&copy; Copyright Martín Ponce - {{ year }}</div>
    </div>
    <div class="row my-2">
      <div class="col-2 offset-4 text-center">
        <a href="https://www.linkedin.com/in/mplp88/" target="_blank" style="color: #0e76a8">
          <i class="fa-brands fa-linkedin fa-xl"></i>
        </a>
      </div>
      <div class="col-2 text-center">
        <a href="https://www.github.com/mplp88" target="_blank" style="color: #171515">
          <i class="fa-brands fa-github fa-xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>
