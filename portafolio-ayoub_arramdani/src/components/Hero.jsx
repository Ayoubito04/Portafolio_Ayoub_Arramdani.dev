import { useEffect, useState } from 'react'
import profilePhoto from '../assets/profile-photo.png'
import Reveal from './Reveal'
import TechIcon from './TechIcon'

const BADGES = ['React', 'Node.js', 'React Native', 'PostgreSQL']

const ROLES = ['Full Stack Developer', 'React & React Native', 'Node.js · Express · Prisma', 'Técnico Superior en DAM']

const HIGHLIGHTS = [
  { value: 'DAM', label: 'Titulación oficial' },
  { value: '5 meses', label: 'Prácticas en Mercanza' },
  { value: '20+', label: 'Endpoints en GoFight' },
]

/** Rota la lista de roles con un fundido suave. */
function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const id = setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="rotating-role">
      <span key={index} className="rotating-role__word">
        {ROLES[index]}
      </span>
    </span>
  )
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <Reveal as="div" className="hero__content">
        <p className="hero__status">
          <span className="hero__status-dot" />
          Disponible para incorporarme a un equipo
        </p>

        <h1>
          Hola, soy{' '}
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
          Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) especializado en Full Stack. Construyo
          aplicaciones web y móviles completas con React, Node.js y bases de datos relacionales, cuidando tanto la
          interfaz como la API que hay detrás.
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--accent">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn--ghost">
            Contactar
          </a>
        </div>

        <ul className="hero__highlights">
          {HIGHLIGHTS.map((item) => (
            <li key={item.label}>
              <span className="hero__highlight-value">{item.value}</span>
              <span className="hero__highlight-label">{item.label}</span>
            </li>
          ))}
        </ul>

        <ul className="hero__social">
          <li>
            <a href="https://github.com/Ayoubito04" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayoub-arramdani-b49b64311/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#contacto">Email</a>
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

      <a href="#sobre-mi" className="hero__scroll" aria-label="Ir a la siguiente sección">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  )
}

export default Hero
