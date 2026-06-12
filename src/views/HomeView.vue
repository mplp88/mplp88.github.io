<script setup>
import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import { getTranslation } from '@/i18n'

const languageStore = useLanguageStore()

const t = (key) => {
  return getTranslation(languageStore.language, key)
}
</script>

<template>
  <div class="container py-5">
    <!-- Hero -->
    <section class="text-center mb-5">
      <h1 class="display-4 fw-bold">{{ t('home.title') }}</h1>

      <p class="lead text-secondary mb-3">Senior Backend / Full Stack Developer</p>

      <p class="fs-5">.NET • Node.js • NestJS • Vue.js</p>

      <p class="col-lg-8 mx-auto">
        {{ t('home.description') }}
      </p>

      <div class="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <RouterLink to="/projects" class="btn btn-primary"> {{ t('home.projects') }} </RouterLink>

        <a :href="t('home.cvUrl')" target="_blank" class="btn btn-outline-secondary">
          {{ t('home.cv') }}
        </a>
      </div>
    </section>

    <!-- About -->
    <section class="mb-5">
      <h2 class="mb-4">{{ t('home.aboutMe') }}</h2>

      <div class="card">
        <div class="card-body">
          <p>
            {{ t('home.about1') }}
          </p>

          <p>
            {{ t('home.about2') }}
          </p>

          <p class="mb-0">
            {{ t('home.about3') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="mb-5">
      <h2 class="mb-4">{{ t('home.technologies') }}</h2>

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
              <h5 class="card-title">{{ t('home.databases') }}</h5>

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
      <h2>{{ t('home.cta') }}</h2>

      <p class="text-secondary">
        {{ t('home.ctaDescription') }}
      </p>

      <RouterLink to="/contact" class="btn btn-success"> {{ t('home.contactMe') }} </RouterLink>
    </section>
  </div>
</template>
