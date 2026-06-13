export default {
  navbar: {
    home: 'Inicio',
    projects: 'Proyectos',
    contact: 'Contacto'
  },

  home: {
    title: 'Martín Alejandro Ponce',
    description:
      'Más de 10 años desarrollando aplicaciones empresariales, APIs y soluciones escalables para compañías nacionales e internacionales.',
    projects: 'Ver Proyectos',
    cv: 'Descargar CV',
    cvUrl: '/cv_es.pdf',
    aboutMe: 'Sobre mí',
    about: {
      line1:
        'Soy desarrollador Full Stack con más de 10 años de experiencia participando en proyectos de desarrollo, modernización y evolución de sistemas empresariales.',
      line2:
        'Mi foco principal está en el desarrollo backend utilizando .NET y Node.js, diseño de APIs REST, arquitecturas basadas en microservicios e integración de sistemas.',
      line3:
        'También cuento con experiencia en frontend utilizando Vue.js, trabajando junto a equipos multidisciplinarios en entornos ágiles.'
    },
    technologies: 'Tecnologías principales',
    databases: 'Bases de datos',
    cta: '¿Te interesa trabajar conmigo?',
    ctaDescription:
      'Actualmente me encuentro abierto a nuevas oportunidades como Backend o Full Stack Developer.',
    contactMe: 'Contactame'
  },

  projects: {
    viewProject: 'Ver proyecto',
    moreComing: 'Más proyectos próximamente',
    workInProgress:
      'Actualmente estoy incorporando nuevos proyectos personales y pruebas de concepto al portfolio.',
    descriptionTitle: 'Descripción',
    featuresTitle: 'Funcionalidad',
    architectureTitle: 'Arquitectura',
    screenshotsTitle: 'Capturas',
    usedTechnologiesTitle: 'Tecnologías utilizadas',
    linksTitle: 'Enlaces',
    freeGamesNotifier: {
      shortDescription:
        'Sistema de monitoreo y notificaciones automáticas para juegos gratuitos en Epic Games Store y Steam. Disponible para Telegram y Discord.',
      description: {
        line1:
          'Free Games Notifier es una aplicación desarrollada para detectar automáticamente videojuegos gratuitos disponibles por tiempo limitado en diferentes plataformas digitales.',
        line2:
          'El sistema consulta la API pública de Epic Games Store y realiza scraping automatizado sobre SteamDB para detectar nuevas promociones, almacenar los resultados y enviar notificaciones a los usuarios suscritos.'
      },
      features: {
        first: {
          title: '🔔 Notificaciones automáticas',
          description:
            'Detecta nuevas promociones y avisa automáticamente a los usuarios suscritos.'
        },
        second: {
          title: '🎮 Epic Games Store',
          description: 'Consulta la API oficial para obtener promociones activas y futuras.'
        },
        third: {
          title: '🚂 Steam',
          description:
            'Obtiene promociones gratuitas mediante scraping de SteamDB utilizando Puppeteer.'
        },
        fourth: {
          title: '🤖 Bots multiplataforma',
          description:
            'Integración con Telegram y Discord utilizando comandos slash y notificaciones personalizadas.'
        }
      }
    },
    secureNotes: {
      shortDescription:
        'Proof of Concept enfocada en seguridad, arquitectura limpia y dockerización completa. Permite almacenar notas encriptadas y gestionar usuarios autenticados.',
      description: {
        line1:
          'Secure Notes es una aplicación que permite a los usuarios registrarse, autenticarse y almacenar notas privadas de forma segura.',
        line2:
          'El proyecto fue desarrollado como una Proof of Concept para demostrar conocimientos en desarrollo Full Stack moderno, seguridad de aplicaciones, rendering en Next.js y arquitectura limpia en .NET.'
      },
      functionalities: {
        first: {
          title: '🔐 Autenticación',
          description:
            'Registro y login de usuarios utilizando almacenamiento seguro de credenciales.'
        },
        second: {
          title: '📝 Gestión de notas',
          description: 'Creación, visualización y administración de notas privadas.'
        },
        third: {
          title: '🔒 Encriptación',
          description: 'El contenido de las notas se almacena encriptado a nivel de aplicación.'
        },
        fourth: {
          title: '🐳 Docker',
          description: 'Todo el stack puede levantarse mediante Docker Compose.'
        }
      }
    }
  },

  contact: {
    title: 'Contacto',
    send: 'Enviar mensaje',
    interested:
      '¿Te interesa trabajar conmigo o querés conversar sobre algún proyecto? Podés escribirme utilizando el formulario o contactarme por cualquiera de estos medios.',
    cv: 'Descargar CV',
    form: {
      name: 'Nombre',
      subject: 'Asunto',
      message: 'Mensaje'
    }
  }
}
