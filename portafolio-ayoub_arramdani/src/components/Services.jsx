import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useSpotlight from '../hooks/useSpotlight'

/* Iconos de línea dibujados a mano para no depender de una librería externa. */
const ICONS = {
  frontend: 'M8 4 3 12l5 8M16 4l5 8-5 8',
  backend: 'M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01',
  data: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3ZM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  auth: 'M12 3 4 6.5V12c0 4.6 3.3 8.4 8 9 4.7-.6 8-4.4 8-9V6.5L12 3Zm-3 9 2 2 4-4',
  git: 'M6 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 21.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 7.5v9M18 8.5v2c0 3-3 4-6 4.5',
}

const SERVICES = [
  {
    icon: 'frontend',
    title: 'Desarrollo Frontend',
    desc: 'Interfaces con React y React Native para web y móvil.',
    tags: ['React', 'React Native', 'Vite'],
    wide: true,
  },
  {
    icon: 'backend',
    title: 'Desarrollo Backend',
    desc: 'APIs REST con Node.js, Express y también .NET.',
    tags: ['Node.js', 'Express', '.NET'],
  },
  {
    icon: 'data',
    title: 'Bases de datos',
    desc: 'Modelado y consultas con PostgreSQL, MySQL y Prisma ORM.',
    tags: ['PostgreSQL', 'MySQL', 'Prisma'],
  },
  {
    icon: 'auth',
    title: 'Autenticación y seguridad',
    desc: 'Login y rutas protegidas con JWT.',
    tags: ['JWT', 'RBAC'],
  },
  {
    icon: 'git',
    title: 'Control de versiones',
    desc: 'Trabajo en equipo con Git y GitLab.',
    tags: ['Git', 'GitLab'],
  },
]

function Services() {
  const onSpotlight = useSpotlight()

  return (
    <section id="habilidades" className="services">
      <SectionHeading index="02" title="Qué hago" subtitle="Las piezas que puedo cubrir en un equipo" />

      <ul className="services__grid">
        {SERVICES.map((service, i) => (
          <Reveal
            as="li"
            key={service.title}
            className={`service-card${service.wide ? ' service-card--wide' : ''}`}
            delay={i * 80}
            onMouseMove={onSpotlight}
          >
            <span className="service-card__number">{String(i + 1).padStart(2, '0')}</span>

            <span className="service-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d={ICONS[service.icon]} />
              </svg>
            </span>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <ul className="service-card__tags">
              {service.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

export default Services
