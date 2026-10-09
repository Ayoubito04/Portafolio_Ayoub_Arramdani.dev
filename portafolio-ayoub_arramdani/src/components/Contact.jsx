import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useLanguage from '../hooks/useLanguage'
import useSpotlight from '../hooks/useSpotlight'
import { EMAIL, GITHUB, GMAIL_COMPOSE, LINKEDIN, MAILTO } from '../config'

const CHANNELS = [
  { id: 'linkedin', label: 'LinkedIn', value: '/in/ayoub-arramdani', url: LINKEDIN },
  { id: 'github', label: 'GitHub', value: '@Ayoubito04', url: GITHUB },
  {
    id: 'location',
    label: { es: 'Ubicación', en: 'Location' },
    value: { es: 'Cocentaina / Alcoy · Comunidad Valenciana', en: 'Cocentaina / Alcoy · Valencian Community' },
  },
]

/**
 * Bloque principal de contacto. Ofrece tres vías porque ninguna funciona para
 * todo el mundo: copiar siempre funciona, Gmail web no necesita app de correo,
 * y mailto: es lo más cómodo para quien sí tiene cliente configurado.
 */
function EmailBlock({ onSpotlight }) {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

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
      <span className="contact-channel__label">{t({ es: 'Escríbeme a', en: 'Email me at' })}</span>

      <a id="contact-email-address" href={MAILTO} className="contact-email__address">
        {EMAIL}
      </a>

      <div className="contact-email__actions">
        <button type="button" className="contact-email__btn" onClick={copyEmail}>
          {copied ? t({ es: '✓ Copiado', en: '✓ Copied' }) : t({ es: 'Copiar dirección', en: 'Copy address' })}
        </button>
        <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="contact-email__btn">
          {t({ es: 'Abrir en Gmail ↗', en: 'Open in Gmail ↗' })}
        </a>
      </div>
    </div>
  )
}

function Contact() {
  const onSpotlight = useSpotlight()
  const { t } = useLanguage()

  return (
    <section id="contacto" className="contact">
      <SectionHeading
        index="06"
        title={t({ es: 'Contacto', en: 'Contact' })}
        subtitle={t({ es: 'Hablemos de tu equipo o tu proyecto', en: "Let's talk about your team or your project" })}
      />

      <div className="contact__grid">
        <Reveal as="div" className="contact__intro">
          <p className="contact__lead">
            {t({
              es: '¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Escríbeme y te responderé lo antes posible.',
              en: "Have a project in mind or want to know more about my work? Write to me and I'll get back to you as soon as possible.",
            })}
          </p>
          <p className="contact__note">
            {t({
              es: 'Estoy disponible para incorporarme a un equipo como desarrollador Full Stack, en remoto o híbrido.',
              en: "I'm available to join a team as a Full Stack developer, remote or hybrid.",
            })}
          </p>
        </Reveal>

        <Reveal as="div" className="contact__ways" delay={120}>
          <EmailBlock onSpotlight={onSpotlight} />

          <ul className="contact__channels">
            {CHANNELS.map((channel) => (
              <li key={channel.id} className="contact-channel" onMouseMove={onSpotlight}>
                <span className="contact-channel__label">{t(channel.label)}</span>
                {channel.url ? (
                  <a href={channel.url} target="_blank" rel="noopener noreferrer" className="contact-channel__value">
                    {channel.value}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="contact-channel__value">{t(channel.value)}</span>
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
