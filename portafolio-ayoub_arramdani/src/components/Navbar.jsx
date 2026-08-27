import { useState } from 'react'

const LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <a href="#inicio" className="navbar__logo">
        AYOUB<span className="dot">.</span>
      </a>

      <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
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
        className="navbar__toggle"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Navbar
