import { useState, useEffect } from 'react'
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
  const [sparks, setSparks] = useState([])

  // Set page title from centralized data
  useEffect(() => {
    document.title = portfolioData.personalInfo.pageTitle;
  }, []);

  // Handle spark animations
  useEffect(() => {
    const handleClick = (e) => {
      const spark = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      }

      setSparks(prev => [...prev, spark])

      // Remove spark after animation completes
      setTimeout(() => {
        setSparks(prev => prev.filter(s => s.id !== spark.id))
      }, 1000)
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

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

      {/* Spark animations */}
      {sparks.map(spark => (
        <div
          key={spark.id}
          className="spark"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="spark-particle" style={{ '--i': i }} />
          ))}
        </div>
      ))}
    </>
  )
}

export default App
