import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Experience from './components/Experience.jsx'
import TechStack from './components/TechStack.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
