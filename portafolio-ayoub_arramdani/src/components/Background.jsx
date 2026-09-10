/**
 * Capa decorativa fija detrás de todo el contenido:
 * malla de líneas con degradado de opacidad, auroras de color y grano.
 */
function Background() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-layer__grid" />
      <div className="bg-layer__aurora bg-layer__aurora--1" />
      <div className="bg-layer__aurora bg-layer__aurora--2" />
      <div className="bg-layer__aurora bg-layer__aurora--3" />
      <div className="bg-layer__noise" />
    </div>
  )
}

export default Background
