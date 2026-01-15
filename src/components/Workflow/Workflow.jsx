import s from './Workflow.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'

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

const Workflow = () => {

    const [loaded, setLoaded] = useState(false)

    return (
        <section className={s.container}>
            <motion.h2 className={s.title} variants={fromLeft} initial='hidden' animate='show'>Workflow</motion.h2>

            <div className={s.content_wrap}>
                <div className={s.img_wrap}>
                    <img width='720' height='690' src='/public/images/workflow1.png' alt='Karyna Yurkova' onLoad={() => setLoaded(true)} className={`${s.workflow_img} ${loaded ? s.loaded : ''}`}/>
                </div>
                <div className={s.text_wrap}>
                    <div className={s.text_container}>
                        <p>
                            Analysis &amp; Research: Studying the niche, competitors, and target audience; defining project goals.<br />
                            Idea &amp; Concept: Developing visual style, color palette and UI components.
                        </p>
                    </div>
                    <div className={s.text_container}>
                        <p>
                            UX Design: Creating information architecture and page prototypes.<br />
                            UI Design: Finalizing visual style, adding<br />
                            graphics and interactive elements.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
 }

export default Workflow