import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useSpotlight from '../hooks/useSpotlight'

const STATS = [
  { value: '2+', label: 'Años formándome' },
  { value: '3', label: 'Proyectos fullstack' },
  { value: '36', label: 'Aptitudes en LinkedIn' },
]

const FACTS = [
  { term: 'Formación', desc: 'DAM + Máster Full Stack en thePower' },
  { term: 'Ubicación', desc: 'Cocentaina / Alcoy · Remoto o híbrido' },
  { term: 'Idiomas', desc: 'Español · Valenciano · Árabe · Inglés' },
]

function About() {
  const onSpotlight = useSpotlight()

  return (
    <section id="sobre-mi" className="about">
      <SectionHeading index="01" title="Sobre mí" subtitle="Quién hay detrás del código" />

      <div className="about__grid">
        <Reveal as="div" className="about__text" delay={100}>
          <p className="about__lead">
            Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), con las prácticas profesionales
            finalizadas y la titulación oficial obtenida. Combino el ciclo DAM con una especialización intensiva en
            Desarrollo Web Full Stack en thePower.
          </p>
          <p>
            Mi proyecto más reciente es <strong>GoFight</strong>, una app Android de fitness para boxeo con gamificación
            (rachas tipo Duolingo), panel de administración y una API REST con más de 20 endpoints protegidos, con
            arquitectura cliente-servidor sobre PostgreSQL y Prisma ORM.
          </p>
          <p>
            Stack principal: React · React Native · Node.js · Express · PostgreSQL · Prisma ORM · Java · MySQL · JWT ·
            Cloudinary. Busco incorporarme a una empresa donde seguir creciendo como desarrollador Full Stack.
          </p>

          <dl className="about__facts">
            {FACTS.map((fact) => (
              <div key={fact.term} className="about__fact">
                <dt>{fact.term}</dt>
                <dd>{fact.desc}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <Reveal
              as="div"
              key={stat.label}
              className="stat-card"
              delay={150 + i * 100}
              onMouseMove={onSpotlight}
            >
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
