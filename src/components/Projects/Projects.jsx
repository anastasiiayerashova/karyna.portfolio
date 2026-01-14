import s from './Projects.module.css'
import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import projectsData from '../../data/projectsData.js'

const Projects = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>Projects</h2>

            <div className={s.list}>
                {projectsData.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
        </section>
    )
 }

export default Projects