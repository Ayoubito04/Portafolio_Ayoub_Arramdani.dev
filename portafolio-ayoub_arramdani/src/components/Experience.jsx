import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useLanguage from '../hooks/useLanguage'
import useSpotlight from '../hooks/useSpotlight'
import mercanzaLogo from '../assets/mercanza-logo.png'

const EXPERIENCE = [
  {
    role: { es: 'Desarrollador Full Stack .NET', en: 'Full Stack .NET Developer' },
    company: 'Mercanza',
    logo: mercanzaLogo,
    period: { es: 'feb. 2026 - jun. 2026 · 5 meses', en: 'Feb 2026 - Jun 2026 · 5 months' },
    location: {
      es: 'Madrid, Comunidad de Madrid, España · En remoto',
      en: 'Madrid, Community of Madrid, Spain · Remote',
    },
    desc: {
      es: 'Prácticas profesionales de desarrollo Full Stack en una aplicación de carácter asistencial y sanitario para la gestión de seguros de vida, dentro de un equipo que cubría todo el ciclo de las funcionalidades: desde el diseño de la base de datos hasta la interfaz final. Trabajé principalmente en el área de gestión de acreditaciones.',
      en: 'Full Stack development internship on a healthcare and care-oriented application for managing life insurance, within a team that covered the whole lifecycle of each feature: from database design to the final interface. I worked mainly on the accreditation management area.',
    },
    modules: {
      es: [
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
      en: [
        {
          title: 'Agreement Templates & ICG Reports',
          points: [
            'File validation to accept Excel files only, plus required form fields (mutual insurer, year, report...).',
            'Report persisted in the database with an initial status, updated to "Processed" through the process button.',
            'Mapping of numeric statuses to readable text in the frontend and visual polish of the file upload component.',
          ],
        },
        {
          title: 'Sector Accreditations (Supply / Demand)',
          points: [
            "UI layout aligned with the application's design system and automatic download of the PDFs linked to each record.",
            'Role-based access control (RBAC): the Admin profile sees every export (individual and annual PDF/Excel) while the Mutual Insurer profile can only print.',
            'Dynamic grid filtering so each mutual insurer only sees its own accreditations.',
          ],
        },
        {
          title: 'Individual Accreditations',
          points: [
            "Full implementation of the module's functional flow.",
            'Audit logging of navigation and submenu access, aligned with the team standard.',
          ],
        },
        {
          title: 'Refactoring & best practices',
          points: [
            'Moved hardcoded connection strings and file paths to centralized configuration (appsettings.json / secrets.json).',
            "Conflict resolution and branch coordination in Git/GitLab to keep teammates from overwriting each other's work.",
          ],
        },
      ],
    },
    tags: ['.NET', 'React', 'SQL Server', 'GitLab'],
  },
]

function Experience() {
  const onSpotlight = useSpotlight()
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="experience">
      <SectionHeading
        index="03"
        title={t({ es: 'Experiencia', en: 'Experience' })}
        subtitle={t({ es: 'Dónde he trabajado y en qué', en: "Where I've worked and on what" })}
      />

      <ol className="timeline">
        {EXPERIENCE.map((job, i) => (
          <Reveal as="li" key={job.company} className="timeline__item" delay={i * 100}>
            <span className="timeline__marker" aria-hidden="true" />

            <article className="experience-card" onMouseMove={onSpotlight}>
              <div className="experience-card__header">
                <div className="experience-card__title">
                  <img
                    src={job.logo}
                    alt={t({ es: `Logo de ${job.company}`, en: `${job.company} logo` })}
                    className="experience-card__logo"
                  />
                  <div>
                    <h3>{t(job.role)}</h3>
                    <p className="experience-card__company">{job.company}</p>
                    <p className="experience-card__location">{t(job.location)}</p>
                  </div>
                </div>
                <p className="experience-card__period">{t(job.period)}</p>
              </div>

              <p className="experience-card__desc">{t(job.desc)}</p>

              <div className="experience-card__modules">
                {t(job.modules).map((mod) => (
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
