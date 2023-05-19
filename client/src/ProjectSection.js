import styles from './stylesheets/ProjectSection.module.css'
import motion from 'framer-motion'
import cleancards from './stylesheets/images/cleancardsIMG.png'
import { Link } from 'react-router-dom'

const ProjectSection = () => {

    return (

        <div className={styles.panel}>
            <div className={styles.projectHeader}>My Work</div>
            <div className={styles.projectsHolder}>
                <div className={styles.project} title="CleanCards"></div>
                <div className={styles.project} title="E2 Design Studio"></div>
                <div className={styles.project} title="YelpCamp"></div>
                <div className={styles.project} title="Pure Website Development"></div>
            </div>
        </div>
    )
}

export default ProjectSection;