import { useCallback } from 'react'

/**
 * Devuelve un handler de mousemove que guarda la posición del cursor
 * dentro del elemento en las variables CSS --mx / --my, para que el CSS
 * pueda dibujar un halo que sigue al puntero.
 */
export default function useSpotlight() {
  return useCallback((e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])
}
