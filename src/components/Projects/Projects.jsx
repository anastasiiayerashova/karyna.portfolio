import s from './Projects.module.css'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import projectsData from '../../data/projectsData.js'
import { motion } from 'framer-motion'

const fromLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Projects = () => {
    return (
        <section className={s.container}>
            <motion.h2 className={s.title} variants={fromLeft} initial='hidden' animate='show'>Projects</motion.h2>

            <div className={s.list}>
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
        </section>
    )
 }

export default Projects