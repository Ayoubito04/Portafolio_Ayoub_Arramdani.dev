import { useContext } from 'react'
import { LanguageContext } from '../i18n/LanguageContext'

/**
 * Idioma actual y utilidades para traducir. Los textos se escriben junto a los
 * datos de cada componente como { es: '...', en: '...' } y se resuelven con t().
 */
export default function useLanguage() {
  return useContext(LanguageContext)
}
