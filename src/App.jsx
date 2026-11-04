import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [filter, setFilter] = useState('all')
  return (
    <div className="app-container">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero onProjectSelect={() => setFilter('all')} />
        <About />
        <Projects filter={filter} onFilterChange={setFilter} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
