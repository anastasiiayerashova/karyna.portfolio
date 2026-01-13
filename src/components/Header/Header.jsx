import s from './Header.module.css'
// import { useState, useEffect } from 'react'

const Header = () => {
    return (
        <div className={s.container}>
            <p className={s.logo}>FERNIS</p>
            <ul className={s.links}>
                <li>About me</li>
                <li>Workflow</li>
                <li>Projects</li>
                <li>Get in touch</li>
            </ul>
        </div>
    )
}

export default Header