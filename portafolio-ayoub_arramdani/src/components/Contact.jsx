import { useState } from 'react'
import Reveal from './Reveal'

const INITIAL_FORM = { name: '', email: '', message: '' }

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contacto" className="contact">
      <Reveal as="div" className="section-heading">
        <span className="section-heading__index">06</span>
        <h2>Contacto</h2>
      </Reveal>

      <div className="contact__grid">
        <Reveal as="div" className="contact__info">
          <p>
            ¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Escríbeme y te
            responderé lo antes posible.
          </p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/ayoub-arramdani-b49b64311/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>Cocentaina / Alcoy, Comunidad Valenciana, España</li>
          </ul>
        </Reveal>

        <Reveal as="form" className="contact__form" delay={120} onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} />

          <button type="submit" className="btn btn--accent">
            Enviar mensaje
          </button>

          {sent && <p className="contact__sent">¡Gracias! Tu mensaje ha sido registrado.</p>}
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
