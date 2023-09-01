import Hero from './Hero'
import {motion} from 'framer-motion'
import ProjectSection from './ProjectSection'
import InfoSection from './InfoSection'
import Contact from './Contact'
import Hero2 from './Hero2'

const Home = () =>{


    return (
        <motion.div initial={{opacity:1}}  exit={{opacity:0}}>
          <Hero2 />
          <InfoSection />
          <ProjectSection />
          <Contact />
        </motion.div>
    )
}

export default Home;
