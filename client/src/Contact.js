import styles from './stylesheets/Contact.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [buttonText, setButtonText] = useState('Submit'); 
    const [submitState, setSubmitState] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Submitted ✓')
        setSubmitState(true)
    }

    return (
        <>
            <div id="contactHeader" className={styles.panelHeader}>Get in touch</div>
            <div className={styles.panel}>
                <motion.div initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }} className={styles.infoSection}>
                    <h1 className={styles.infoHeader}><span>My Socials</span></h1>
                    <div className={styles.contactInfo}>
                        <Link to='https://github.com/Chrisarev'>
                        <div className={styles.infoHolder}>
                            <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <g data-name="Layer 5" id="Layer_5">
                                    <path d="M21.15,3H10.85A3.86,3.86,0,0,0,7,6.85v18.3A3.86,3.86,0,0,0,10.85,29h10.3A3.86,3.86,0,0,0,25,25.15V6.85A3.86,3.86,0,0,0,21.15,3ZM10.85,5h10.3A1.85,1.85,0,0,1,23,6.85V7H9V6.85A1.85,1.85,0,0,1,10.85,5ZM23,25.15A1.85,1.85,0,0,1,21.15,27H10.85A1.85,1.85,0,0,1,9,25.15V25H23ZM9,23V9H23V23Z" />
                                    <path d="M19,12.79l-4.29,4.3L13,15.29a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,19,12.79Z" />
                                </g>
                            </svg>
                            <p>Github</p>
                        </div>
                        </Link>
                        <Link to='https://www.linkedin.com/in/christian-lizasuain/'>
                        <div className={styles.infoHolder}>
                            <svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <g data-name="Layer 11" id="Layer_11">
                                    <path d="M25.41,7.09l-9-4a1,1,0,0,0-.82,0l-9,4A1,1,0,0,0,6,8v8.56A8.69,8.69,0,0,0,8.91,23l6.43,5.71a1,1,0,0,0,1.32,0L23.09,23A8.69,8.69,0,0,0,26,16.56V8A1,1,0,0,0,25.41,7.09ZM24,16.56a6.67,6.67,0,0,1-2.24,5L16,26.66l-5.76-5.12a6.67,6.67,0,0,1-2.24-5V8.65l8-3.56,8,3.56Z" />
                                    <path d="M13,14a3,3,0,0,0,2,2.82V19a1,1,0,0,0,2,0V16.82A3,3,0,1,0,13,14Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,17,14Z" />
                                </g>
                            </svg>
                            <p>LinkedIn</p>
                        </div>
                        </Link>
                        <div className={styles.infoHolder}>
                            <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <g data-name="Layer 17" id="Layer_17">
                                    <path d="M25.12,6H6.88A3.89,3.89,0,0,0,3,9.89V21.11A3.89,3.89,0,0,0,6.88,25H25.12A3.89,3.89,0,0,0,29,21.11V9.89A3.89,3.89,0,0,0,25.12,6Zm0,2,.16,0L16,14.76,6.72,8l.16,0ZM27,21.11A1.89,1.89,0,0,1,25.12,23H6.88A1.89,1.89,0,0,1,5,21.11V9.89a1.92,1.92,0,0,1,.1-.59l10.32,7.51a1,1,0,0,0,1.18,0L26.91,9.3a1.92,1.92,0,0,1,.1.59Z" />
                                </g>
                            </svg>
                            <p>Chris.arev@gmail.com</p>
                        </div>
                    </div>
                </motion.div>
                <div className={styles.formSection}>
                    <motion.div initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }} className={styles.contactForm}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Your Name:</label>
                                <input disabled={submitState} className={(submitState ? 'inActive':'')} type="text" name='name' required/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="phone">Phone Number:</label>
                                <input disabled={submitState} className={(submitState ? 'inActive':'')} type="tel"/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email:</label>
                                <input disabled={submitState} className={(submitState ? 'inActive':'')} type="email" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message:</label>
                                <textarea disabled={submitState} className={(submitState ? 'inActive':'')} required></textarea>
                            </div>
                            <div className={styles.buttonHolder}>
                                <button>{buttonText}</button>
                            </div>
                        </form>
                        {submitState &&
                            <div className={styles.submitMessage}>Thank you, I will contact you shortly!</div>
                        }
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Contact;