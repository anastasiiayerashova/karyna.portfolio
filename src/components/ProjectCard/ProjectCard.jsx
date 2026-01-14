import s from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
    const { title, caseNumber, description, images } = project
    
    return (
        <article className={s.card}>

            {/* Header */}
            <div className={s.header}>
                <h3 className={s.title}>{title}</h3>
                
            </div>

            {/* Description */}
            <div className={s.desc}>
                <p className={s.description}>{description}</p>
                <span className={s.case}>{caseNumber}<span>Case</span></span>
            </div>
            

            {/* Gallery */}
            <div className={s.gallery}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`${title} ${index + 1}`}
                        className={s.image}
                    />
                ))}
            </div>
            
        </article>
    )
 }

export default ProjectCard