import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import useSpotlight from '../hooks/useSpotlight'

const INITIAL_FORM = { name: '', email: '', message: '' }

const CHANNELS = [
  {
    label: 'LinkedIn',
    value: '/in/ayoub-arramdani',
    url: 'https://www.linkedin.com/in/ayoub-arramdani-b49b64311/',
  },
  {
    label: 'GitHub',
    value: '@Ayoubito04',
    url: 'https://github.com/Ayoubito04',
  },
  {
    label: 'Ubicación',
    value: 'Cocentaina / Alcoy · Comunidad Valenciana',
  },
]

const FIELDS = [
  { id: 'name', label: 'Nombre', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
]

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent] = useState(false)
  const onSpotlight = useSpotlight()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSent(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contacto" className="contact">
      <SectionHeading index="06" title="Contacto" subtitle="Hablemos de tu equipo o tu proyecto" />

      <div className="contact__grid">
        <Reveal as="div" className="contact__info">
          <p className="contact__lead">
            ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Escríbeme y te responderé lo antes
            posible.
          </p>

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

        <Reveal as="form" className="contact__form" delay={120} onSubmit={handleSubmit}>
          {FIELDS.map((field) => (
            <div key={field.id} className="field">
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                placeholder=" "
                value={form[field.id]}
                onChange={handleChange}
              />
              <label htmlFor={field.id}>{field.label}</label>
            </div>
          ))}

          <div className="field">
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder=" "
              value={form.message}
              onChange={handleChange}
            />
            <label htmlFor="message">Mensaje</label>
          </div>

          <button type="submit" className="btn btn--accent contact__submit">
            Enviar mensaje
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </button>

          <p className={`contact__sent${sent ? ' is-visible' : ''}`} role="status">
            ¡Gracias! Tu mensaje ha sido registrado.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
