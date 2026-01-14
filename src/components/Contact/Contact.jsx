import s from './Contact.module.css'

const Contact = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>CONTACT</h2>

            <div className={s.contact}>
                <div className={s.left_part}>
                    <div className={s.images}>
                        <img alt='Telegram' src='/public/images/contact1.png'/>
                        <img alt='Instagram' src='/public/images/contact2.png'/>
                    </div>

                    <div className={s.text_wrap}>
                        <p className={s.text_title}>Subscribe To<br/> My Social Media</p>
                        <ul className={s.list}>
                            <li className={s.list_item}>Instagram account:</li>
                            <li className={s.list_item}>Telegram account:</li>
                            <li className={s.list_item}>Behance account:</li>
                            <li className={s.list_item}>WhatsApp account:</li>
                        </ul>
                        <ul className={s.add_data}>
                            <li className={s.add_data_item}>+380661830828</li>
                            <li className={s.add_data_item}>designfernis1@gmail.com</li>
                            <li className={s.add_data_item}>Germany</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
 }

export default Contact