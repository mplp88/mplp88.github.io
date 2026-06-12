<script setup>
import { ref } from 'vue'
import ImageModal from '@/components/shared/ImageModal.vue'

import homeImg from '@/assets/projects/secure-notes-home.png'
import loginImg from '@/assets/projects/secure-notes-login.png'
import exampleImg from '@/assets/projects/secure-notes-example.png'

const selectedImage = ref('')
const showModal = ref(false)

const openImage = (image) => {
  selectedImage.value = image
  showModal.value = true
}

const closeImage = () => {
  selectedImage.value = ''
  showModal.value = false
}
</script>

<template>
  <section class="py-5">
    <div class="container">
      <h1 class="display-5 fw-bold mb-3">🛡️ Secure Notes</h1>

      <p class="lead">
        Aplicación Full Stack desarrollada como Proof of Concept para demostrar buenas prácticas de
        seguridad, Clean Architecture y despliegue mediante Docker.
      </p>
    </div>
  </section>

  <section class="container mb-5">
    <h2>Descripción</h2>

    <p>
      Secure Notes es una aplicación que permite a los usuarios registrarse, autenticarse y
      almacenar notas privadas de forma segura.
    </p>

    <p>
      El proyecto fue desarrollado como una Proof of Concept para demostrar conocimientos en
      desarrollo Full Stack moderno, seguridad de aplicaciones, rendering en Next.js y arquitectura
      limpia en .NET.
    </p>
  </section>

  <section class="container mb-5">
    <h2>Funcionalidades</h2>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🔐 Autenticación</h5>

            <p>Registro y login de usuarios utilizando almacenamiento seguro de credenciales.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>📝 Gestión de notas</h5>

            <p>Creación, visualización y administración de notas privadas.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🔒 Encriptación</h5>

            <p>El contenido de las notas se almacena encriptado a nivel de aplicación.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🐳 Docker</h5>

            <p>Todo el stack puede levantarse mediante Docker Compose.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>Arquitectura</h2>

    <div class="row">
      <div class="col-6">
        <ul>
          <li>.NET 8 con Clean Architecture para el backend</li>
          <li>Next.js con TypeScript para el frontend</li>
          <li>SQL Server para la base de datos</li>
          <li>Docker para contenerización y despliegue</li>
        </ul>
      </div>
      <div class="col-6">
        <div class="architecture-diagram">
          <div class="arch-box frontend">
            <i class="fa-brands fa-react mb-2"></i>
            <div>Next.js</div>
          </div>

          <div class="arch-arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </div>

          <div class="arch-box backend">
            <i class="fa-solid fa-server mb-2"></i>
            <div>ASP.NET Core API</div>
          </div>

          <div class="arch-arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </div>

          <div class="arch-box database">
            <i class="fa-solid fa-database mb-2"></i>
            <div>SQL Server</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>Capturas</h2>

    <div class="row g-4">
      <div class="col-md-4">
        <img
          :src="homeImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Login"
          @click="openImage(homeImg)"
        />
      </div>
      <div class="col-md-4">
        <img
          :src="loginImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Dashboard"
          @click="openImage(loginImg)"
        />
      </div>
      <div class="col-md-4">
        <img
          :src="exampleImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Note Detail"
          @click="openImage(exampleImg)"
        />
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>Tecnologías utilizadas</h2>

    <div class="d-flex flex-wrap gap-2">
      <span class="badge bg-primary">.NET</span>
      <span class="badge bg-dark">Next.js</span>
      <span class="badge bg-info text-dark">TypeScript</span>
      <span class="badge bg-success">SQL Server</span>
      <span class="badge bg-secondary">Docker</span>
      <span class="badge bg-warning text-dark">Entity Framework Core</span>
      <span class="badge bg-danger">Zustand</span>
    </div>
  </section>

  <section class="container mb-5">
    <h2>Enlaces</h2>

    <div class="d-flex gap-3">
      <a href="https://github.com/mplp88/pon-secure-notes" target="_blank" class="btn btn-dark">
        GitHub
      </a>
    </div>
  </section>

  <ImageModal :show="showModal" :image="selectedImage" @close="closeImage" />
</template>

<style scoped>
.architecture-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.arch-box {
  width: 280px;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  font-weight: 500;
}

.arch-box i {
  font-size: 2rem;
}

.frontend {
  background-color: #f8f9fa;
}

.backend {
  background-color: #e7f1ff;
}

.database {
  background-color: #f1f8e9;
}

.arch-arrow {
  font-size: 1.5rem;
}
</style>
