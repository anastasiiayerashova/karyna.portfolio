import s from './About.module.css'
import { BsGeo } from "react-icons/bs"
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import PixelTransition from '../../component/PixelTransition'

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

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


const About = () => {

    const [loaded, setLoaded] = useState(false)
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
        <section className={s.container}>
            <motion.h2 className={s.about_title} variants={fromLeft} initial='hidden' animate='show'>ABOUT ME</motion.h2>

            <div className={s.about_desc}>
                <div className={s.about_desc_wrap}>
                    <p ref={textRef} className={s.about_desc_text}>I am Karyna, beginning my journey in web design and UX/UI. I am inspired by creativity and the desire to craft aesthetic, user-friendly, and modern interfaces. I strive to grow as a designer, improving my skills in visual design, UX analysis, and contemporary UI solutions. My goal is not just to make a website look beautiful but to create a convenient, intuitive, and effective product for users.</p>
                    <p className={s.germany}>
                        <BsGeo color='red'/>
                        Germany</p>
                </div>
                <div className={s.about_desc_img_wrap}>
                    <PixelTransition
                        firstContent={
                            <img
                                src='/images/about1.png'
                                width='720'
                                height='680'
                                className={`${s.about_img} ${loaded ? s.loaded : ''}`} onLoad={() => setLoaded(true)}
                                alt="Karyna Yurkova"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        }
                        secondContent={
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "grid",
                                    placeItems: "center",
                                    backgroundColor: "#111"
                                }}
                            >
                                <p style={{ fontWeight: 900, fontSize: "3rem", color: "#a45933" }}>I design interfaces that feel intuitive, not complicated</p>
                            </div>
                        }
                        gridSize={12}
                        pixelColor='#fff'
                        once={false}
                        animationStepDuration={0.4}
                        className="custom-pixel-card"
                    />
                </div>
            </div>

            <ul className={s.about_list}>
                <li className={s.about_list_item_first}>
                    <h3 className={s.about_list_title}>UX/UI & Web Design:</h3>
                    <motion.ul className={s.list} variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                        <motion.li variants={itemVariants}>User experience (UX) design</motion.li>
                        <motion.li variants={itemVariants}>Wireframing and prototyping</motion.li>
                        <motion.li variants={itemVariants}>Responsive interface development</motion.li>
                        <motion.li variants={itemVariants}>Working with grids, typography, and color schemes</motion.li>
                        <motion.li variants={itemVariants}>User research and scenario analysis</motion.li>
                    </motion.ul>
                </li>
                <li className={s.about_list_item_second}>
                    <h3 className={s.about_list_title}>Tools:</h3>
                    <motion.ul className={s.list} variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                        <motion.li variants={itemVariants}>Figma – prototypes, UI components, design systems</motion.li>
                        <motion.li variants={itemVariants}>Adobe Photoshop / Illustrator – graphics, retouching, vector elements</motion.li>
                    </motion.ul>                    
                </li>
                <li className={s.about_list_item_second}>
                    <h3 className={s.about_list_title}>Additional Skills:</h3>
                    <motion.ul className={s.list} variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                        <motion.li variants={itemVariants}>Brand concept development</motion.li>
                        <motion.li variants={itemVariants}>Typography, color, and composition</motion.li>
                        <motion.li variants={itemVariants}>Experience creating landing pages and multi-page websites</motion.li>
                    </motion.ul>                       
                </li>
            </ul>

            <ul className={s.tools}>
                <li className={s.tools_item}>
                    <div className={s.tools_wrap}>
                        <p className={s.tools_text}>Programs:</p>
                        <ul className={s.icons_list}>
                            <li>
                                <img className={s.images} alt='Photoshop' src='/icons/Photoshop.svg' />
                            </li>
                            <li>
                                <img className={s.images} alt='Figma' src='/icons/Figma.svg' />
                            </li>
                            <li>
                                <img className={s.images} alt='Illustrator' src='/icons/Illustrator.svg' />
                            </li>
                            <li>
                                <img className={s.images} alt='Behance' src='/icons/Behance.svg'/>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={s.tools_item}>
                    <div className={s.tools_wrap}>
                        <p className={s.tools_text}>Languages:</p>
                        <img className={s.lang} alt='' src='/images/languages.png'/>
                    </div>
                </li>
            </ul>

        </section>
    )
 }

export default About