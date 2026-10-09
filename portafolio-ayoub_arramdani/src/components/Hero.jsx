import { useEffect, useState } from 'react'
import profilePhoto from '../assets/profile-photo.png'
import Reveal from './Reveal'
import TechIcon from './TechIcon'
import useLanguage from '../hooks/useLanguage'
import { GITHUB, LINKEDIN } from '../config'

const BADGES = ['React', 'Node.js', 'React Native', 'PostgreSQL']

const ROLES = {
  es: ['Full Stack Developer', 'React & React Native', 'Node.js · Express · Prisma', 'Técnico Superior en DAM'],
  en: ['Full Stack Developer', 'React & React Native', 'Node.js · Express · Prisma', 'Multiplatform App Dev (DAM)'],
}

const HIGHLIGHTS = [
  { value: 'DAM', label: { es: 'Titulación oficial', en: 'Official degree' } },
  { value: { es: '5 meses', en: '5 months' }, label: { es: 'Prácticas en Mercanza', en: 'Internship at Mercanza' } },
  { value: '20+', label: { es: 'Endpoints en GoFight', en: 'Endpoints in GoFight' } },
]

/** Rota la lista de roles con un fundido suave. */
function RotatingRole() {
  const { t } = useLanguage()
  const roles = t(ROLES)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="rotating-role">
      <span key={index} className="rotating-role__word">
        {roles[index]}
      </span>
    </span>
  )
}

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="hero">
      <Reveal as="div" className="hero__content">
        <p className="hero__status">
          <span className="hero__status-dot" />
          {t({ es: 'Disponible para incorporarme a un equipo', en: 'Open to joining a team' })}
        </p>

        <h1>
          {t({ es: 'Hola, soy', en: "Hi, I'm" })}{' '}
          <span className="hero__name">
            Ayoub Arramdani
            <svg className="hero__underline" viewBox="0 0 300 12" preserveAspectRatio="none" aria-hidden="true">
              <path d="M2 8C60 3 120 2 180 4c40 1.3 80 3.3 118 6" fill="none" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className="hero__role">
          <span className="hero__role-prefix">&gt;</span> <RotatingRole />
        </p>

        <p className="hero__text">
          {t({
            es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) especializado en Full Stack. Construyo aplicaciones web y móviles completas con React, Node.js y bases de datos relacionales, cuidando tanto la interfaz como la API que hay detrás.',
            en: 'Multiplatform Application Development (DAM) graduate specialized in Full Stack. I build complete web and mobile applications with React, Node.js and relational databases, caring as much about the interface as about the API behind it.',
          })}
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--accent">
            {t({ es: 'Ver proyectos', en: 'View projects' })}
          </a>
          <a href="#contacto" className="btn btn--ghost">
            {t({ es: 'Contactar', en: 'Get in touch' })}
          </a>
        </div>

        <ul className="hero__highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.label.es}>
              <span className="hero__highlight-value">{t(item.value)}</span>
              <span className="hero__highlight-label">{t(item.label)}</span>
            </li>
          ))}
        </ul>

        <ul className="hero__social">
          <li>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </Reveal>

      <Reveal as="div" className="hero__photo" delay={150}>
        <div className="photo-frame">
          <span className="photo-frame__corner tl" />
          <span className="photo-frame__corner br" />
          <div className="photo-frame__media">
            <img src={profilePhoto} alt="Ayoub Arramdani" className="photo-frame__img" />
          </div>

          {BADGES.map((badge, i) => (
            <span key={badge} className={`photo-frame__badge badge-${i}`} aria-label={badge}>
              <TechIcon name={badge} className="photo-frame__badge-icon" />
            </span>
          ))}
        </div>
      </Reveal>

      <a
        href="#sobre-mi"
        className="hero__scroll"
        aria-label={t({ es: 'Ir a la siguiente sección', en: 'Go to the next section' })}
      >
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  )
}

export default Hero
