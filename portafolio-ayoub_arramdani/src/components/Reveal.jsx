import { useEffect, useRef, useState } from 'react'

/**
 * Muestra su contenido con un fundido hacia arriba al entrar en pantalla.
 *
 * Usa una animación (no una transición) para no interferir con los
 * `transition` de hover que llevan las tarjetas, y se marca como "is-done"
 * al terminar para devolver el control de transform/opacity al CSS normal.
 */
function Reveal({ children, className = '', delay = 0, as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleAnimationEnd(e) {
    // Ignora las animaciones que burbujean desde los hijos.
    if (e.target === ref.current) setDone(true)
  }

  const classes = ['reveal', visible && 'is-visible', done && 'is-done', className].filter(Boolean).join(' ')

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      onAnimationEnd={handleAnimationEnd}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
