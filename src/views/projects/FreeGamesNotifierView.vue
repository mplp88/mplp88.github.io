<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

import ImageModal from '@/components/shared/ImageModal.vue'

import freeGamesDiscordImg from '@/assets/projects/free-games-notifier-discord.png'
import freeGamesTelegramImg from '@/assets/projects/free-games-notifier-telegram.png'
import messageTelegramImg from '@/assets/projects/free-games-notifier-message.png'
import messageDiscordImg from '@/assets/projects/free-games-notifier-message-2.png'

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
  <!-- HERO -->
  <section class="py-5">
    <div class="container">
      <h1 class="display-5 fw-bold mb-3">🎮 Free Games Notifier</h1>

      <p class="lead">
        {{ t('projects.freeGamesNotifier.shortDescription') }}
      </p>
    </div>
  </section>

  <!-- DESCRIPTION -->
  <section class="container mb-5">
    <h2>{{ t('projects.descriptionTitle') }}</h2>

    <p>
      {{ t('projects.freeGamesNotifier.description.line1') }}
    </p>

    <p>
      {{ t('projects.freeGamesNotifier.description.line2') }}
    </p>
  </section>

  <!-- FEATURES -->
  <section class="container mb-5">
    <h2>{{ t('projects.featuresTitle') }}</h2>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.freeGamesNotifier.features.first.title') }}</h5>

            <p>{{ t('projects.freeGamesNotifier.features.first.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.freeGamesNotifier.features.second.title') }}</h5>

            <p>{{ t('projects.freeGamesNotifier.features.second.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.freeGamesNotifier.features.third.title') }}</h5>

            <p>{{ t('projects.freeGamesNotifier.features.third.description') }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>{{ t('projects.freeGamesNotifier.features.fourth.title') }}</h5>

            <p>
              {{ t('projects.freeGamesNotifier.features.fourth.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ARCHITECTURE -->
  <section class="container mb-5">
    <h2>{{ t('projects.architectureTitle') }}</h2>

    <ul>
      <li>Node.js</li>
      <li>Discord.js</li>
      <li>node-telegram-bot-api</li>
      <li>Puppeteer + Stealth Plugin</li>
      <li>SQLite</li>
      <li>Node Schedule</li>
      <li>Winston</li>
    </ul>
  </section>

  <!-- SCREENSHOTS -->
  <section class="container mb-5">
    <h2>{{ t('projects.screenshotsTitle') }}</h2>

    <div class="row g-4">
      <div class="col-md-4 screenshot">
        <img
          :src="freeGamesTelegramImg"
          class="img-fluid rounded"
          alt="Telegram Bot"
          @click="openImage(freeGamesTelegramImg)"
        />
        <p class="text-center">Telegram Bot</p>
      </div>

      <div class="col-md-4 screenshot">
        <img
          :src="freeGamesDiscordImg"
          class="img-fluid rounded shadow"
          alt="Discord Bot"
          @click="openImage(freeGamesDiscordImg)"
        />
        <p class="text-center">Discord Bot</p>
      </div>

      <div class="col-md-4">
        <div class="row">
          <div class="col-12 mb-3 screenshot">
            <img
              :src="messageTelegramImg"
              class="img-fluid rounded shadow"
              alt="Message example on Telegram"
              @click="openImage(messageTelegramImg)"
            />
            <p class="text-center">Message example on Telegram</p>
          </div>
          <div class="col-12 mb-3 screenshot">
            <img
              :src="messageDiscordImg"
              class="img-fluid rounded shadow"
              alt="Message example on Discord"
              @click="openImage(messageDiscordImg)"
            />
            <p class="text-center">Message example on Discord</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TECHNOLOGIES -->
  <section class="container mb-5">
    <h2>{{ t('projects.usedTechnologiesTitle') }}</h2>

    <div class="d-flex flex-wrap gap-2">
      <span class="badge bg-success">Node.js</span>
      <span class="badge bg-primary">Discord.js</span>
      <span class="badge bg-info text-dark">Telegram Bot API</span>
      <span class="badge bg-dark">Puppeteer</span>
      <span class="badge bg-secondary">SQLite</span>
      <span class="badge bg-warning text-dark">SteamDB</span>
      <span class="badge bg-danger">Epic Games API</span>
    </div>
  </section>

  <!-- LINKS -->
  <section class="container mb-5">
    <h2>{{ t('projects.linksTitle') }}</h2>

    <div class="d-flex flex-wrap gap-3">
      <a href="https://t.me/PonEpicNotifierBot" target="_blank" class="btn btn-info"> Telegram </a>

      <a
        href="https://discord.com/oauth2/authorize?client_id=1392490992476618792&permissions=84992&integration_type=0&scope=bot+applications.commands"
        target="_blank"
        class="btn btn-primary"
      >
        Discord
      </a>

      <a href="https://github.com/mplp88/free-games-notifier" target="_blank" class="btn btn-dark">
        GitHub
      </a>
    </div>
  </section>

  <ImageModal :show="showModal" :image="selectedImage" @close="closeImage" />
</template>
