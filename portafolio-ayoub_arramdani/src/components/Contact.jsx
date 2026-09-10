import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useSpotlight from '../hooks/useSpotlight'
import { EMAIL, GITHUB, GMAIL_COMPOSE, LINKEDIN, MAILTO } from '../config'

const CHANNELS = [
  { label: 'LinkedIn', value: '/in/ayoub-arramdani', url: LINKEDIN },
  { label: 'GitHub', value: '@Ayoubito04', url: GITHUB },
  { label: 'Ubicación', value: 'Cocentaina / Alcoy · Comunidad Valenciana' },
]

/**
 * Bloque principal de contacto. Ofrece tres vías porque ninguna funciona para
 * todo el mundo: copiar siempre funciona, Gmail web no necesita app de correo,
 * y mailto: es lo más cómodo para quien sí tiene cliente configurado.
 */
function EmailBlock({ onSpotlight }) {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // Sin permiso de portapapeles: al menos seleccionamos el texto.
      const node = document.getElementById('contact-email-address')
      if (node) window.getSelection()?.selectAllChildren(node)
    }
  }

  return (
    <div className="contact-email" onMouseMove={onSpotlight}>
      <span className="contact-channel__label">Escríbeme a</span>

      <a id="contact-email-address" href={MAILTO} className="contact-email__address">
        {EMAIL}
      </a>

      <div className="contact-email__actions">
        <button type="button" className="contact-email__btn" onClick={copyEmail}>
          {copied ? '✓ Copiado' : 'Copiar dirección'}
        </button>
        <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="contact-email__btn">
          Abrir en Gmail ↗
        </a>
      </div>
    </div>
  )
}

function Contact() {
  const onSpotlight = useSpotlight()

  return (
    <section id="contacto" className="contact">
      <SectionHeading index="06" title="Contacto" subtitle="Hablemos de tu equipo o tu proyecto" />

      <div className="contact__grid">
        <Reveal as="div" className="contact__intro">
          <p className="contact__lead">
            ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Escríbeme y te responderé lo antes
            posible.
          </p>
          <p className="contact__note">
            Estoy disponible para incorporarme a un equipo como desarrollador Full Stack, en remoto o híbrido.
          </p>
        </Reveal>

        <Reveal as="div" className="contact__ways" delay={120}>
          <EmailBlock onSpotlight={onSpotlight} />

          <ul className="contact__channels">
            {CHANNELS.map((channel) => (
              <li key={channel.label} className="contact-channel" onMouseMove={onSpotlight}>
                <span className="contact-channel__label">{channel.label}</span>
                {channel.url ? (
                  <a href={channel.url} target="_blank" rel="noopener noreferrer" className="contact-channel__value">
                    {channel.value}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="contact-channel__value">{channel.value}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
