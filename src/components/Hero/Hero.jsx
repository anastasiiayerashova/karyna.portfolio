import s from './Hero.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};


const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.hero_container}>

                <motion.div className={s.hero_content_wrap} variants={container} initial='hidden' animate='show'>
                <motion.div className={s.hero_content} variants={item}>
                    <motion.p className={s.hero_name} variants={item}>Karyna<span className={s.hero_secondname}>Yurkova</span></motion.p>
                    <motion.p className={s.hero_description} variants={item}>I design modern interfaces where aesthetics meet functionality, turning ideas into reality.</motion.p>
                </motion.div>

                <motion.div className={s.hero_left} variants={item}>
                    <motion.p className={s.hero_left_title} variants={item}>Design & Vision</motion.p>
                        <Link to='/about' className={s.hero_left_link}>
                            <img src="/public/icons/circle-arrow-down.svg" alt="Link" />
                            LEARN MORE
                        </Link>
                </motion.div>                    
                </motion.div>

            </div>
        </section>
    )
}

export default Hero