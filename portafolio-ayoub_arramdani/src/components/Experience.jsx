import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useSpotlight from '../hooks/useSpotlight'
import mercanzaLogo from '../assets/mercanza-logo.png'

const EXPERIENCE = [
  {
    role: 'Desarrollador Full Stack .NET',
    company: 'Mercanza',
    logo: mercanzaLogo,
    period: 'feb. 2026 - jun. 2026 · 5 meses',
    location: 'Madrid, Comunidad de Madrid, España · En remoto',
    desc: 'Prácticas profesionales de desarrollo Full Stack en una aplicación de carácter asistencial y sanitario para la gestión de seguros de vida, dentro de un equipo que cubría todo el ciclo de las funcionalidades: desde el diseño de la base de datos hasta la interfaz final. Trabajé principalmente en el área de gestión de acreditaciones.',
    modules: [
      {
        title: 'Plantillas de Acuerdo e Informes ICG',
        points: [
          'Validación de ficheros para aceptar exclusivamente archivos Excel y campos obligatorios en el formulario (mutua, año, informe...).',
          'Persistencia en base de datos del informe con estado inicial y actualización a "Procesado" mediante el botón de procesado.',
          'Mapeo de estados numéricos a texto legible en el frontend y mejora estética del componente de subida de ficheros.',
        ],
      },
      {
        title: 'Acreditaciones Sectoriales (Oferta / Demanda)',
        points: [
          'Maquetación UI adaptada al sistema de diseño de la aplicación y descarga automática de PDFs asociados a cada registro.',
          'Control de acceso por perfiles (RBAC): el perfil Admin ve todas las exportaciones (PDF/Excel individual y anual) y el perfil Mutua solo puede imprimir.',
          'Filtrado dinámico en el grid para que cada Mutua solo vea sus propias acreditaciones.',
        ],
      },
      {
        title: 'Acreditaciones Individuales',
        points: [
          'Implementación completa del flujo funcional del módulo.',
          'Registro de logs de auditoría de navegación y acceso al submenú, homogeneizado con el estándar del equipo.',
        ],
      },
      {
        title: 'Refactorización y buenas prácticas',
        points: [
          'Migración de cadenas de conexión y rutas de ficheros hardcodeadas a configuración centralizada (appsettings.json / secrets.json).',
          'Resolución de conflictos y coordinación de ramas en Git/GitLab para evitar sobreescrituras entre compañeros.',
        ],
      },
    ],
    tags: ['.NET', 'React', 'SQL Server', 'GitLab'],
  },
]

function Experience() {
  const onSpotlight = useSpotlight()

  return (
    <section id="experiencia" className="experience">
      <SectionHeading index="03" title="Experiencia" subtitle="Dónde he trabajado y en qué" />

      <ol className="timeline">
        {EXPERIENCE.map((job, i) => (
          <Reveal as="li" key={job.role} className="timeline__item" delay={i * 100}>
            <span className="timeline__marker" aria-hidden="true" />

            <article className="experience-card" onMouseMove={onSpotlight}>
              <div className="experience-card__header">
                <div className="experience-card__title">
                  <img src={job.logo} alt={`Logo de ${job.company}`} className="experience-card__logo" />
                  <div>
                    <h3>{job.role}</h3>
                    <p className="experience-card__company">{job.company}</p>
                    <p className="experience-card__location">{job.location}</p>
                  </div>
                </div>
                <p className="experience-card__period">{job.period}</p>
              </div>

              <p className="experience-card__desc">{job.desc}</p>

              <div className="experience-card__modules">
                {job.modules.map((mod) => (
                  <div key={mod.title} className="experience-module">
                    <h4>{mod.title}</h4>
                    <ul className="experience-card__highlights">
                      {mod.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <ul className="experience-card__tags chip-row">
                {job.tags.map((tag) => (
                  <li key={tag} className="chip">
                    <TechIcon name={tag} className="chip__icon" />
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}

export default Experience
