import styles from './stylesheets/ProjectSection.module.css'
import motion from 'framer-motion'
import cleancards from './stylesheets/images/cleancardsIMG.png'
import e2 from './stylesheets/images/designe2IMG.png'
import purewebdev from './stylesheets/images/purewebdevIMG.jpg'
import yelpcamp from './stylesheets/images/yelpcampNEW.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProjectSection = () => {

    const handleClick = () =>{

    }
    
    return (

        <div className={styles.panel}>
            <div className={styles.projectHeader}>My Work</div>
            <div className={styles.projectsHolder}>
                <img src={cleancards} alt="Cleancards" />
                <img src={e2} alt="" />
                <img src={purewebdev} alt="" />
                <img src={yelpcamp} alt="" />

                {/*
                <div className={styles.project} title="CleanCards"></div>
                <div className={styles.project} title="E2 Design Studio"></div>
                <div className={styles.project} title="YelpCamp"></div>
                <div className={styles.project} title="Pure Website Development"></div>
                */}
            </div>
        </div>
    )
}

export default ProjectSection;