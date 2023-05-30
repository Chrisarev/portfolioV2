
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './stylesheets/InfoSection.module.css'
import { useRef } from 'react'
import accessibilityIMG from './stylesheets/images/ben-kolde-compressed.png'
import maintainIMG from './stylesheets/images/maintain.png'
import uiuxIMG from './stylesheets/images/uxCompress.jpg'

const InfoSection = () => {
    //Need the useRef hook to get position of parent element 
    const targetRef = useRef(null);
    //Ref is the target of useScroll hook
    //number scrollYProgress contains num between 0-1 referring to 
    //how far user has scrolled in element 
    const { scrollYProgress } = useScroll({
        target: targetRef,
        //takes two strings ex:["start end", "end end"] which describe intersections between the target
        //and a container element(container is window if not defined)
        //Any range between those intersections is where scroll progress is applied
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

    const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 1, 1])
    const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [300, 0, -300])
    const translateY2 = useTransform(scrollYProgress, [0, 0.5, 1], [300, 0, -300])
    const translateY3= useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -150])
    const scale2 = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0.3, 0.8, 1, 1])
    const scale3 = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.3, 0.8, 1, 1])

    return (
        <>
            <div ref={targetRef} className={styles.panel}>
                <motion.h1 style={{ translateY: translateY3 }} className={styles.panelHeader}>I focus on</motion.h1>
                <div className={styles.infoSubSection}>
                    <motion.div style={{ translateY: translateY2 }} className={styles.topicHolder}>
                        <h2>Accessibility</h2>
                        <ul>
                            <li>Adhering to WCAG (Web Content Accessibility Guidelines) standards</li>
                            <li>Screen reader compatibility</li>
                            <li>Making websites responsive for all devices</li>
                        </ul>
                    </motion.div>
                    <motion.div className={styles.imgHolder} style={{ translateY, scale }}>
                        <img src={accessibilityIMG} alt="" />
                    </motion.div>
                </div>
                <div className={styles.infoSubSection}>
                    <motion.div className={styles.imgHolder} style={{ translateY, scale: scale2 }}>
                        <img src={uiuxIMG} alt="" />
                    </motion.div>
                    <motion.div style={{ translateY: translateY2 }} className={styles.topicHolder}>
                        <h2>User Experience</h2>
                        <ul>
                            <li>Designing and implementing fluid UI</li>
                            <li>Bringing website to life with animated content</li>
                            <li>Ensuring fast load times through optimization</li>
                        </ul>
                    </motion.div>
                </div>
                <div className={styles.infoSubSection}>
                    <motion.div style={{ translateY: translateY2 }} className={styles.topicHolder}>
                        <h2>Maintainability</h2>
                        <ul>
                            <li>Applying well known best practices consistently</li>
                            <li>Thorough and concise documentation</li>
                            <li>Ensuring adding many new features is feasible</li>
                        </ul>
                    </motion.div>
                    <motion.div className={styles.imgHolder} style={{ translateY, scale: scale3 }}>
                        <img src={maintainIMG} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default InfoSection;