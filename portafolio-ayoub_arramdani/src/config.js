/** Datos de contacto y claves de servicios externos. */

export const EMAIL = 'ayoubarramdani091@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/ayoub-arramdani-b49b64311/'
export const GITHUB = 'https://github.com/Ayoubito04'

const SUBJECT = 'Contacto desde tu portafolio'

/**
 * Abre la aplicación de correo del visitante con el asunto ya puesto.
 *
 * OJO: no es fiable como única vía. Si el sistema no tiene ninguna app asociada
 * al protocolo mailto: (habitual en Windows cuando se usa webmail), el clic no
 * hace absolutamente nada y no se puede detectar desde JavaScript. Por eso la
 * sección de contacto ofrece además copiar la dirección y abrir Gmail web.
 */
export const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`

/** Redacción en Gmail web: funciona en cualquier navegador, sin app de correo. */
export const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL
)}&su=${encodeURIComponent(SUBJECT)}`
