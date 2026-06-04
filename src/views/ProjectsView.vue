<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="row">
    <div class="col-10 offset-1 p-4 rounded">
      <div class="row row-cols-md-3">
        <div class="col-sm-12col-md-4 mb-3">
          <div class="card shadow-sm">
            <img
              src="@/assets/projects/free-games-notifier-cover.webp"
              class="card-img-top"
              alt="Free Games Notifier"
            />

            <div class="card-body d-flex flex-column">
              <h5 class="card-title">🎮 Free Games Notifier</h5>

              <p class="card-text">
                Sistema de monitoreo y notificaciones automáticas para juegos gratuitos en Epic
                Games Store y Steam. Disponible para Telegram y Discord.
              </p>

              <div class="mb-3">
                <span class="badge bg-primary me-1">Node.js</span>
                <span class="badge bg-secondary me-1">SQLite</span>
                <span class="badge bg-success me-1">Discord</span>
                <span class="badge bg-info text-dark me-1">Telegram</span>
                <span class="badge bg-dark">Puppeteer</span>
              </div>

              <RouterLink to="/projects/free-games-notifier" class="btn btn-primary mt-auto">
                Ver proyecto
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
