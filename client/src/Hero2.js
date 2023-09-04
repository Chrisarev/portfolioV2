import styles from './stylesheets/Hero2.module.css'
import AnimatedTextWord from './AnimatedTextWord'
import portrait from './stylesheets/images/portrait.jpg'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Hero2 = () => {

    const handleNav = (e) => {
        e.preventDefault();
        window.location.replace("/#projectSection")
    }
    const handleMouseOver = (e) =>{
        
    }

    return (

        <div className={styles.panel}>
            <Navbar />
            <div className={styles.textSection}>
                <motion.h1 animate={{ opacity: 1, translateY: 0 }} initial={{ opacity: 0, translateY: 50 }} transition={{ delay: 0.5, duration: 0.5 }}>Hello,<br></br> I'm <p className={styles.nameText}>Christian<br></br> Lizasuain.</p></motion.h1>
                <motion.h2 animate={{ opacity: 1, translateY: 0 }} initial={{ opacity: 0, translateY: 50 }} transition={{ delay: 0.7, duration: 0.5 }}>I'm a fullstack developer interested in fluid and responsive design.</motion.h2>
            </div>
            <div className={styles.imageSection}>
                <div className={styles.imageHolder}>
                    <div className={styles.cover}></div>
                    <img src={portrait} alt="" />
                </div>
                <div className={styles.circle} id="circle">
                    <svg className={styles.circleSVG} onClick={handleNav} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300">
                        <defs>
                            <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <circle cx="150" cy="100" r="75" fill="none" />
                        <g>
                            <use href="#circlePath" fill="none" />
                            <text fill="#FFF">
                                <textPath href="#circlePath">See my previous work! &#160; See my previous work!</textPath>
                            </text>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Hero2;