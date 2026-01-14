import s from './ContactForm.module.css'
import { useId } from 'react'

const ContactForm = () => {

    const nameId = useId()
    const emailId = useId()
    const numId = useId()
    const msgId = useId()

    return (
        <form className={s.form}>
            <div className={s.input_group}>
                <label htmlFor={nameId} className='visually_hidden'>YOUR NAME</label>
                <input id={nameId} type='text' placeholder='YOUR NAME' />
            </div>
            <div className={s.input_group}>
                <label htmlFor={emailId} className='visually_hidden'>EMAIL</label>
                <input id={emailId} type='text' placeholder='EMAIL' />
            </div>
            <div className={s.input_group}>
                <label htmlFor={numId} className='visually_hidden'>NUMBER</label>
                <input id={numId} type='text' placeholder='NUMBER' />
            </div>
            <div className={s.input_group}>
                <label htmlFor={msgId} className='visually_hidden'>MESSAGE</label>
                <input id={msgId} type='text' placeholder='MESSAGE' />
            </div>
            <button type='submit' className={s.send_btn}>SEND</button>
        </form>
    )
 }

export default ContactForm