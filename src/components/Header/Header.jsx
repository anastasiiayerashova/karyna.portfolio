import s from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={s.container}>
            <p className={s.logo}><Link to='/'>FERNIS</Link></p>
            <ul className={s.links}>
                <li><Link to='/about'>About me</Link></li>
                <li><Link to='/workflow'>Workflow</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Get in touch</Link></li>
            </ul>
        </div>
    )
}

export default Header