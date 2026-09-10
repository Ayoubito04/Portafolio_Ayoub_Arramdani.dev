import { ICONS } from '../techIcons'

function TechIcon({ name, className }) {
  const icon = ICONS[name]
  // Sin icono no se devuelve el nombre: los chips ya lo escriben al lado y
  // saldría duplicado. Se queda solo la etiqueta de texto.
  if (!icon) return null

  return (
    <img
      src={`https://cdn.simpleicons.org/${icon.slug}/${icon.color}`}
      alt={name}
      title={name}
      loading="lazy"
      className={className}
    />
  )
}

export default TechIcon
