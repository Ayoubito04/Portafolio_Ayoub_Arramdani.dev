import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useLanguage from '../hooks/useLanguage'
import useSpotlight from '../hooks/useSpotlight'
import { techColorRgb } from '../techIcons'

// Las descripciones que son iguales en ambos idiomas van como string suelto.
const CATEGORIES = [
  {
    id: 'frontend',
    name: 'Frontend',
    note: { es: 'Interfaz web', en: 'Web interfaces' },
    items: [
      { name: 'React', desc: { es: 'Librería UI', en: 'UI library' }, docs: 'https://react.dev' },
      {
        name: 'JavaScript',
        desc: { es: 'Lenguaje base', en: 'Core language' },
        docs: 'https://developer.mozilla.org/docs/Web/JavaScript',
      },
      { name: 'HTML', desc: { es: 'Estructura', en: 'Structure' }, docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS', desc: { es: 'Estilos', en: 'Styling' }, docs: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'Vite', desc: 'Build tool', docs: 'https://vite.dev' },
    ],
  },
  {
    id: 'mobile',
    name: { es: 'Móvil', en: 'Mobile' },
    note: { es: 'Apps para Android e iOS', en: 'Apps for Android and iOS' },
    items: [
      {
        name: 'React Native',
        desc: { es: 'Apps multiplataforma', en: 'Cross-platform apps' },
        docs: 'https://reactnative.dev/docs/getting-started',
      },
      { name: 'Flutter', desc: { es: 'SDK multiplataforma', en: 'Cross-platform SDK' }, docs: 'https://docs.flutter.dev' },
      { name: 'Dart', desc: { es: 'Lenguaje de Flutter', en: "Flutter's language" }, docs: 'https://dart.dev/guides' },
      {
        name: 'Kotlin',
        desc: { es: 'Lenguaje Android', en: 'Android language' },
        docs: 'https://kotlinlang.org/docs/home.html',
      },
      {
        name: 'XML',
        desc: { es: 'Layouts Android', en: 'Android layouts' },
        docs: 'https://developer.android.com/develop/ui/views/layout/declaring-layout',
      },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    note: { es: 'APIs y lógica de servidor', en: 'APIs and server logic' },
    items: [
      { name: 'Node.js', desc: { es: 'Runtime JS', en: 'JS runtime' }, docs: 'https://nodejs.org/docs/latest/api/' },
      { name: 'Express', desc: { es: 'Framework HTTP', en: 'HTTP framework' }, docs: 'https://expressjs.com/' },
      {
        name: 'C#',
        desc: { es: 'Lenguaje .NET', en: '.NET language' },
        docs: 'https://learn.microsoft.com/dotnet/csharp/',
      },
      { name: '.NET', desc: { es: 'Plataforma C#', en: 'C# platform' }, docs: 'https://learn.microsoft.com/dotnet/' },
      { name: 'Java', desc: { es: 'Lenguaje JVM', en: 'JVM language' }, docs: 'https://docs.oracle.com/en/java/' },
      { name: 'JWT', desc: { es: 'Autenticación', en: 'Authentication' }, docs: 'https://jwt.io/introduction' },
    ],
  },
  {
    id: 'data',
    name: { es: 'Datos', en: 'Data' },
    note: { es: 'Persistencia y modelado', en: 'Persistence and modeling' },
    items: [
      {
        name: 'PostgreSQL',
        desc: { es: 'SQL relacional', en: 'Relational SQL' },
        docs: 'https://www.postgresql.org/docs/',
      },
      { name: 'MySQL', desc: { es: 'SQL relacional', en: 'Relational SQL' }, docs: 'https://dev.mysql.com/doc/' },
      {
        name: 'MongoDB',
        desc: { es: 'NoSQL documental', en: 'Document NoSQL' },
        docs: 'https://www.mongodb.com/docs/',
      },
      { name: 'Prisma', desc: 'ORM', docs: 'https://www.prisma.io/docs' },
    ],
  },
  {
    id: 'tools',
    name: { es: 'Herramientas', en: 'Tools' },
    note: { es: 'Flujo de trabajo', en: 'Workflow' },
    items: [
      { name: 'Git', desc: { es: 'Versionado', en: 'Version control' }, docs: 'https://git-scm.com/doc' },
      { name: 'GitLab', desc: { es: 'Repos y CI', en: 'Repos & CI' }, docs: 'https://docs.gitlab.com/' },
      {
        name: 'Cloudinary',
        desc: { es: 'Imágenes', en: 'Images' },
        docs: 'https://cloudinary.com/documentation',
      },
      { name: 'Vercel', desc: { es: 'Deploy frontend', en: 'Frontend deploys' }, docs: 'https://vercel.com/docs' },
      { name: 'Render', desc: { es: 'Deploy backend', en: 'Backend deploys' }, docs: 'https://render.com/docs' },
      {
        name: 'Expo Go',
        desc: { es: 'Pruebas en móvil', en: 'Testing on device' },
        docs: 'https://docs.expo.dev/get-started/set-up-your-environment/',
      },
      {
        name: 'Visual Studio Code',
        desc: { es: 'Editor de código', en: 'Code editor' },
        docs: 'https://code.visualstudio.com/docs',
      },
      {
        name: 'Android Studio',
        desc: { es: 'IDE Android', en: 'Android IDE' },
        docs: 'https://developer.android.com/studio/intro',
      },
      {
        name: 'IntelliJ IDEA',
        desc: { es: 'IDE Java y Kotlin', en: 'Java & Kotlin IDE' },
        docs: 'https://www.jetbrains.com/help/idea/getting-started.html',
      },
    ],
  },
]

function TechStack() {
  const onSpotlight = useSpotlight()
  const { t } = useLanguage()

  return (
    <section id="tecnologias" className="tech-stack">
      <SectionHeading
        index="04"
        title={t({ es: 'Tecnologías', en: 'Tech stack' })}
        subtitle={t({ es: 'Con lo que trabajo a diario', en: 'What I work with every day' })}
      />

      <div className="tech-categories">
        {CATEGORIES.map((category, ci) => (
          <Reveal as="div" key={category.id} className="tech-category" delay={ci * 80}>
            <div className="tech-category__head">
              <h3 className="tech-category__title">{t(category.name)}</h3>
              <p className="tech-category__note">{t(category.note)}</p>
              <span className="tech-category__count">{String(category.items.length).padStart(2, '0')}</span>
            </div>

            <div className="tech-grid">
              {category.items.map((tech, i) => (
                <Reveal
                  as="a"
                  key={tech.name}
                  className="tech-card"
                  delay={i * 40}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t({ es: `Ver documentación de ${tech.name}`, en: `View ${tech.name} documentation` })}
                  onMouseMove={onSpotlight}
                  // Color de marca de la tecnología, usado en el hover.
                  style={{ '--brand': techColorRgb(tech.name) ?? '215, 255, 63' }}
                >
                  <TechIcon name={tech.name} className="tech-card__icon" />

                  <span className="tech-card__text">
                    <span className="tech-card__name">{tech.name}</span>
                    <span className="tech-card__desc">{t(tech.desc)}</span>
                  </span>

                  <span className="tech-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default TechStack
