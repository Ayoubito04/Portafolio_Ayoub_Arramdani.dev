import Reveal from './Reveal'
import TechIcon from './TechIcon'

const CATEGORIES = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', docs: 'https://react.dev' },
      { name: 'React Native', docs: 'https://reactnative.dev/docs/getting-started' },
      { name: 'JavaScript', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'HTML', docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS', docs: 'https://developer.mozilla.org/docs/Web/CSS' },
      { name: 'Vite', docs: 'https://vite.dev' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', docs: 'https://nodejs.org/docs/latest/api/' },
      { name: 'Express', docs: 'https://expressjs.com/' },
      { name: '.NET', docs: 'https://learn.microsoft.com/dotnet/' },
      { name: 'Java', docs: 'https://docs.oracle.com/en/java/' },
      { name: 'JWT', docs: 'https://jwt.io/introduction' },
    ],
  },
  {
    name: 'Datos',
    items: [
      { name: 'PostgreSQL', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MySQL', docs: 'https://dev.mysql.com/doc/' },
      { name: 'MongoDB', docs: 'https://www.mongodb.com/docs/' },
      { name: 'Prisma', docs: 'https://www.prisma.io/docs' },
    ],
  },
  {
    name: 'Herramientas',
    items: [
      { name: 'Git', docs: 'https://git-scm.com/doc' },
      { name: 'GitLab', docs: 'https://docs.gitlab.com/' },
      { name: 'Cloudinary', docs: 'https://cloudinary.com/documentation' },
    ],
  },
]

function TechStack() {
  return (
    <section id="tecnologias" className="tech-stack">
      <Reveal as="div" className="section-heading">
        <span className="section-heading__index">04</span>
        <h2>Tecnologías</h2>
      </Reveal>

      <div className="tech-categories">
        {CATEGORIES.map((category, ci) => (
          <Reveal as="div" key={category.name} className="tech-category" delay={ci * 80}>
            <h3 className="tech-category__title">{category.name}</h3>
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
                >
                  <TechIcon name={tech.name} className="tech-card__icon" />
                  <span className="tech-card__name">{tech.name}</span>
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
