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
        'I am a Full Stack developer with over 10 years of experience participating in development, modernization and evolution projects of enterprise systems.',
      line2:
        'My main focus is on backend development using .NET and Node.js, REST API design, microservices-based architectures and system integration.',
      line3:
        'I also have experience in frontend development using Vue.js, working alongside multidisciplinary teams in agile environments.'
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
    moreComing: 'More projects coming',
    workInProgress:
      'I am currently adding new personal projects and proofs of concept to my portfolio.',
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
    }
  },

  contact: {
    title: 'Contact',
    send: 'Send message',
    interested:
      'Are you interested in working with me or would you like to discuss a project? You can write to me using the form or contact me through any of these means.',
    cv: 'Download CV',
    form: {
      name: 'Name',
      subject: 'Subject',
      message: 'Message'
    }
  }
}
