function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ayoub Arramdani. Todos los derechos reservados.</p>
      <ul className="footer__social">
        <li>
          <a href="https://github.com/Ayoubito04" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ayoub-arramdani-b49b64311/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
