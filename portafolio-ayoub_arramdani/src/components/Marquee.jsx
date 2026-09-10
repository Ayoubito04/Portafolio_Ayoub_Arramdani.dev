import TechIcon from './TechIcon'

const ITEMS = [
  'React',
  'React Native',
  'Node.js',
  'Express',
  'PostgreSQL',
  'Prisma',
  'MongoDB',
  'JavaScript',
  '.NET',
  'Java',
  'JWT',
  'Git',
]

/** Cinta infinita de tecnologías; el contenido se duplica para el bucle. */
function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee__group">
            {ITEMS.map((item) => (
              <li key={item} className="marquee__item">
                <TechIcon name={item} className="marquee__icon" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Marquee
