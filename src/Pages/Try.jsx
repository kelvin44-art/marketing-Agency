import {motion} from 'framer-motion'
import { useState } from 'react'

const Try = () => {
  const [buttonInfo, setButtonInfo] = useState('hello there')
  return (
    <div className='  py-10 border-t border-b my-10 flex justify-center items-center'>

        <motion.p
        
        >Hello There</motion.p>
    </div>
  )
}

export default Try