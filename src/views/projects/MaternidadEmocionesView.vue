<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

import ImageModal from '@/components/shared/ImageModal.vue'

import homeImg from '@/assets/projects/maternidad-emociones-home.png'
import loginImg from '@/assets/projects/maternidad-emociones-about.png'
import exampleImg from '@/assets/projects/maternidad-emociones-blog.png'

const languageStore = useLanguageStore()

const t = (key) => {
  return getTranslation(languageStore.language, key)
}

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
      <h1 class="display-5 fw-bold mb-3">💜 Maternidad y Emociones</h1>

      <p class="lead">
        {{ t('projects.maternidadEmociones.shortDescription') }}
      </p>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.descriptionTitle') }}</h2>

    <p>
      {{ t('projects.maternidadEmociones.description.line1') }}
    </p>

    <p>
      {{ t('projects.maternidadEmociones.description.line2') }}
    </p>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.featuresTitle') }}</h2>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.maternidadEmociones.features.first.title') }}</h5>

            <p>{{ t('projects.maternidadEmociones.features.first.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.maternidadEmociones.features.second.title') }}</h5>

            <p>{{ t('projects.maternidadEmociones.features.second.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.maternidadEmociones.features.third.title') }}</h5>

            <p>{{ t('projects.maternidadEmociones.features.third.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.maternidadEmociones.features.fourth.title') }}</h5>

            <p>{{ t('projects.maternidadEmociones.features.fourth.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.architectureTitle') }}</h2>

    <div class="architecture-diagram">
      <div class="arch-box frontend">
        <i class="fa-brands fa-vuejs mb-2"></i>
        <div class="fw-bold">Vue 3</div>
        <small>Frontend · Vercel</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="arch-box backend">
        <i class="fa-solid fa-server mb-2"></i>
        <div class="fw-bold">Node.js + Express</div>
        <small>REST API · Vercel</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="d-flex flex-wrap justify-content-center gap-4">
        <div class="arch-box database">
          <i class="fa-solid fa-database mb-2"></i>
          <div class="fw-bold">MongoDB Atlas</div>
          <small>Database</small>
        </div>

        <div class="arch-box storage">
          <i class="fa-solid fa-images mb-2"></i>
          <div class="fw-bold">Cloudinary</div>
          <small>Image Storage</small>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.screenshotsTitle') }}</h2>

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
    <h2>{{ t('projects.usedTechnologiesTitle') }}</h2>

    <div class="d-flex flex-wrap gap-2">
      <span class="badge bg-success">Vue 3</span>
      <span class="badge bg-primary">Node.js</span>
      <span class="badge bg-secondary">Express</span>
      <span class="badge bg-info text-dark">MongoDB</span>
      <span class="badge bg-warning text-dark">Mongoose</span>
      <span class="badge bg-dark">JWT</span>
      <span class="badge bg-danger">Cloudinary</span>
      <span class="badge bg-primary">Vercel</span>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.linksTitle') }}</h2>

    <div class="d-flex flex-wrap gap-3">
      <a href="https://maternidadyemociones.com.ar" target="_blank" class="btn btn-primary">
        Live Demo
      </a>

      <a
        href="https://github.com/mplp88/maternidad-y-emociones"
        target="_blank"
        class="btn btn-dark"
      >
        Frontend · GitHub
      </a>

      <a
        href="https://github.com/mplp88/maternidad-y-emociones-api"
        target="_blank"
        class="btn btn-secondary"
      >
        Backend · GitHub
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
