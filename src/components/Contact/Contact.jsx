import s from './Contact.module.css'
import ContactForm from '../ContactForm/ContactForm.jsx'
import { LuPhone } from "react-icons/lu"
import { BsGeo } from "react-icons/bs"
import { motion } from 'framer-motion'

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

const Contact = () => {
    return (
        <section className={s.container}>
            <motion.h2 className={s.title} variants={fromLeft} initial='hidden' animate='show'>CONTACT</motion.h2>
            <div className={s.header}>
                <p className={`${s.form_title} visually_hidden`}>LET'S GET STARTED</p>
            </div>
            
            <div className={s.contact}>
                <div className={s.left_part}>
                    <div className={s.images}>
                        <img alt='Telegram' src='/images/contact1.png'/>
                        <img alt='Instagram' src='/images/contact2.png'/>
                    </div>

                    <div className={s.text_wrap}>
                        <p className={s.text_title}>Subscribe To<br/> My Social Media</p>
                        <ul className={s.list}>
                            <li className={s.list_item}>Instagram account:
                                <img alt='Instagram' src='/icons/instagram.svg'/>
                            </li>
                            <li className={s.list_item}>Telegram account:
                                <img alt='Telegram' src='/icons/telegram.svg'/>
                            </li>
                            <li className={s.list_item}>Behance account:
                                <img alt='Behance' src='/icons/behance (1).svg'/>
                            </li>
                            <li className={s.list_item}>WhatsApp account:
                                <img alt='Whatsapp' src='/icons/whatsapp.svg'/>
                            </li>
                        </ul>
                        <ul className={s.add_data}>
                            <li className={s.add_data_item}>
                                <LuPhone/>
                                +380661830828</li>
                            <li className={s.add_data_item}>
                                <img src='/icons/gmail.svg' alt=''/>
                                designfernis1@gmail.com</li>
                            <li className={s.add_data_item}>
                                <BsGeo color='red'/>
                                Germany</li>
                        </ul>
                    </div>

                </div>

                <div className={s.right_part}>
                    <p className={`${s.form_title_mob} visually_hidden`}>LET'S GET STARTED</p>
                    <ContactForm></ContactForm>
                </div>

            </div>
        </section>
    )
 }

export default Contact