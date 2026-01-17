import s from './ProjectCard.module.css'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import TrueFocus from '../../component/TrueFocus.jsx'


const ProjectCard = ({ project }) => {
    const { title, caseNumber, description, images } = project
    const textRef = useRef(null)

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  }, [])
    
    return (
        <article className={s.card}>

            {/* Header */}
            <div className={s.header}>
                <h3 ref={textRef} className={s.title}>{title}</h3>
                
            </div>

            {/* Description */}
            <div className={s.desc}>
                <p ref={textRef} className={s.description}>{description}</p>
                <div className={s.case}>
    <TrueFocus
      sentence={`${caseNumber} Case`}
      blurAmount={4}
      animationDuration={1.4}
      pauseBetweenAnimations={0.8}
      manualMode={false}
    />
  </div>
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