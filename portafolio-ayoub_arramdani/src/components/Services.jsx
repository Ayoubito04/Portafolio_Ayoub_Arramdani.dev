import Reveal from './Reveal'

const SERVICES = [
  { title: 'Desarrollo Frontend', desc: 'Interfaces con React y React Native para web y móvil.' },
  { title: 'Desarrollo Backend', desc: 'APIs REST con Node.js, Express y también .NET.' },
  { title: 'Bases de datos', desc: 'Modelado y consultas con PostgreSQL, MySQL y Prisma ORM.' },
  { title: 'Autenticación y seguridad', desc: 'Login y rutas protegidas con JWT.' },
  { title: 'Control de versiones', desc: 'Trabajo en equipo con Git y GitLab.' },
]

function Services() {
  return (
    <section id="habilidades" className="services">
      <Reveal as="div" className="section-heading">
        <span className="section-heading__index">02</span>
        <h2>Qué hago</h2>
      </Reveal>

      <ul className="services__list">
        {SERVICES.map((service, i) => (
          <Reveal as="li" key={service.title} className="service-item" delay={i * 90}>
            <span className={`service-item__number ${i % 2 === 1 ? 'is-accent' : ''}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

export default Services
