<script setup>
import { RouterLink } from 'vue-router'
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
                Proof of Concept enfocada en seguridad, arquitectura limpia y dockerización
                completa. Permite almacenar notas encriptadas y gestionar usuarios autenticados.
              </p>

              <div class="mb-3">
                <span class="badge bg-primary me-1">.NET</span>
                <span class="badge bg-dark me-1">Next.js</span>
                <span class="badge bg-info text-dark me-1">TypeScript</span>
                <span class="badge bg-success me-1">SQL Server</span>
                <span class="badge bg-secondary">Docker</span>
              </div>

              <RouterLink to="/projects/secure-notes" class="btn btn-primary mt-auto">
                Ver proyecto
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xl-4">
          <div class="card shadow-sm h-100 border-dashed">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center text-center"
            >
              <i class="fa-solid fa-code fa-3x text-secondary mb-3"></i>

              <h5 class="card-title">Más proyectos próximamente</h5>

              <p class="card-text text-secondary">
                Actualmente estoy incorporando nuevos proyectos personales y pruebas de concepto al
                portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
