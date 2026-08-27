import bytestoreCover from '../assets/bytestore-cover.png'
import Reveal from './Reveal'
import TechIcon from './TechIcon'

const PROJECTS = [
  {
    title: 'Proyecto 1',
    desc: 'Descripción breve del proyecto. Sustituye este texto por tu propio proyecto.',
    tags: ['React', 'CSS'],
    links: [{ label: 'Ver proyecto', url: '#' }],
  },
  {
    title: 'Proyecto 2',
    desc: 'Descripción breve del proyecto. Sustituye este texto por tu propio proyecto.',
    tags: ['JavaScript', 'HTML'],
    links: [{ label: 'Ver proyecto', url: '#' }],
  },
  {
    title: 'Byte Store',
    desc: 'Proyecto final del Máster de Desarrollo de Aplicaciones Web: galería de videojuegos fullstack con catálogo, biblioteca personal, reviews y autenticación JWT.',
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

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <Reveal as="div" className="section-heading">
        <span className="section-heading__index">05</span>
        <h2>Proyectos</h2>
      </Reveal>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => {
          const [primaryLink, ...secondaryLinks] = project.links
          return (
            <Reveal
              as="article"
              key={project.title}
              delay={i * 100}
              className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            >
              {project.badge && <span className="project-card__badge">{project.badge}</span>}

              {project.cover ? (
                <a
                  href={primaryLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__thumb project-card__thumb--image"
                  aria-label={`Abrir ${project.title}`}
                >
                  <img src={project.cover} alt={`Portada de ${project.title}`} />
                </a>
              ) : (
                <div className="project-card__thumb" aria-hidden="true" />
              )}

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} title={tag}>
                      <TechIcon name={tag} className="project-card__tag-icon" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-card__footer">
                <a
                  href={primaryLink.url}
                  className="btn btn--accent project-card__cta"
                  target={primaryLink.url !== '#' ? '_blank' : undefined}
                  rel={primaryLink.url !== '#' ? 'noopener noreferrer' : undefined}
                >
                  {primaryLink.label} &rarr;
                </a>
                {secondaryLinks.length > 0 && (
                  <div className="project-card__links">
                    {secondaryLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className="project-card__link"
                        target={link.url !== '#' ? '_blank' : undefined}
                        rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
