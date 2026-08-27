import Reveal from './Reveal'

const STATS = [
  { value: '2+', label: 'Años formándome' },
  { value: '3', label: 'Proyectos fullstack' },
  { value: '36', label: 'Aptitudes en LinkedIn' },
]

function About() {
  return (
    <section id="sobre-mi" className="about">
      <Reveal as="div" className="section-heading">
        <span className="section-heading__index">01</span>
        <h2>Sobre mí</h2>
      </Reveal>

      <div className="about__grid">
        <Reveal as="p" className="about__text" delay={100}>
          Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM), actualmente
          realizando las prácticas profesionales para obtener la titulación oficial. Combino el
          ciclo DAM con una especialización intensiva en Desarrollo Web Full Stack en thePower.
          <br />
          <br />
          Mi proyecto más reciente es <strong>GoFight</strong>, una app Android de fitness para
          boxeo con gamificación (rachas tipo Duolingo), panel de administración y una API REST con
          más de 20 endpoints protegidos, con arquitectura cliente-servidor sobre PostgreSQL y
          Prisma ORM.
          <br />
          <br />
          Stack principal: React · React Native · Node.js · Express · PostgreSQL · Prisma ORM ·
          Java · MySQL · JWT · Cloudinary. Busco incorporarme a una empresa donde seguir
          creciendo como desarrollador Full Stack.
        </Reveal>

        <div className="about__stats">
          {STATS.map((stat, i) => (
            <Reveal as="div" key={stat.label} className="stat-card" delay={150 + i * 100}>
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
