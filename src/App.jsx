import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [sparks, setSparks] = useState([])

  useEffect(() => {
    const handleClick = (e) => {
      // Check if click is within the resume section
      const isInResume = e.target.closest('.resume') !== null

      const spark = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        type: isInResume ? 'resume-spark' : 'spark'
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
          className={spark.type}
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
