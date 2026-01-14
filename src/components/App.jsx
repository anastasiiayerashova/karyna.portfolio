
import './App.module.css'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Workflow from './Workflow/Workflow.jsx'
import Projects from './Projects/Projects.jsx'
import Contact from './Contact/Contact.jsx'

function App() {

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Workflow></Workflow>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </>
  )
}

export default App
