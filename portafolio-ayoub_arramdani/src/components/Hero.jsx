import profilePhoto from '../assets/profile-photo.png'
import Reveal from './Reveal'
import TechIcon from './TechIcon'

const BADGES = ['React', 'Node.js', 'React Native', 'PostgreSQL']

function Hero() {
  return (
    <section id="inicio" className="hero">
      <Reveal as="div" className="hero__photo">
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

      <Reveal as="div" className="hero__content" delay={150}>
        <p className="eyebrow">Junior Full Stack Developer</p>
        <h1>
          Hola, soy <span className="accent-text">Ayoub Arramdani</span>
        </h1>
        <p className="hero__text">
          Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) especializado en
          Full Stack. Construyo aplicaciones web y móviles completas con React, Node.js y bases de
          datos relacionales, cuidando tanto la interfaz como la API que hay detrás.
        </p>

        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--accent">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn--outline">
            Contactar
          </a>
        </div>

        <ul className="hero__social">
          <li>
            <a href="https://github.com/Ayoubito04" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayoub-arramdani-b49b64311/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#contacto" aria-label="Correo electrónico">
              Email
            </a>
          </li>
        </ul>
      </Reveal>
    </section>
  )
}

export default Hero
