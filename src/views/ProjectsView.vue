<script setup>
import { RouterLink } from 'vue-router'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

const languageStore = useLanguageStore()

const t = (key) => {
  return getTranslation(languageStore.language, key)
}
</script>

<template>
  <div class="row">
    <div class="col-10 offset-1 p-4 rounded">
      <div class="row g-4">
        <div class="col-md-6 col-xl-4">
          <div class="card shadow-sm h-100">
            <img
              src="@/assets/projects/free-games-notifier-cover.webp"
              class="card-img-top"
              alt="Free Games Notifier"
            />

            <div class="card-body d-flex flex-column">
              <h5 class="card-title">🎮 Free Games Notifier</h5>

              <p class="card-text">
                {{ t('projects.freeGamesNotifier.shortDescription') }}
              </p>

              <div class="mb-3">
                <span class="badge bg-primary me-1">Node.js</span>
                <span class="badge bg-secondary me-1">SQLite</span>
                <span class="badge bg-success me-1">Discord</span>
                <span class="badge bg-info text-dark me-1">Telegram</span>
                <span class="badge bg-dark">Puppeteer</span>
              </div>

              <RouterLink to="/projects/free-games-notifier" class="btn btn-primary mt-auto">
                {{ t('projects.viewProject') }}
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card shadow-sm h-100">
            <img
              src="@/assets/projects/secure-notes-cover.png"
              class="card-img-top"
              alt="Secure Notes"
            />

            <div class="card-body d-flex flex-column">
              <h5 class="card-title">🛡️ Secure Notes</h5>

              <p class="card-text">
                {{ t('projects.secureNotes.shortDescription') }}
              </p>

              <div class="mb-3">
                <span class="badge bg-primary me-1">.NET</span>
                <span class="badge bg-dark me-1">Next.js</span>
                <span class="badge bg-info text-dark me-1">TypeScript</span>
                <span class="badge bg-success me-1">SQL Server</span>
                <span class="badge bg-secondary">Docker</span>
              </div>

              <RouterLink to="/projects/secure-notes" class="btn btn-primary mt-auto">
                {{ t('projects.viewProject') }}
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card shadow-sm h-100 border-dashed">
            <div class="card-body d-flex flex-column text-center">
              <span class="my-4">
                <i class="fa-solid fa-code fa-3x text-secondary mb-3"></i>
              </span>

              <h5 class="card-title">{{ t('projects.moreComing') }}</h5>

              <p class="card-text text-secondary">
                {{ t('projects.workInProgress') }}
              </p>
              <a href="https://github.com/mplp88" target="_blank" class="btn btn-dark mt-auto">
                <i class="fa-brands fa-github me-2"></i>
                {{ t('projects.viewGitHub') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
