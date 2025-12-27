import client1 from '../assets/client11.jpg'
import client2 from '../assets/client9.jpg'
import client3 from '../assets/client5.jpg'
import client4 from '../assets/client10.jpg'
import {motion } from 'framer-motion'
import { div, line } from 'framer-motion/client'
import { section } from 'framer-motion/m'

const Clients = () => {

  const clientele = [
    client1, client2, client3, client4
  ]
  return (
    <section className='w-full flex flex-col  items-center mt-10 overflow-hidden py-10 gap-10 border-t border-b '>
        <div className='flex-1  text-[20px] '>
              OUR CLIENT
        </div>
       <div className='w-full overflow-hidden'>
         <motion.div className='flex gap-10 w-[200%]' initial={{x: 0}} animate={{ x: ['0%', '-50%'] }} transition={{ ease: 'linear', duration: 30, repeat: Infinity }}>
           <ul className='flex shrink-0 gap-10'>
                {
                  [...clientele,...clientele,...clientele,...clientele,...clientele].map((items,index) => {
                    return <img 
                     className='h-20 w-20 rounded-full'
                    src={items} key={index} alt="" />
                  })
                }
           </ul>
           <ul className='flex shrink-0 gap-10'>
           {
                  [...clientele,...clientele,...clientele,...clientele,...clientele,...clientele].map((items,index) => {
                    return <img 
                     className='h-20 w-20 rounded-full'
                    src={items} key={index} alt="" />
                  })
                }
           </ul>
         </motion.div>
       </div>
    </section>
  )
}

export default Clients