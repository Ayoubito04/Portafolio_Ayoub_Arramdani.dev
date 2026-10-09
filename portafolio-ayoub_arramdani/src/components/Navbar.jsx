import { useEffect, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'
import useLanguage from '../hooks/useLanguage'
import { LANGUAGES } from '../i18n/LanguageContext'

const LINKS = [
  { href: '#inicio', label: { es: 'Inicio', en: 'Home' } },
  { href: '#sobre-mi', label: { es: 'Sobre mí', en: 'About' } },
  { href: '#habilidades', label: { es: 'Habilidades', en: 'Skills' } },
  { href: '#experiencia', label: { es: 'Experiencia', en: 'Experience' } },
  { href: '#tecnologias', label: { es: 'Tecnologías', en: 'Tech stack' } },
  { href: '#proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { href: '#contacto', label: { es: 'Contacto', en: 'Contact' } },
]

const SECTION_IDS = LINKS.map((link) => link.href.slice(1))

/** Nombre completo de cada idioma, para lectores de pantalla. */
const LANGUAGE_NAMES = { es: 'Español', en: 'English' }

/** Selector ES / EN. Cada idioma se anuncia en su propio idioma. */
function LanguageSwitch() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="lang-switch" role="group" aria-label={t({ es: 'Idioma', en: 'Language' })}>
      {LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          className={`lang-switch__btn${lang === code ? ' is-active' : ''}`}
          aria-pressed={lang === code}
          aria-label={LANGUAGE_NAMES[code]}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Evita el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-mark">AA</span>
          <span className="navbar__logo-text">
            Ayoub<span className="dot">.</span>
          </span>
        </a>

        <nav className={`navbar__links${open ? ' is-open' : ''}`}>
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href.slice(1) ? 'is-active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn--accent navbar__cta" onClick={() => setOpen(false)}>
            {t({ es: 'Hablemos', en: "Let's talk" })}
          </a>
        </nav>

        {/* Fuera del <nav>: en móvil el selector sigue visible sin abrir el menú. */}
        <div className="navbar__actions">
          <LanguageSwitch />

          <button
            type="button"
            className={`navbar__toggle${open ? ' is-open' : ''}`}
            aria-label={open ? t({ es: 'Cerrar menú', en: 'Close menu' }) : t({ es: 'Abrir menú', en: 'Open menu' })}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
