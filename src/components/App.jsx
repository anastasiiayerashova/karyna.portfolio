import './App.module.css'
import HomePage from '../pages/HomePage/HomePage.jsx'
import AboutPage from '../pages/AboutPage/AboutPage.jsx'
import WorkflowPage from '../pages/WorkflowPage/WorkflowPage.jsx'
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage.jsx'
import ContactPage from '../pages/ContactPage/ContactPage.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import SharedLayout from './SharedLayout.jsx'

function App() {

  const location = useLocation()

  return (
    <SharedLayout>
      <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/workflow' element={<WorkflowPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
      </AnimatePresence>
    </SharedLayout>
  )
}

export default App
