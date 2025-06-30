import Home from './components/Home'
import About from './components/Academics'
import Skills from './components/skills'
import Projects from './components/Project'
import Contact from './components/Contact'
import Navbar from './components/Navbar' 


function App() {
  return (
<div className="min-h-screen bg-gradient-to-r from-white via-[#f6ebff] to-[#d9bfff]">
        <Navbar />
      <div className="pt-20"></div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
