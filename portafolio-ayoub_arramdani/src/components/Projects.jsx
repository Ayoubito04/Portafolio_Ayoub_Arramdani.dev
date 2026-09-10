import bytestoreCover from '../assets/bytestore-cover.png'
import gofightLogo from '../assets/GF Boxing Pulse Logo.png'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useSpotlight from '../hooks/useSpotlight'

const PROJECTS = [
  {
    title: 'Lampreas Violeta',
    kind: 'App de escritorio · Proyecto DAM',
    year: '2025',
    // Sin captura disponible: se muestra el icono de la tecnología principal.
    shot: 'mark',
    markIcon: 'Java',
    tint: 'rgba(139, 92, 246, 0.45)',
    desc: 'Sistema de gestión de una distribuidora con interfaz de escritorio en JavaFX: clientes con sus detalles, comerciales y repartidores. Primer proyecto del ciclo DAM, centrado en el acceso a datos con patrón DAO y doble persistencia.',
    features: [
      'CRUD completo sobre PostgreSQL vía JDBC',
      'Patrón DAO y DAO Factory para aislar el acceso a datos',
      'Doble persistencia: base de datos y JSON con Jackson',
      'Vista JavaFX con TableView, formulario y búsqueda',
    ],
    tags: ['Java', 'PostgreSQL'],
    links: [{ label: 'Ver repositorio', url: 'https://github.com/Ayoubito04/Lampreas-Violeta' }],
  },
  {
    title: 'GoFight',
    kind: 'App móvil · Proyecto grupal',
    year: '2026',
    badge: 'TFG · Trabajo final de grado DAM',
    // Logo de la app presentado como icono, sobre el halo rojo de su marca.
    shot: 'logo',
    tint: 'rgba(225, 29, 47, 0.5)',
    desc: 'App móvil de fitness para boxeo y deportes de contacto: rutinas de entrenamiento, gamificación con rachas y puntos, ranking de usuarios y panel de administración. Proyecto grupal con React Native.',
    features: [
      'Rachas y puntos tipo Duolingo',
      'Inicio de sesión con Google',
      'API REST con +20 endpoints protegidos',
      'Panel de administración',
      'API desplegada en Render y APK distribuida con Expo Go',
    ],
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
      { label: 'Ver portafolio', url: 'https://proyecto2-react-8ed4-two.vercel.app/' },
      { label: 'Repo GitHub', url: 'https://github.com/Ayoubito04/GoFight' },
    ],
  },
  {
    title: 'Byte Store',
    kind: 'Web fullstack',
    year: '2026',
    // Captura de navegador sin cromo: se enmarca en una ventana.
    shot: 'browser',
    tint: 'rgba(109, 92, 255, 0.45)',
    desc: 'Proyecto final del Máster de Desarrollo de Aplicaciones Web: galería de videojuegos fullstack con catálogo, biblioteca personal, reviews y autenticación JWT.',
    features: ['Catálogo y biblioteca personal', 'Reviews de usuarios', 'Autenticación con JWT'],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    cover: bytestoreCover,
    featured: true,
    badge: 'Proyecto final de máster',
    links: [
      { label: 'Ver demo', url: 'https://byte-store-frontend-git-master-ayoubs-projects-8755d914.vercel.app/' },
      { label: 'Repo frontend', url: 'https://github.com/Ayoubito04/ByteStore-Frontend' },
      { label: 'Repo backend', url: 'https://github.com/Ayoubito04/ByteStore-Backend' },
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
          aria-label={`Abrir ${project.title}`}
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
              alt={project.shot === 'logo' ? `Logo de ${project.title}` : `Captura de ${project.title}`}
              loading="lazy"
            />
          )}
        </a>
      </div>

      <div className="project-showcase__body">
        <div className="project-showcase__meta">
          <span className="project-showcase__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-showcase__kind">{project.kind}</span>
          {project.year && <span className="project-showcase__year">{project.year}</span>}
        </div>

        {project.badge && <span className="project-showcase__badge">★ {project.badge}</span>}

        <h3>{project.title}</h3>
        <p className="project-showcase__desc">{project.desc}</p>

        {project.features && (
          <ul className="project-showcase__features">
            {project.features.map((feature) => (
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
            {primaryLink.label}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>

          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="project-showcase__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
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

  return (
    <section id="proyectos" className="projects">
      <SectionHeading index="05" title="Proyectos" subtitle="Lo que he construido de principio a fin" />

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
