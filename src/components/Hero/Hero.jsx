import s from './Hero.module.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.hero_container}>

                <div className={s.hero_content_wrap}>
                <div className={s.hero_content}>
                    <p className={s.hero_name}>Karyna<span className={s.hero_secondname}>Yurkova</span></p>
                    <p className={s.hero_description}>I design modern interfaces where aesthetics meet functionality, turning ideas into reality.</p>
                </div>

                <div className={s.hero_left}>
                    <p className={s.hero_left_title}>Design & Vision</p>
                        <Link to='/about' className={s.hero_left_link}>
                            <img src="/public/icons/circle-arrow-down.svg" alt="" />
                            LEARN MORE
                        </Link>
                </div>                    
                </div>

            </div>
        </section>
    )
}

export default Hero