import s from './MobMenu.module.css'
import { Link } from 'react-router-dom'
import { RxCross1 } from 'react-icons/rx'

const MobMenu = ({ isOpen, onClose }) => {
    return (
    <>
      <div
        className={`${s.overlay} ${isOpen ? s.active : ''}`}
        onClick={onClose}
      />

      <div className={`${s.menu} ${isOpen ? s.open : ''}`}>
        <button className={s.close} onClick={onClose}>
          <RxCross1 size={22} />
        </button>

        <nav className={s.links}>
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