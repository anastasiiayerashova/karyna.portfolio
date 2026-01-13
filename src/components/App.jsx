
import './App.module.css'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'

function App() {

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
      </main>
    </>
  )
}

export default App
