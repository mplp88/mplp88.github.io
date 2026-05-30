<script setup>
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer class="bg-light text-center">
    <div class="my-2">Martín Alejandro Ponce</div>
    <div class="my-2">Senior Backend / Full Stack Developer</div>
    <div class="my-2">
      <a href="https://www.linkedin.com/in/mplp88/" target="_blank" style="color: #0e76a8">
        <i class="fa-brands fa-linkedin fa-xl"></i>
      </a>
      |
      <a href="https://www.github.com/mplp88" target="_blank" style="color: #171515">
        <i class="fa-brands fa-github fa-xl"></i>
      </a>
      |
      <a href="mailto:martin@martinponce.com.ar" style="color: #000">
        <i class="fa-solid fa-envelope fa-xl"></i>
      </a>
    </div>
    &copy; {{ year }}
  </footer>
</template>
