<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

import ImageModal from '@/components/shared/ImageModal.vue'

import homeImg from '@/assets/projects/professional-vue-landing-home.png'
import aboutImg from '@/assets/projects/professional-vue-landing-about.png'
import servicesImg from '@/assets/projects/professional-vue-landing-services.png'

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
      <h1 class="display-5 fw-bold mb-3">🎨 Professional Vue Landing Page</h1>

      <p class="lead">
        {{ t('projects.landingPageTemplate.shortDescription') }}
      </p>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.descriptionTitle') }}</h2>

    <p>
      {{ t('projects.landingPageTemplate.description.line1') }}
    </p>

    <p>
      {{ t('projects.landingPageTemplate.description.line2') }}
    </p>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.featuresTitle') }}</h2>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.landingPageTemplate.features.first.title') }}</h5>

            <p>{{ t('projects.landingPageTemplate.features.first.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.landingPageTemplate.features.second.title') }}</h5>

            <p>{{ t('projects.landingPageTemplate.features.second.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.landingPageTemplate.features.third.title') }}</h5>

            <p>{{ t('projects.landingPageTemplate.features.third.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.landingPageTemplate.features.fourth.title') }}</h5>

            <p>{{ t('projects.landingPageTemplate.features.fourth.description') }}</p>
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
        <small>Application</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="arch-box components">
        <i class="fa-solid fa-puzzle-piece mb-2"></i>
        <div class="fw-bold">Components</div>
        <small>Reusable UI</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="arch-box state">
        <i class="fa-solid fa-database mb-2"></i>
        <div class="fw-bold">Pinia</div>
        <small>State Management</small>
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
          :src="aboutImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Dashboard"
          @click="openImage(aboutImg)"
        />
      </div>
      <div class="col-md-4">
        <img
          :src="servicesImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Note Detail"
          @click="openImage(servicesImg)"
        />
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.usedTechnologiesTitle') }}</h2>

    <div class="d-flex flex-wrap gap-2">
      <span class="badge bg-success">Vue 3</span>
      <span class="badge bg-primary">Vite</span>
      <span class="badge bg-info text-dark">TailwindCSS</span>
      <span class="badge bg-secondary">Vue Router</span>
      <span class="badge bg-warning text-dark">Pinia</span>
      <span class="badge bg-dark">ESLint</span>
      <span class="badge bg-danger">Prettier</span>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.linksTitle') }}</h2>

    <div class="d-flex flex-wrap gap-3">
      <a
        href="https://professional-vue-landing.netlify.app/"
        target="_blank"
        class="btn btn-primary"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/mplp88/landing-page-template"
        target="_blank"
        class="btn btn-dark"
      >
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
