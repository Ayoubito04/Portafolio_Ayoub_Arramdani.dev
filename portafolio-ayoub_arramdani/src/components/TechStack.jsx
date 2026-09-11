import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TechIcon from './TechIcon'
import useSpotlight from '../hooks/useSpotlight'
import { techColorRgb } from '../techIcons'

const CATEGORIES = [
  {
    name: 'Frontend',
    note: 'Interfaz web',
    items: [
      { name: 'React', desc: 'Librería UI', docs: 'https://react.dev' },
      { name: 'JavaScript', desc: 'Lenguaje base', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'HTML', desc: 'Estructura', docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS', desc: 'Estilos', docs: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'Vite', desc: 'Build tool', docs: 'https://vite.dev' },
    ],
  },
  {
    name: 'Móvil',
    note: 'Apps para Android e iOS',
    items: [
      { name: 'React Native', desc: 'Apps multiplataforma', docs: 'https://reactnative.dev/docs/getting-started' },
      { name: 'Flutter', desc: 'SDK multiplataforma', docs: 'https://docs.flutter.dev' },
      { name: 'Dart', desc: 'Lenguaje de Flutter', docs: 'https://dart.dev/guides' },
      { name: 'Kotlin', desc: 'Lenguaje Android', docs: 'https://kotlinlang.org/docs/home.html' },
      {
        name: 'XML',
        desc: 'Layouts Android',
        docs: 'https://developer.android.com/develop/ui/views/layout/declaring-layout',
      },
    ],
  },
  {
    name: 'Backend',
    note: 'APIs y lógica de servidor',
    items: [
      { name: 'Node.js', desc: 'Runtime JS', docs: 'https://nodejs.org/docs/latest/api/' },
      { name: 'Express', desc: 'Framework HTTP', docs: 'https://expressjs.com/' },
      { name: 'C#', desc: 'Lenguaje .NET', docs: 'https://learn.microsoft.com/dotnet/csharp/' },
      { name: '.NET', desc: 'Plataforma C#', docs: 'https://learn.microsoft.com/dotnet/' },
      { name: 'Java', desc: 'Lenguaje JVM', docs: 'https://docs.oracle.com/en/java/' },
      { name: 'JWT', desc: 'Autenticación', docs: 'https://jwt.io/introduction' },
    ],
  },
  {
    name: 'Datos',
    note: 'Persistencia y modelado',
    items: [
      { name: 'PostgreSQL', desc: 'SQL relacional', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MySQL', desc: 'SQL relacional', docs: 'https://dev.mysql.com/doc/' },
      { name: 'MongoDB', desc: 'NoSQL documental', docs: 'https://www.mongodb.com/docs/' },
      { name: 'Prisma', desc: 'ORM', docs: 'https://www.prisma.io/docs' },
    ],
  },
  {
    name: 'Herramientas',
    note: 'Flujo de trabajo',
    items: [
      { name: 'Git', desc: 'Versionado', docs: 'https://git-scm.com/doc' },
      { name: 'GitLab', desc: 'Repos y CI', docs: 'https://docs.gitlab.com/' },
      { name: 'Cloudinary', desc: 'Imágenes', docs: 'https://cloudinary.com/documentation' },
      { name: 'Vercel', desc: 'Deploy frontend', docs: 'https://vercel.com/docs' },
      { name: 'Render', desc: 'Deploy backend', docs: 'https://render.com/docs' },
      { name: 'Expo Go', desc: 'Pruebas en móvil', docs: 'https://docs.expo.dev/get-started/set-up-your-environment/' },
      { name: 'Visual Studio Code', desc: 'Editor de código', docs: 'https://code.visualstudio.com/docs' },
      { name: 'Android Studio', desc: 'IDE Android', docs: 'https://developer.android.com/studio/intro' },
      { name: 'IntelliJ IDEA', desc: 'IDE Java y Kotlin', docs: 'https://www.jetbrains.com/help/idea/getting-started.html' },
    ],
  },
]

function TechStack() {
  const onSpotlight = useSpotlight()

  return (
    <section id="tecnologias" className="tech-stack">
      <SectionHeading index="04" title="Tecnologías" subtitle="Con lo que trabajo a diario" />

      <div className="tech-categories">
        {CATEGORIES.map((category, ci) => (
          <Reveal as="div" key={category.name} className="tech-category" delay={ci * 80}>
            <div className="tech-category__head">
              <h3 className="tech-category__title">{category.name}</h3>
              <p className="tech-category__note">{category.note}</p>
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
                  aria-label={`Ver documentación de ${tech.name}`}
                  onMouseMove={onSpotlight}
                  // Color de marca de la tecnología, usado en el hover.
                  style={{ '--brand': techColorRgb(tech.name) ?? '215, 255, 63' }}
                >
                  <TechIcon name={tech.name} className="tech-card__icon" />

                  <span className="tech-card__text">
                    <span className="tech-card__name">{tech.name}</span>
                    <span className="tech-card__desc">{tech.desc}</span>
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
