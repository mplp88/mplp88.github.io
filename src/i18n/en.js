export default {
  navbar: {
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact'
  },

  home: {
    title: 'Martín Alejandro Ponce',
    description:
      'More than 10 years of experience developing enterprise applications, APIs and scalable solutions for national and international companies.',
    projects: 'View Projects',
    cv: 'Download CV',
    cvUrl: '/cv_en.pdf',
    aboutMe: 'About Me',
    about: {
      line1:
        'I am a Full Stack developer with over 10 years of experience, specializing in the development and evolution of business applications and systems.',
      line2:
        'My main strength lies in backend development with .NET and Node.js, working on the design of REST APIs, scalable architectures, microservices, and systems integration.',
      line3:
        'I also have experience in frontend development with Vue.js, which allows me to participate in the development of end-to-end solutions and collaborate with multidisciplinary teams in agile environments.'
    },
    technologies: 'Main Technologies',
    databases: 'Databases',
    cta: 'Are you interested in working with me?',
    ctaDescription:
      'I am currently open to new opportunities as a Backend or Full Stack Developer.',
    contactMe: 'Contact Me'
  },

  projects: {
    viewProject: 'View project',
    viewGitHub: 'View GitHub',
    moreComing: '🚀 More Projects & Experiments on GitHub',
    workInProgress:
      'Beyond the featured projects showcased in this portfolio, I maintain public repositories with Proofs of Concept, templates, automation tools, and technical experiments built using a variety of technologies. Feel free to explore my GitHub profile to discover additional projects and see how I approach software development.',
    descriptionTitle: 'Description',
    featuresTitle: 'Features',
    architectureTitle: 'Architecture',
    screenshotsTitle: 'Screenshots',
    usedTechnologiesTitle: 'Used technologies',
    linksTitle: 'Links',
    freeGamesNotifier: {
      shortDescription:
        'Monitoring and automatic notification system for free games on the Epic Games Store and Steam. Available for Telegram and Discord.',
      description: {
        line1:
          'Free Games Notifier is an application developed to automatically detect free video games available for a limited time on different digital platforms.',
        line2:
          'The system queries the Epic Games Store public API and performs automated scraping on SteamDB to detect new promotions, store the results, and send notifications to subscribed users.'
      },
      features: {
        first: {
          title: '🔔 Automatic notifications',
          description: 'It detects new promotions and automatically notifies subscribed users.'
        },
        second: {
          title: '🎮 Epic Games Store',
          description: 'Check the official API for active and future promotions.'
        },
        third: {
          title: '🚂 Steam',
          description: 'Gets free promotions by scraping SteamDB using Puppeteer.'
        },
        fourth: {
          title: '🤖 Cross-platform bots',
          description:
            'Integration with Telegram and Discord using slash commands and custom notifications.'
        }
      }
    },
    secureNotes: {
      shortDescription:
        'Proof of Concept focused on security, clean architecture, and full Dockerization. It allows for storing encrypted notes and managing authenticated users.',
      description: {
        line1:
          'Secure Notes is an application that allows users to register, authenticate, and securely store private notes.',
        line2:
          'The project was developed as a Proof of Concept to demonstrate knowledge in modern Full Stack development, application security, rendering in Next.js, and clean architecture in .NET.'
      },
      features: {
        first: {
          title: '🔐 Authentication',
          description: 'User registration and login using secure credential storage.'
        },
        second: {
          title: '📝 Note management',
          description: 'Creating, viewing, and managing private notes.'
        },
        third: {
          title: '🔒 Encryption',
          description: 'The content of the notes is stored encrypted at the application level.'
        },
        fourth: {
          title: '🐳 Docker',
          description: 'The entire stack can be set up using Docker Compose.'
        }
      }
    },
    cleanUsersApi: {
      shortDescription:
        'RESTful User API built with .NET 8 and Clean Architecture, featuring Entity Framework Core, SQL Server, DTOs, AutoMapper and Swagger.',
      description: {
        line1:
          'Clean Users API is a RESTful Web API developed with .NET 8, designed to manage users through a complete CRUD while following Clean Architecture principles.',
        line2:
          'The project separates domain, application, infrastructure and API concerns, using Entity Framework Core for persistence, AutoMapper for DTO mapping and Swagger for API documentation.'
      },
      features: {
        first: {
          title: 'Clean Architecture',
          description:
            'The solution is divided into Domain, Application, Infrastructure and API layers, keeping responsibilities separated and reducing coupling between components.'
        },
        second: {
          title: 'Complete CRUD',
          description:
            'Provides REST endpoints to create, retrieve, update and delete users through a simple and consistent API.'
        },
        third: {
          title: 'Entity Framework Core',
          description:
            'Uses Entity Framework Core with SQL Server LocalDB for data persistence and database management through migrations.'
        },
        fourth: {
          title: 'DTOs & Mapping',
          description:
            'Uses Data Transfer Objects and AutoMapper to separate API contracts from domain entities and control the data exposed by the API.'
        }
      }
    },
    landingPageTemplate: {
      shortDescription:
        'Modern and responsive landing page template built with Vue 3, Vite and TailwindCSS, designed for portfolios, freelancers and business websites.',
      description: {
        line1:
          'Clean Users API is a RESTful Web API developed with .NET 8, designed to manage users through a complete CRUD while following Clean Architecture principles.',
        line2:
          'The project separates domain, application, infrastructure and API concerns, using Entity Framework Core for persistence, AutoMapper for DTO mapping and Swagger for API documentation.'
      },
      features: {
        first: {
          title: 'Responsive Design',
          description:
            'The solution is divided into Domain, Application, Infrastructure and API layers, keeping responsibilities separated and reducing coupling between components.'
        },
        second: {
          title: 'Reusable Components',
          description:
            'Provides REST endpoints to create, retrieve, update and delete users through a simple and consistent API.'
        },
        third: {
          title: 'TailwindCSS',
          description:
            'Uses Entity Framework Core with SQL Server LocalDB for data persistence and database management through migrations.'
        },
        fourth: {
          title: 'Easy Customization',
          description:
            'Uses Data Transfer Objects and AutoMapper to separate API contracts from domain entities and control the data exposed by the API.'
        }
      }
    },
    maternidadEmociones: {
      shortDescription:
        'Full-stack web application built with Vue 3 and Node.js for a real business, featuring a blog management system, authentication, image uploads and MongoDB.',
      description: {
        line1:
          'Maternidad y Emociones is a production full-stack web application developed for a real business, combining a Vue 3 frontend with a Node.js REST API and MongoDB database.',
        line2:
          'The platform allows the business owner to manage blog content, authenticate securely, upload images and publish new content without requiring technical knowledge. The application is deployed on Vercel and uses MongoDB Atlas and Cloudinary as external services.'
      },
      features: {
        first: {
          title: 'Gestión de contenidos',
          description:
            'The system allows you to create, edit and manage blog articles from within the application itself, making it easier for the client to publish new content.'
        },
        second: {
          title: 'Autenticación segura',
          description:
            'Implements JWT-based authentication and password hashing using bcrypt to protect administrative operations.'
        },
        third: {
          title: 'Gestión de imágenes',
          description:
            "Use Multer and Cloudinary to manage the uploading and storage of images used in the site's content."
        },
        fourth: {
          title: 'Arquitectura Full-Stack',
          description:
            'The frontend in Vue 3 communicates with a REST API developed with Node.js and Express, using MongoDB Atlas as the database.'
        }
      }
    }
  },
  contact: {
    title: 'Contact',
    send: 'Send message',
    interested:
      'Are you interested in working with me or would you like to discuss a project? You can write to me using the form or contact me through any of these means.',
    cv: 'Download CV',
    cvUrl: '/cv_en.pdf',
    location: 'Location',
    form: {
      name: 'Name',
      subject: 'Subject',
      message: 'Message'
    }
  }
}
