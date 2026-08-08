<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

import ImageModal from '@/components/shared/ImageModal.vue'

import homeImg from '@/assets/projects/clean-users-api-swagger.png'
// import loginImg from '@/assets/projects/secure-notes-login.png'
// import exampleImg from '@/assets/projects/secure-notes-example.png'

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
      <h1 class="display-5 fw-bold mb-3">🧱 Clean Users Api</h1>

      <p class="lead">
        {{ t('projects.cleanUsersApi.shortDescription') }}
      </p>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.descriptionTitle') }}</h2>

    <p>
      {{ t('projects.cleanUsersApi.description.line1') }}
    </p>

    <p>
      {{ t('projects.cleanUsersApi.description.line2') }}
    </p>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.featuresTitle') }}</h2>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.cleanUsersApi.features.first.title') }}</h5>

            <p>{{ t('projects.cleanUsersApi.features.first.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.cleanUsersApi.features.second.title') }}</h5>

            <p>{{ t('projects.cleanUsersApi.features.second.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.cleanUsersApi.features.third.title') }}</h5>

            <p>{{ t('projects.cleanUsersApi.features.third.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.cleanUsersApi.features.fourth.title') }}</h5>

            <p>{{ t('projects.cleanUsersApi.features.fourth.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.architectureTitle') }}</h2>

    <div class="architecture-diagram">
      <div class="arch-box api">
        <i class="fa-solid fa-globe mb-2"></i>
        <div>API</div>
        <small>ASP.NET Core</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="arch-box application">
        <i class="fa-solid fa-layer-group mb-2"></i>
        <div>Application</div>
        <small>DTOs · Services · Interfaces</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="arch-box domain">
        <i class="fa-solid fa-cube mb-2"></i>
        <div>Domain</div>
        <small>Entities · Business Rules</small>
      </div>

      <div class="arch-arrow">
        <i class="fa-solid fa-arrow-down"></i>
      </div>

      <div class="arch-box infrastructure">
        <i class="fa-solid fa-database mb-2"></i>
        <div>Infrastructure</div>
        <small>EF Core · SQL Server</small>
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
      <!-- <div class="col-md-4">
        <img
          :src="loginImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Dashboard"
          @click="openImage(loginImg)"
        />
      </div> -->
      <!-- <div class="col-md-4">
        <img
          :src="exampleImg"
          class="img-fluid rounded shadow-sm screenshot"
          alt="Secure Notes - Note Detail"
          @click="openImage(exampleImg)"
        />
      </div> -->
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.usedTechnologiesTitle') }}</h2>

    <div class="d-flex flex-wrap gap-2">
      <span class="badge bg-primary">.NET 8</span>
      <span class="badge bg-secondary">C#</span>
      <span class="badge bg-success">ASP.NET Core</span>
      <span class="badge bg-info text-dark">Entity Framework Core</span>
      <span class="badge bg-dark">SQL Server</span>
      <span class="badge bg-warning text-dark">AutoMapper</span>
      <span class="badge bg-danger">Swagger</span>
    </div>
  </section>

  <section class="container mb-5">
    <h2>{{ t('projects.linksTitle') }}</h2>

    <div class="d-flex gap-3">
      <a href="https://github.com/mplp88/CleanUsersApi" target="_blank" class="btn btn-dark">
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
