<script setup></script>

<template>
  <div class="container py-5">
    <!-- Hero -->
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold">Martín Alejandro Ponce</h1>

      <p class="lead text-secondary mb-3">Senior Backend / Full Stack Developer</p>

      <p class="fs-5">.NET • Node.js • NestJS • Vue.js</p>

      <p class="col-lg-8 mx-auto">
        Más de 10 años desarrollando aplicaciones empresariales, APIs y soluciones escalables para
        compañías nacionales e internacionales.
      </p>

      <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <RouterLink to="/projects" class="btn btn-primary"> Ver Proyectos </RouterLink>

        <a href="/cv.pdf" target="_blank" class="btn btn-outline-secondary"> Descargar CV </a>
      </div>
    </section>

    <!-- About -->
    <section class="mb-5">
      <h2 class="mb-4">Sobre mí</h2>

      <div class="card">
        <div class="card-body">
          <p>
            Soy desarrollador Full Stack con más de 10 años de experiencia participando en proyectos
            de desarrollo, modernización y evolución de sistemas empresariales.
          </p>

          <p>
            Mi foco principal está en el desarrollo backend utilizando .NET y Node.js, diseño de
            APIs REST, arquitecturas basadas en microservicios e integración de sistemas.
          </p>

          <p class="mb-0">
            También cuento con experiencia en frontend utilizando Vue.js, trabajando junto a equipos
            multidisciplinarios en entornos ágiles.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="mb-5">
      <h2 class="mb-4">Tecnologías principales</h2>

      <div class="row g-4">
        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Backend</h5>

              <ul class="mb-0">
                <li>.NET</li>
                <li>ASP.NET Core</li>
                <li>Node.js</li>
                <li>NestJS</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Frontend</h5>

              <ul class="mb-0">
                <li>Vue.js</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>HTML / CSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Bases de Datos</h5>

              <ul class="mb-0">
                <li>SQL Server</li>
                <li>MongoDB</li>
                <li>Oracle</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-3">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">DevOps</h5>

              <ul class="mb-0">
                <li>Azure DevOps</li>
                <li>GitHub Actions</li>
                <li>Jenkins</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-5">
      <h2>¿Te interesa trabajar conmigo?</h2>

      <p class="text-secondary">
        Actualmente me encuentro abierto a nuevas oportunidades como Backend o Full Stack Developer.
      </p>

      <RouterLink to="/contact" class="btn btn-success"> Contactame </RouterLink>
    </section>
  </div>
</template>
