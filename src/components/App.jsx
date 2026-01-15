
import './App.module.css'
import Header from './Header/Header.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import AboutPage from '../pages/AboutPage/AboutPage.jsx'
import WorkflowPage from '../pages/WorkflowPage/WorkflowPage.jsx'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage.jsx'
import ContactPage from '../pages/ContactPage/ContactPage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main>
        <HomePage/>
        <AboutPage/>
        <WorkflowPage/>
        <ProjectsPage/>
        <ContactPage/>
      </main>
    </>
  )
}

export default App
