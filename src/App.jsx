import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import portfolioData from './data/portfolioData'
import './App.css'

function App() {
  useEffect(() => {
    document.title = portfolioData.personalInfo.pageTitle;
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </>
  )
}

export default App
