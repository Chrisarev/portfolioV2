import styles from './stylesheets/Hero.module.css'
import motion from 'framer-motion'
import AnimatedTextWord from './AnimatedTextWord'

const Hero = () => {

    const handleNav = (e) =>{
        e.preventDefault();
        window.location.replace("/#projectSection")
    }
    return (

        <div className={styles.panel}>
            <div className={styles.header}>Hello,</div>
            <div className={styles.header}>I'm <span>Christian Lizasuain.</span></div>
            <AnimatedTextWord text="I am a Full stack developer interested in responsive and fluid design." />
            <div className={styles.circle} id="circle">
                <svg className={styles.circleSVG} onClick={handleNav} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300">
                    <defs>
                        <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                    </defs>
                    <circle cx="150" cy="100" r="75" fill="none" />
                    <g>
                        <use href="#circlePath" fill="none" />
                        <text fill="#FFF">
                            <textPath href="#circlePath">See my previous work!   See my previous work!</textPath>
                        </text>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Hero;