import s from './About.module.css'
import { BsGeo } from "react-icons/bs";

const About = () => {
    return (
        <section className={s.container}>
            <h2 className={s.about_title}>ABOUT ME</h2>

            <div className={s.about_desc}>
                <div className={s.about_desc_wrap}>
                    <p className={s.about_desc_text}>I am Karyna, beginning my journey in web design and UX/UI. I am inspired by creativity and the desire to craft aesthetic, user-friendly, and modern interfaces. I strive to grow as a designer, improving my skills in visual design, UX analysis, and contemporary UI solutions. My goal is not just to make a website look beautiful but to create a convenient, intuitive, and effective product for users.</p>
                    <p className={s.germany}>
                        <BsGeo color='red'/>
                        Germany</p>
                </div>
                <div className={s.about_desc_img_wrap}>
                    <img src='/public/images/about1.png' alt='Karyna Yurkova' className={s.about_img}/>
                </div>
            </div>

            <ul className={s.about_list}>
                <li className={s.about_list_item_first}>
                    <h3 className={s.about_list_title}>UX/UI & Web Design:</h3>
                    <ul className={s.list}>
                        <li>User experience (UX) design</li>
                        <li>Wireframing and prototyping</li>
                        <li>Responsive interface development</li>
                        <li>Working with grids, typography, and color schemes</li>
                        <li>User research and scenario analysis</li>
                    </ul>
                </li>
                <li className={s.about_list_item_second}>
                    <h3 className={s.about_list_title}>Tools:</h3>
                    <ul className={s.list}>
                        <li>Figma – prototypes, UI components, design systems</li>
                        <li>Adobe Photoshop / Illustrator – graphics, retouching, vector elements</li>
                    </ul>                    
                </li>
                <li className={s.about_list_item_second}>
                    <h3 className={s.about_list_title}>Additional Skills:</h3>
                    <ul className={s.list}>
                        <li>Brand concept development</li>
                        <li>Typography, color, and composition</li>
                        <li>Experience creating landing pages and multi-page websites</li>
                    </ul>                       
                </li>
            </ul>

            <ul className={s.tools}>
                <li className={s.tools_item}>
                    <div className={s.tools_wrap}>
                        <p className={s.tools_text}>Programs:</p>
                        <ul className={s.icons_list}>
                            <li>
                                <img alt='' src='/public/icons/Photoshop.svg' />
                            </li>
                            <li>
                                <img alt='' src='/public/icons/Figma.svg' />
                            </li>
                            <li>
                                <img alt='' src='/public/icons/Illustrator.svg' />
                            </li>
                            <li>
                                <img alt='' src='/public/icons/Behance.svg'/>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={s.tools_item}>
                    <div className={s.tools_wrap}>
                        <p className={s.tools_text}>Languages:</p>
                        <img className={s.lang} alt='' src='/public/images/languages.png'/>
                    </div>
                </li>
            </ul>

        </section>
    )
 }

export default About