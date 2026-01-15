import './App.module.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import SharedLayout from './SharedLayout.jsx'
import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'))
const WorkflowPage = lazy(() => import('../pages/WorkflowPage/WorkflowPage'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage'))
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'))

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
