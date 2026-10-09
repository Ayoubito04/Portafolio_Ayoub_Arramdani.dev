import bytestoreCover from '../assets/bytestore-cover.png'
import gofightLogo from '../assets/GF Boxing Pulse Logo.png'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useLanguage from '../hooks/useLanguage'
import useSpotlight from '../hooks/useSpotlight'

const PROJECTS = [
  {
    title: 'Lampreas Violeta',
    kind: { es: 'App de escritorio · Proyecto DAM', en: 'Desktop app · DAM project' },
    year: '2025',
    // Sin captura disponible: se muestra el icono de la tecnología principal.
    shot: 'mark',
    markIcon: 'Java',
    tint: 'rgba(139, 92, 246, 0.45)',
    desc: {
      es: 'Sistema de gestión de una distribuidora con interfaz de escritorio en JavaFX: clientes con sus detalles, comerciales y repartidores. Primer proyecto del ciclo DAM, centrado en el acceso a datos con patrón DAO y doble persistencia.',
      en: 'Management system for a distributor with a JavaFX desktop interface: customers and their details, sales reps and delivery drivers. My first DAM project, focused on data access with the DAO pattern and dual persistence.',
    },
    features: {
      es: [
        'CRUD completo sobre PostgreSQL vía JDBC',
        'Patrón DAO y DAO Factory para aislar el acceso a datos',
        'Doble persistencia: base de datos y JSON con Jackson',
        'Vista JavaFX con TableView, formulario y búsqueda',
      ],
      en: [
        'Full CRUD over PostgreSQL via JDBC',
        'DAO and DAO Factory patterns to isolate data access',
        'Dual persistence: database and JSON with Jackson',
        'JavaFX view with TableView, form and search',
      ],
    },
    tags: ['Java', 'PostgreSQL'],
    links: [
      {
        label: { es: 'Ver repositorio', en: 'View repository' },
        url: 'https://github.com/Ayoubito04/Lampreas-Violeta',
      },
    ],
  },
  {
    title: 'GoFight',
    kind: { es: 'App móvil · Proyecto grupal', en: 'Mobile app · Team project' },
    year: '2026',
    badge: { es: 'TFG · Trabajo final de grado DAM', en: 'Final degree project · DAM' },
    // Logo de la app presentado como icono, sobre el halo rojo de su marca.
    shot: 'logo',
    tint: 'rgba(225, 29, 47, 0.5)',
    desc: {
      es: 'App móvil de fitness para boxeo y deportes de contacto: rutinas de entrenamiento, gamificación con rachas y puntos, ranking de usuarios y panel de administración. Proyecto grupal con React Native.',
      en: 'Fitness mobile app for boxing and contact sports: training routines, gamification with streaks and points, user rankings and an admin panel. Team project built with React Native.',
    },
    features: {
      es: [
        'Rachas y puntos tipo Duolingo',
        'Inicio de sesión con Google',
        'API REST con +20 endpoints protegidos',
        'Panel de administración',
        'API desplegada en Render y APK distribuida con Expo Go',
      ],
      en: [
        'Duolingo-style streaks and points',
        'Sign in with Google',
        'REST API with 20+ protected endpoints',
        'Admin panel',
        'API deployed on Render and APK distributed with Expo Go',
      ],
    },
    tags: [
      'React Native',
      'Expo Go',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Prisma',
      'Google OAuth',
      'Render',
    ],
    cover: gofightLogo,
    links: [
      {
        label: { es: 'Ver portafolio', en: 'View portfolio' },
        url: 'https://proyecto2-react-8ed4-two.vercel.app/',
      },
      { label: { es: 'Repo GitHub', en: 'GitHub repo' }, url: 'https://github.com/Ayoubito04/GoFight' },
    ],
  },
  {
    title: 'Byte Store',
    kind: { es: 'Web fullstack', en: 'Full stack web' },
    year: '2026',
    // Captura de navegador sin cromo: se enmarca en una ventana.
    shot: 'browser',
    tint: 'rgba(109, 92, 255, 0.45)',
    desc: {
      es: 'Proyecto final del Máster de Desarrollo de Aplicaciones Web: galería de videojuegos fullstack con catálogo, biblioteca personal, reviews y autenticación JWT.',
      en: 'Final project of the Web Application Development Master: a full stack video game gallery with a catalog, personal library, reviews and JWT authentication.',
    },
    features: {
      es: ['Catálogo y biblioteca personal', 'Reviews de usuarios', 'Autenticación con JWT'],
      en: ['Catalog and personal library', 'User reviews', 'JWT authentication'],
    },
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    cover: bytestoreCover,
    featured: true,
    badge: { es: 'Proyecto final de máster', en: "Master's final project" },
    links: [
      {
        label: { es: 'Ver demo', en: 'View demo' },
        url: 'https://byte-store-frontend-git-master-ayoubs-projects-8755d914.vercel.app/',
      },
      { label: { es: 'Repo frontend', en: 'Frontend repo' }, url: 'https://github.com/Ayoubito04/ByteStore-Frontend' },
      { label: { es: 'Repo backend', en: 'Backend repo' }, url: 'https://github.com/Ayoubito04/ByteStore-Backend' },
    ],
  },
]

/** Dominio legible para la barra de la ventana del navegador. */
function hostnameOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return 'localhost'
  }
}

function ProjectShowcase({ project, index, flip, onSpotlight }) {
  const { t } = useLanguage()
  const [primaryLink, ...secondaryLinks] = project.links

  return (
    <Reveal
      as="article"
      delay={index * 90}
      onMouseMove={onSpotlight}
      className={[
        'project-showcase',
        flip && 'project-showcase--flip',
        project.featured && 'project-showcase--featured',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--tint': project.tint }}
    >
      <div className="project-showcase__media">
        <span className="project-showcase__glow" aria-hidden="true" />

        <a
          href={primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`shot shot--${project.shot}`}
          aria-label={t({ es: `Abrir ${project.title}`, en: `Open ${project.title}` })}
        >
          {project.shot === 'browser' && (
            <span className="shot__chrome" aria-hidden="true">
              <span className="shot__dots">
                <i />
                <i />
                <i />
              </span>
              <span className="shot__url">{hostnameOf(primaryLink.url)}</span>
            </span>
          )}

          {project.shot === 'mark' ? (
            <TechIcon name={project.markIcon} className="shot__mark" />
          ) : (
            <img
              src={project.cover}
              alt={
                project.shot === 'logo'
                  ? t({ es: `Logo de ${project.title}`, en: `${project.title} logo` })
                  : t({ es: `Captura de ${project.title}`, en: `${project.title} screenshot` })
              }
              loading="lazy"
            />
          )}
        </a>
      </div>

      <div className="project-showcase__body">
        <div className="project-showcase__meta">
          <span className="project-showcase__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-showcase__kind">{t(project.kind)}</span>
          {project.year && <span className="project-showcase__year">{project.year}</span>}
        </div>

        {project.badge && <span className="project-showcase__badge">★ {t(project.badge)}</span>}

        <h3>{project.title}</h3>
        <p className="project-showcase__desc">{t(project.desc)}</p>

        {project.features && (
          <ul className="project-showcase__features">
            {t(project.features).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <ul className="project-showcase__tags chip-row">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              <TechIcon name={tag} className="chip__icon" />
              {tag}
            </li>
          ))}
        </ul>

        <div className="project-showcase__actions">
          <a href={primaryLink.url} className="btn btn--accent" target="_blank" rel="noopener noreferrer">
            {t(primaryLink.label)}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>

          {secondaryLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              className="project-showcase__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t(link.label)}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function Projects() {
  const onSpotlight = useSpotlight()
  const { t } = useLanguage()

  return (
    <section id="proyectos" className="projects">
      <SectionHeading
        index="05"
        title={t({ es: 'Proyectos', en: 'Projects' })}
        subtitle={t({ es: 'Lo que he construido de principio a fin', en: "What I've built from start to finish" })}
      />

      <div className="projects__list">
        {PROJECTS.map((project, i) => (
          <ProjectShowcase
            key={project.title}
            project={project}
            index={i}
            flip={i % 2 === 1}
            onSpotlight={onSpotlight}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
