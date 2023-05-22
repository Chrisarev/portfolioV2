import Hero from './Hero'
import {motion} from 'framer-motion'
import ProjectSection from './ProjectSection'
import InfoSection from './InfoSection'

const Home = () =>{

    return (
        <motion.div initial={{opacity:1}}  exit={{opacity:0}}>
          <Hero />
          <InfoSection />
          <ProjectSection />
        </motion.div>
    )
}

export default Home;
