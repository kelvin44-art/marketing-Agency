import Clients from '../Components/Clients'
import Contact from '../Components/Contact'
import FeaturedWork from '../Components/FeaturedWork'
import Hero from '../Components/Hero'
import HowWeWork from '../Components/HowWeWork'
import Mission from '../Components/Mission'
import {motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import Work from '../Components/Work'
import Values from '../Headers/Values'

function Home() {
  

  return (
    <>
      <motion.div
      >
      </motion.div>
    
        <div>
            <Hero/>
            <Clients/>
            <Work/>
            <FeaturedWork/>
            <HowWeWork/>
            <Values/>
            <Mission/>
            <Contact/>
        </div>
  </>
    
  )
}

export default Home