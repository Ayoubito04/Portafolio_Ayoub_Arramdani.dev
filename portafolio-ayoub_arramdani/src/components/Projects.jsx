import bytestoreCover from '../assets/bytestore-cover.png'
import gofightCover from '../assets/gofight-cover.png'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useSpotlight from '../hooks/useSpotlight'

const PROJECTS = [
  {
    title: 'Proyecto 1',
    desc: 'Descripción breve del proyecto. Sustituye este texto por tu propio proyecto.',
    tags: ['React', 'CSS'],
    links: [{ label: 'Ver proyecto', url: '#' }],
  },
  {
    title: 'GoFight',
    kind: 'App móvil · Proyecto grupal',
    year: '2026',
    // La captura ya incluye el marco del teléfono: se muestra entera, sin recortar.
    shot: 'phone',
    tint: 'rgba(225, 29, 47, 0.45)',
    desc: 'App móvil de fitness para boxeo y deportes de contacto: rutinas de entrenamiento, gamificación con rachas y puntos, ranking de usuarios y panel de administración. Proyecto grupal con React Native.',
    features: ['Rachas y puntos tipo Duolingo', 'API REST con +20 endpoints protegidos', 'Panel de administración'],
    tags: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    cover: gofightCover,
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
          <img src={project.cover} alt={`Captura de ${project.title}`} loading="lazy" />
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

  // Los proyectos sin portada se muestran al final como hueco pendiente,
  // para que no ocupen una fila destacada entre los que sí están terminados.
  const showcased = PROJECTS.filter((project) => project.cover)
  const pending = PROJECTS.filter((project) => !project.cover)

  return (
    <section id="proyectos" className="projects">
      <SectionHeading index="05" title="Proyectos" subtitle="Lo que he construido de principio a fin" />

      <div className="projects__list">
        {showcased.map((project, i) => (
          <ProjectShowcase
            key={project.title}
            project={project}
            index={i}
            flip={i % 2 === 1}
            onSpotlight={onSpotlight}
          />
        ))}
      </div>

      {pending.length > 0 && (
        <div className="projects__pending">
          {pending.map((project, i) => (
            <Reveal as="article" key={project.title} className="project-slot" delay={i * 90}>
              <span className="project-slot__plus" aria-hidden="true">
                +
              </span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
