import s from './MobMenu.module.css'
import { Link } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const MobMenu = ({ isOpen, onClose }) => {

    const linksRef = useRef(null)

    useEffect(() => {
        if (isOpen && linksRef.current) {
            gsap.fromTo(
                linksRef.current.children,
                {
                    y: 40,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power2.out',
                }
            )
        }
    }, [isOpen])
    
    return (
    <>
      <div
        className={`${s.overlay} ${isOpen ? s.active : ''}`}
        onClick={onClose}
      />

      <div className={`${s.menu} ${isOpen ? s.open : ''}`}>
        <button className={s.close} onClick={onClose}>
          <RxCross1 size={22} color='#a45933' />
        </button>

        <nav className={s.links} ref={linksRef}>
          <Link to="/about" onClick={onClose}>About me</Link>
          <Link to="/workflow" onClick={onClose}>Workflow</Link>
          <Link to="/projects" onClick={onClose}>Projects</Link>
          <Link to="/contact" onClick={onClose}>Get in touch</Link>
        </nav>
      </div>
    </>
  )
 }

export default MobMenu