import { useEffect, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

const SECTION_IDS = LINKS.map((link) => link.href.slice(1))

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(SECTION_IDS)

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
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn--accent navbar__cta" onClick={() => setOpen(false)}>
            Hablemos
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
