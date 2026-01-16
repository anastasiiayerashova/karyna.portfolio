import s from './Header.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MobMenu from '../MobMenu/MobMenu.jsx'
import { RxHamburgerMenu } from "react-icons/rx"
import StaggeredMenu from '../../component/StaggeredMenu'

const menuItems = [
  { label: 'About me', link: '/about' },
  { label: 'Workflow', link: '/workflow' },
  { label: 'Projects', link: '/projects' },
  { label: 'Get in touch', link: '/contact' },
]

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(prev => !prev)

    return (
        <>
            <div className={s.container}>
                <p className={s.logo}><Link to='/'>FERNIS</Link></p>
                {/* Desktop menu */}
                <ul className={s.links}>
                    <li><Link to='/about'>About me</Link></li>
                    <li><Link to='/workflow'>Workflow</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Get in touch</Link></li>
                </ul>
                {/* Mobile burger */}
                {/* <button type='button' className={s.burger} onClick={toggleMenu}>
                    <RxHamburgerMenu size={26} />
                </button> */}

                <div className={s.mobileMenu}>
                    <StaggeredMenu
          position="right"
          items={menuItems}
          accentColor="#a45933"
          menuButtonColor="#fff"
          openMenuButtonColor="#a45933"
          displayItemNumbering={false}
          closeOnClickAway
        />
                </div>
            </div>
            {/* <MobMenu isOpen={isMenuOpen} onClose={toggleMenu} /> */}
            
        </>

    )
}

export default Header