<script setup></script>

<template>
  <!-- HERO -->
  <section class="py-5">
    <div class="container">
      <h1 class="display-5 fw-bold mb-3">🎮 Free Games Notifier</h1>

      <p class="lead">
        Plataforma de monitoreo automático de ofertas gratuitas en Epic Games Store y Steam con
        notificaciones en Telegram y Discord.
      </p>
    </div>
  </section>

  <!-- DESCRIPTION -->
  <section class="container mb-5">
    <h2>Descripción</h2>

    <p>
      Free Games Notifier es una aplicación desarrollada para detectar automáticamente videojuegos
      gratuitos disponibles por tiempo limitado en diferentes plataformas digitales.
    </p>

    <p>
      El sistema consulta la API pública de Epic Games Store y realiza scraping automatizado sobre
      SteamDB para detectar nuevas promociones, almacenar los resultados y enviar notificaciones a
      los usuarios suscritos.
    </p>
  </section>

  <!-- FEATURES -->
  <section class="container mb-5">
    <h2>Funcionalidades</h2>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🔔 Notificaciones automáticas</h5>

            <p>Detecta nuevas promociones y avisa automáticamente a los usuarios suscritos.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🎮 Epic Games Store</h5>

            <p>Consulta la API oficial para obtener promociones activas y futuras.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🚂 Steam</h5>

            <p>Obtiene promociones gratuitas mediante scraping de SteamDB utilizando Puppeteer.</p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h5>🤖 Bots multiplataforma</h5>

            <p>
              Integración con Telegram y Discord utilizando comandos slash y notificaciones
              personalizadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ARCHITECTURE -->
  <section class="container mb-5">
    <h2>Arquitectura</h2>

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
    <h2>Capturas</h2>

    <div class="row g-4">
      <div class="col-md-4">
        <img
          src="@/assets/projects/free-games-notifier-telegram.png"
          class="img-fluid rounded"
          alt="Telegram Bot"
        />
        <p class="text-center">Telegram Bot</p>
      </div>

      <div class="col-md-4">
        <img
          src="@/assets/projects/free-games-notifier-discord.png"
          class="img-fluid rounded shadow"
          alt="Discord Bot"
        />
        <p class="text-center">Discord Bot</p>
      </div>

      <div class="col-md-4">
        <div class="row">
          <div class="col-12 mb-3">
            <img
              src="@/assets/projects/free-games-notifier-message.png"
              class="img-fluid rounded shadow"
              alt="Message example on Telegram"
            />
            <p class="text-center">Message example on Telegram</p>
          </div>
          <div class="col-12 mb-3">
            <img
              src="@/assets/projects/free-games-notifier-message-2.png"
              class="img-fluid rounded shadow"
              alt="Message example on Discord"
            />
            <p class="text-center">Message example on Discord</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TECHNOLOGIES -->
  <section class="container mb-5">
    <h2>Tecnologías utilizadas</h2>

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
    <h2>Enlaces</h2>

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
</template>
