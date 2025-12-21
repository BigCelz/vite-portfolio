import React from 'react'
import Hero from './sections/Hero'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import About from './sections/About'
import Contact from './sections/Contact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  return (
   <div className="relative">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App





