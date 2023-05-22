
import { useScroll, useTransform, motion } from 'framer-motion'
import styles from './stylesheets/InfoSection.module.css'
import { useRef } from 'react'
import accessibilityIMG from './stylesheets/images/ben-kolde-compressed.png'

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

    return (
        <>
            <div ref={targetRef} className={styles.panel}>
                <h1 className={styles.panelHeader}>I focus on</h1>
                <div className={styles.infoSubSection}>
                    <h2>Accessiblity</h2>
                    <motion.div className={styles.imgHolder} style={{ translateY, scale }}>
                        <img src={accessibilityIMG} alt="" />
                    </motion.div>
                </div>
                <div className={styles.infoSubSection}>
                    <motion.div className={styles.imgHolder} style={{ translateY, scale }}>
                        <img src={accessibilityIMG} alt="" />
                    </motion.div>
                    <h2>User Experience</h2>
                </div>
                <div className={styles.infoSubSection}>
                <h2>Maintainability</h2>
                    <motion.div className={styles.imgHolder} style={{ translateY, scale }}>
                        <img src={accessibilityIMG} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default InfoSection;