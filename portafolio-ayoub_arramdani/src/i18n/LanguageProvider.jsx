import { useCallback, useEffect, useMemo, useState } from 'react'
import { LANGUAGES, LanguageContext } from './LanguageContext'

const STORAGE_KEY = 'lang'

const META_DESCRIPTION = {
  es: 'Ayoub Arramdani — Desarrollador Full Stack. Aplicaciones web y móviles con React, React Native, Node.js y bases de datos relacionales.',
  en: 'Ayoub Arramdani — Full Stack Developer. Web and mobile apps with React, React Native, Node.js and relational databases.',
}

/**
 * Idioma inicial: el que eligió el visitante la última vez; si no hay, inglés
 * solo cuando el navegador está en inglés. En cualquier otro caso, español.
 */
function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.includes(saved)) return saved
  } catch {
    // Almacenamiento bloqueado (modo privado, cookies desactivadas...).
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : LANGUAGES[0]
}

function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = lang
    document.querySelector('meta[name="description"]')?.setAttribute('content', META_DESCRIPTION[lang])
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Sin almacenamiento: el idioma se mantiene solo durante esta visita.
    }
  }, [lang])

  /**
   * Elige la versión del idioma actual de un texto { es, en }. Un string suelto
   * se devuelve tal cual: sirve para datos que son iguales en ambos idiomas.
   */
  const t = useCallback(
    (texts) => (typeof texts === 'string' ? texts : (texts[lang] ?? texts[LANGUAGES[0]])),
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
