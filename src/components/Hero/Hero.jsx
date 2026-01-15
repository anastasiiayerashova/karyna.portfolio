import s from './Hero.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import arrowIcon from '/public/icons/circle-arrow-down.svg'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const fromRight = {
  hidden: {
    opacity: 0,
    x: 60,
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


const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.hero_container}>

                <motion.div className={s.hero_content_wrap} variants={container} initial='hidden' animate='show'>
                <motion.div className={s.hero_content} variants={fromLeft}>
                    <motion.p className={s.hero_name} variants={fromLeft}>Karyna<span className={s.hero_secondname}>Yurkova</span></motion.p>
                    <motion.p className={s.hero_description} variants={fromLeft}>I design modern interfaces where aesthetics meet functionality, turning ideas into reality.</motion.p>
                </motion.div>

                <motion.div className={s.hero_left} variants={fromRight}>
                    <motion.p className={s.hero_left_title} variants={fromRight}>Design & Vision</motion.p>
                        <Link to='/about' className={s.hero_left_link}>
                            <img src={arrowIcon} alt="Link" />
                            LEARN MORE
                        </Link>
                </motion.div>                    
                </motion.div>

            </div>
        </section>
    )
}

export default Hero