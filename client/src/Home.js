import Hero from './Hero'
import SecondSection from './SecondSection'
import {motion} from 'framer-motion'
import ProjectSection from './ProjectSection'

const Home = () =>{

    return (
        <motion.div initial={{opacity:1}}  exit={{opacity:0}}>
          <Hero />
          <ProjectSection />
        </motion.div>
    )
}

export default Home;