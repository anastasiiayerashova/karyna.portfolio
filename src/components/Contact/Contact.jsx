import s from './Contact.module.css'
import ContactForm from '../ContactForm/ContactForm.jsx'
import { LuPhone } from "react-icons/lu";
import { BsGeo } from "react-icons/bs";

const Contact = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>CONTACT</h2>
            <div className={s.header}>
                <p className={s.form_title}>LET'S GET STARTED</p>
            </div>
            
            <div className={s.contact}>
                <div className={s.left_part}>
                    <div className={s.images}>
                        <img alt='Telegram' src='/public/images/contact1.png'/>
                        <img alt='Instagram' src='/public/images/contact2.png'/>
                    </div>

                    <div className={s.text_wrap}>
                        <p className={s.text_title}>Subscribe To<br/> My Social Media</p>
                        <ul className={s.list}>
                            <li className={s.list_item}>Instagram account:
                                <img alt='' src='/public/icons/instagram.svg'/>
                            </li>
                            <li className={s.list_item}>Telegram account:
                                <img alt='' src='/public/icons/telegram.svg'/>
                            </li>
                            <li className={s.list_item}>Behance account:
                                <img alt='' src='/public/icons/behance (1).svg'/>
                            </li>
                            <li className={s.list_item}>WhatsApp account:
                                <img alt='' src='/public/icons/whatsapp.svg'/>
                            </li>
                        </ul>
                        <ul className={s.add_data}>
                            <li className={s.add_data_item}>
                                <LuPhone/>
                                +380661830828</li>
                            <li className={s.add_data_item}>
                                <img src='/public/icons/gmail.svg' alt=''/>
                                designfernis1@gmail.com</li>
                            <li className={s.add_data_item}>
                                <BsGeo color='red'/>
                                Germany</li>
                        </ul>
                    </div>

                </div>

                <div className={s.right_part}>
                    <ContactForm></ContactForm>
                </div>

            </div>
        </section>
    )
 }

export default Contact