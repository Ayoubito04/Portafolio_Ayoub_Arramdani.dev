import useLanguage from '../hooks/useLanguage'
import { GITHUB, LINKEDIN } from '../config'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            Ayoub<span className="dot">.</span>
          </span>
          <p>Full Stack Developer · React · Node.js · PostgreSQL</p>
        </div>

        <ul className="footer__social">
          <li>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#inicio">{t({ es: 'Volver arriba ↑', en: 'Back to top ↑' })}</a>
          </li>
        </ul>
      </div>

      <p className="footer__legal">
        &copy; {new Date().getFullYear()} Ayoub Arramdani.{' '}
        {t({ es: 'Todos los derechos reservados.', en: 'All rights reserved.' })}
      </p>
    </footer>
  )
}

export default Footer
