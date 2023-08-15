import styles from './stylesheets/ProjectSection.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import cleancards from './stylesheets/images/cleancardsIMG.png'
import e2 from './stylesheets/images/designe2IMG.png'
import purewebdev from './stylesheets/images/purewebdevIMG.jpg'
import yelpcamp from './stylesheets/images/yelpcampNEW.jpg'
import redd from './stylesheets/images/redd.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const ProjectSection = () => {
    const [showCleancards, setShowCleancards] = useState(true);
    const [showE2, setShowE2] = useState(true);
    const [showPWD, setShowPWD] = useState(true);
    const [showYelpcamp, setShowYelpcamp] = useState(true);
    const [showRedd, setShowRedd] = useState(true);
    const [showSpacer, setShowSpacer] = useState(true);
    /* If set to true, only one project and its project description will be showing */
    const [showingProject, setShowingProject] = useState(false);
    /* relocate used as an index for a transform animation in css module. */
    const [relocate, setRelocate] = useState(0);
    const [projDesc, setProjDesc] = useState('');

    const [projectLink, setProjectLink] = useState('');
    const [gitProjLink, setGitProjLink] = useState('')

    /* passed an index determined by which project is clicked on and sets projDesc to be displayed */
    const projDescSetter = (index) => {
        if (index == 0) {
            setProjDesc('A full stack flashcard web application in which users can create an account and make multiple decks of flashcards to study. The Front-end was made with React and was backend made with Express.js + MongoDB.')
            setProjectLink('http://cleancards.herokuapp.com/')
            setGitProjLink('https://github.com/Chrisarev/cleanCards')
        } else if (index == 2) {
            setProjDesc("A mock design firm website made in React.js to showcase my front-end skills. Backend made with Express.js. Animations made with framer-motion.")
            setProjectLink('https://experiencedesign.herokuapp.com/')
            setGitProjLink('https://github.com/Chrisarev/designreact')
        } else if (index == 3) {
            setProjDesc('Personal web development blog which populates pages with posts I created and stored in mongoDB. Frontend made with EJS. Backend made with Express.js.')
            setProjectLink('https://purewebdev.herokuapp.com/')
            setGitProjLink('https://github.com/Chrisarev/purewebdev')
        } else if (index == 4) {
            setProjDesc('Full CRUD application with authentication, authorization, CORS, and cookie management. Frontend made with ejs and backend made with Express.js.')
            setProjectLink('https://herokappcreatenew.herokuapp.com/campgrounds?')
            setGitProjLink('https://github.com/Chrisarev/yelpcamp')
        } else if (index == 5) {
            setProjDesc("A full stack supplement e-commerce website in which users can make an account, add items to their cart, and checkout. Frontend made with React + Vite. Backend made with Express.js.")
            setProjectLink('https://reddsupplements.herokuapp.com/')
            setGitProjLink('https://github.com/Chrisarev/reddsupplements/tree/master')
        }
    }

    /* displays all projects, makes projDesc disappear */
    const displayProjects = () => {
        setShowCleancards(true); setShowE2(true); setShowPWD(true); setShowYelpcamp(true);
        setShowRedd(true); setShowSpacer(true); setShowingProject(false); setRelocate(0);
        setProjDesc('');
    }

    return (
        <div id="projectSection" className={styles.panel}>
            <div id="projectHeader" className={styles.projectHeader}>My Work</div>
            <div className={styles.projectsHolder}>
            <AnimatePresence>
                    {showRedd &&
                        <motion.div className={styles.reddHolder} initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => {
                                setShowCleancards(false); setShowE2(false);
                                setShowPWD(false); setShowYelpcamp(false); 
                                setShowSpacer(false); setShowingProject(true);
                                setRelocate(1); projDescSetter(5);
                                window.location.replace("/#projectHeader")
                            }}
                            onAnimationEnd={() => setRelocate(0)}
                            relocate={relocate}>
                            <img src={redd} alt="" />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {showCleancards &&
                        <motion.div className={styles.cleancardsHolder}  initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => {
                                setShowE2(false); setShowPWD(false);
                                setShowYelpcamp(false); setShowRedd(false); 
                                setShowSpacer(false); setShowingProject(true);
                                setRelocate(2); projDescSetter(0);
                                window.location.replace("/#projectHeader")
                            }}
                            onAnimationEnd={() => setRelocate(0)}
                            relocate={relocate}>
                            <img src={cleancards} alt="Cleancards" />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {showE2 &&
                        <motion.div className={styles.e2Holder} initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => {
                                setShowCleancards(false); setShowPWD(false);
                                setShowYelpcamp(false); setShowRedd(false); 
                                setShowSpacer(false); setShowingProject(true);
                                setRelocate(3); projDescSetter(2);
                                window.location.replace("/#projectHeader")
                            }}
                            onAnimationEnd={() => setRelocate(0)}
                            relocate={relocate}>
                            <img src={e2} alt="" />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {showPWD &&
                        <motion.div className={styles.pwdHolder} initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => {
                                setShowCleancards(false); setShowE2(false);
                                setShowYelpcamp(false); setShowRedd(false); 
                                setShowSpacer(false); setShowingProject(true);
                                setRelocate(4); projDescSetter(3);
                                window.location.replace("/#projectHeader")
                            }}
                            onAnimationEnd={() => setRelocate(0)}
                            relocate={relocate}>
                            <img src={purewebdev} alt="" />
                        </motion.div>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {showYelpcamp &&
                        <motion.div className={styles.yelpcampHolder} initial={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => {
                                setShowCleancards(false); setShowE2(false);
                                setShowPWD(false); setShowRedd(false); 
                                setShowSpacer(false); setShowingProject(true);
                                setRelocate(5); projDescSetter(4);
                                window.location.replace("/#projectHeader")
                            }}
                            onAnimationEnd={() => setRelocate(0)}
                            relocate={relocate}>
                            <img src={yelpcamp} alt="" />
                        </motion.div>
                    }
                </AnimatePresence>

                {/* FORMATTING PURPOSES, REMOVE WHEN ADDING NEW PROJECT*/}
                {showSpacer &&
                    <div className={styles.project}></div>
                }
                <AnimatePresence>
                    {showingProject &&
                        <motion.div className={styles.projectDesc}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            exit={{
                                opacity: 0,
                                x: 1000,
                                transition: { delay: 0, duration: 0 }
                            }}>
                            {projDesc}
                            <div className={styles.linksHolder}>
                                <Link to={projectLink}>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Interface / External_Link">
                                            <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link to={gitProjLink}>
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485V15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545V6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493V3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418V4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653V4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469V3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723V6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015V15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={styles.buttonHolder}>
                                <button className={styles.projectNavButton} onClick={displayProjects}>All Projects</button>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ProjectSection;