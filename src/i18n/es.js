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
        'Soy desarrollador Full Stack con más de 10 años de experiencia, especializado en el desarrollo y evolución de aplicaciones y sistemas empresariales.',
      line2:
        'Mi principal fortaleza está en el desarrollo backend con .NET y Node.js, trabajando en el diseño de APIs REST, arquitecturas escalables, microservicios e integración de sistemas.',
      line3:
        'También cuento con experiencia en frontend con Vue.js, lo que me permite participar en el desarrollo de soluciones de punta a punta y colaborar con equipos multidisciplinarios en entornos ágiles.'
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
    viewGitHub: 'Ver en GitHub',
    moreComing: '🚀 Más proyectos y experimentos en GitHub',
    workInProgress:
      'Además de los proyectos destacados de este portfolio, mantengo repositorios públicos con PoCs, templates, automatizaciones y experimentos técnicos desarrollados con distintas tecnologías. Podés explorar más proyectos y conocer mi forma de trabajar directamente en GitHub.',
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
      features: {
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
    },
    cleanUsersApi: {
      shortDescription:
        'API REST de usuarios desarrollada con .NET 8 y Clean Architecture, utilizando Entity Framework Core, SQL Server, DTOs, AutoMapper y Swagger.',

      description: {
        line1:
          'Clean Users API es una API REST desarrollada con .NET 8, diseñada para gestionar usuarios mediante un CRUD completo siguiendo los principios de Clean Architecture.',

        line2:
          'El proyecto separa las responsabilidades en las capas de Domain, Application, Infrastructure y API, utilizando Entity Framework Core para la persistencia de datos, AutoMapper para el mapeo de DTOs y Swagger para la documentación de la API.'
      },
      features: {
        first: {
          title: 'Clean Architecture',
          description:
            'La solución está dividida en las capas Domain, Application, Infrastructure y API, manteniendo las responsabilidades separadas y reduciendo el acoplamiento entre los componentes.'
        },
        second: {
          title: 'CRUD completo',
          description:
            'Proporciona endpoints REST para crear, consultar, actualizar y eliminar usuarios mediante una API simple y consistente.'
        },
        third: {
          title: 'Entity Framework Core',
          description:
            'Utiliza Entity Framework Core junto con SQL Server LocalDB para la persistencia de datos y la gestión de la base de datos mediante migraciones.'
        },

        fourth: {
          title: 'DTOs y mapeo',
          description:
            'Utiliza Data Transfer Objects y AutoMapper para separar los contratos de la API de las entidades de dominio y controlar los datos expuestos por la aplicación.'
        }
      }
    },
    landingPageTemplate: {
      shortDescription:
        'Template de landing page moderno y responsive desarrollado con Vue 3, Vite y TailwindCSS, diseñado para portfolios, freelancers y sitios web empresariales.',
      description: {
        line1:
          'Professional Vue Landing Page es un template de landing page moderno y responsive desarrollado con Vue 3, pensado como una base reutilizable para portfolios, sitios empresariales, productos SaaS y proyectos freelance.',
        line2:
          'El proyecto utiliza una estructura de componentes reutilizables y herramientas modernas del ecosistema Vue, facilitando su personalización, mantenimiento y despliegue en plataformas como Netlify o Vercel.'
      },
      features: {
        first: {
          title: 'Diseño Responsive',
          description:
            'La interfaz se adapta a diferentes tamaños de pantalla, ofreciendo una experiencia consistente en dispositivos de escritorio, tablets y móviles.'
        },
        second: {
          title: 'Componentes Reutilizables',
          description:
            'La interfaz está organizada mediante componentes reutilizables, facilitando el mantenimiento y permitiendo adaptar rápidamente el template a distintos proyectos.'
        },
        third: {
          title: 'TailwindCSS',
          description:
            'Utiliza TailwindCSS para construir una interfaz moderna y consistente mediante un sistema de clases utilitarias.'
        },
        fourth: {
          title: 'Fácil Personalización',
          description:
            'El template está pensado como una base flexible para proyectos freelance y sitios empresariales, permitiendo modificar rápidamente contenido, estilos y secciones.'
        }
      }
    },
    maternidadEmociones: {
      shortDescription:
        'Aplicación web full-stack desarrollada con Vue 3 y Node.js para un emprendimiento real, con gestión de contenidos, autenticación, carga de imágenes y MongoDB.',
      description: {
        line1:
          'Maternidad y Emociones es una aplicación web full-stack desarrollada para un emprendimiento real, combinando un frontend en Vue 3 con una API REST en Node.js y una base de datos MongoDB.',
        line2:
          'La plataforma permite gestionar contenidos del blog, autenticar usuarios, cargar imágenes y publicar nuevos artículos sin necesidad de conocimientos técnicos. La aplicación está desplegada en Vercel y utiliza MongoDB Atlas y Cloudinary como servicios externos.'
      },
      features: {
        first: {
          title: 'Gestión de contenidos',
          description:
            'El sistema permite crear, editar y gestionar los artículos del blog desde la propia aplicación, facilitando al cliente la publicación de nuevo contenido.'
        },
        second: {
          title: 'Autenticación segura',
          description:
            'Implementa autenticación basada en JWT y hash de contraseñas mediante bcrypt para proteger las operaciones administrativas.'
        },
        third: {
          title: 'Gestión de imágenes',
          description:
            'Utiliza Multer y Cloudinary para gestionar la carga y almacenamiento de imágenes utilizadas en los contenidos del sitio.'
        },
        fourth: {
          title: 'Arquitectura Full-Stack',
          description:
            'El frontend en Vue 3 se comunica con una API REST desarrollada con Node.js y Express, utilizando MongoDB Atlas como base de datos.'
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
    cvUrl: '/cv_es.pdf',
    location: 'Ubicación',
    form: {
      name: 'Nombre',
      subject: 'Asunto',
      message: 'Mensaje'
    }
  }
}
