import Reveal from './Reveal'

/** Cabecera común de sección: índice, título y línea decorativa. */
function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal as="header" className="section-heading">
      <div className="section-heading__top">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" />
      </div>
      <h2>{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </Reveal>
  )
}

export default SectionHeading
