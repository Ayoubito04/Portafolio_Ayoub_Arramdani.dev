import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useLanguage from '../hooks/useLanguage'
import useSpotlight from '../hooks/useSpotlight'

const STATS = [
  { value: '2+', label: { es: 'Años formándome', en: 'Years of training' } },
  { value: '3', label: { es: 'Proyectos fullstack', en: 'Full stack projects' } },
  { value: '36', label: { es: 'Aptitudes en LinkedIn', en: 'Skills on LinkedIn' } },
]

const FACTS = [
  {
    term: { es: 'Formación', en: 'Education' },
    desc: { es: 'DAM + Máster Full Stack en thePower', en: 'DAM + Full Stack Master at thePower' },
  },
  {
    term: { es: 'Ubicación', en: 'Location' },
    desc: { es: 'Cocentaina / Alcoy · Remoto o híbrido', en: 'Cocentaina / Alcoy · Remote or hybrid' },
  },
  {
    term: { es: 'Idiomas', en: 'Languages' },
    desc: { es: 'Español · Valenciano · Inglés', en: 'Spanish · Valencian · English' },
  },
]

const PARAGRAPHS = {
  es: (
    <>
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
    </>
  ),
  en: (
    <>
      <p className="about__lead">
        Multiplatform Application Development (DAM) graduate, with my professional internship completed and the
        official degree obtained. I combine the DAM program with an intensive specialization in Full Stack Web
        Development at thePower.
      </p>
      <p>
        My most recent project is <strong>GoFight</strong>, an Android fitness app for boxing with gamification
        (Duolingo-style streaks), an admin panel and a REST API with more than 20 protected endpoints, built on a
        client-server architecture over PostgreSQL and Prisma ORM.
      </p>
      <p>
        Main stack: React · React Native · Node.js · Express · PostgreSQL · Prisma ORM · Java · MySQL · JWT ·
        Cloudinary. I&apos;m looking to join a company where I can keep growing as a Full Stack developer.
      </p>
    </>
  ),
}

function About() {
  const onSpotlight = useSpotlight()
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="about">
      <SectionHeading
        index="01"
        title={t({ es: 'Sobre mí', en: 'About me' })}
        subtitle={t({ es: 'Quién hay detrás del código', en: "Who's behind the code" })}
      />

      <div className="about__grid">
        <Reveal as="div" className="about__text" delay={100}>
          {t(PARAGRAPHS)}

          <dl className="about__facts">
            {FACTS.map((fact) => (
              <div key={fact.term.es} className="about__fact">
                <dt>{t(fact.term)}</dt>
                <dd>{t(fact.desc)}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <Reveal
              as="div"
              key={stat.label.es}
              className="stat-card"
              delay={150 + i * 100}
              onMouseMove={onSpotlight}
            >
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{t(stat.label)}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
