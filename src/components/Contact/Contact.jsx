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

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

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
                        <img width='212' height='212' alt='Telegram' src='/images/contact1.png'/>
                        <img width='212' height='212' alt='Instagram' src='/images/contact2.png'/>
                    </div>

                    <div className={s.text_wrap}>
                        <p className={s.text_title}>Subscribe To<br/> My Social Media</p>
                        <motion.ul className={s.list} variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                            <motion.li variants={itemVariants} className={s.list_item}>Instagram account:
                                <img alt='Instagram' src='/icons/instagram.svg'/>
                            </motion.li>
                            <motion.li variants={itemVariants} className={s.list_item}>Telegram account:
                                <img alt='Telegram' src='/icons/telegram.svg'/>
                            </motion.li>
                            <motion.li variants={itemVariants} className={s.list_item}>Behance account:
                                <img alt='Behance' src='/icons/behance (1).svg'/>
                            </motion.li>
                            <motion.li variants={itemVariants} className={s.list_item}>WhatsApp account:
                                <img alt='Whatsapp' src='/icons/whatsapp.svg'/>
                            </motion.li>
                        </motion.ul>
                        <motion.ul className={s.add_data} variants={listVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                            <motion.li variants={itemVariants} className={s.add_data_item}>
                                <LuPhone/>
                                +380661830828</motion.li>
                            <motion.li variants={itemVariants} className={s.add_data_item}>
                                <img src='/icons/gmail.svg' alt=''/>
                                designfernis1@gmail.com</motion.li>
                            <motion.li variants={itemVariants} className={s.add_data_item}>
                                <BsGeo color='red'/>
                                Germany</motion.li>
                        </motion.ul>
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