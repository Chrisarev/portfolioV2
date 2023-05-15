import Hero from './Hero'
import SecondSection from './SecondSection'
import {motion} from 'framer-motion'

const Home = () =>{

    return (
        <motion.div initial={{opacity:1}}  exit={{opacity:0}}>
          <Hero />
          <SecondSection />
        </motion.div>
    )
}

export default Home;