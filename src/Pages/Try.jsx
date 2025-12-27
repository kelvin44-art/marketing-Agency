import {motion} from 'framer-motion'

const Try = () => {
  return (
    <div className='  py-10 border-t border-b my-10 flex justify-center items-center'>
      <button className="max-w-1/2 bg-black text-white px-3 py-2 rounded-xl"
      initial={{y: 0 }}
      whileHover={{y: '100%'}}
      >
            <motion.span
            initial={{y:0}}
            whileHover={{y: '10px'}}
            transition={{duration: 2}}>
            
              GET IN TOUCH
            </motion.span>
        </button>
    </div>
  )
}

export default Try