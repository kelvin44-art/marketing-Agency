import umbrellawoman from '../assets/umbrellaWoman.webp'
import culture from '../assets/culture.avif'
import boring from '../assets/boring.avif'
import halffaced from '../assets/halffaced.avif'
import thinking from '../assets/thinking.avif'
import { useEffect, useState } from 'react'
import '../App.css'
import { motion } from 'framer-motion'

function FeaturedWork() {
  const [mousePosition, setMousePosition]= useState({
    x: 0,
    y:0
  })
  console.log(mousePosition)

  useEffect(() =>{
    const mousemovement = e =>{
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', mousemovement)
    return () => {
      window.removeEventListener('mousemove', mousemovement)
    }
  }, [mousePosition])

  const variants= {
    default:{
      x: mousePosition.x - 24,
      y:mousePosition.y -18
    }
  }



  return (
    <div className='flex flex-col lg:flex-row gap-8 py-12 lg:mt-5 border-t border-b items-start'>
              
              <div className='flex flex-col gap-2 lg:gap-5  lg:pr-15 lg:flex-1 '>
                <h1 className='font-bold text-5xl tracking-wide lg:text-7xl sticky'>
                  FEATURED WORK
                </h1>
                <p className='text-[18px] lg:text-[20px] py-2'>
                  Showcasing our standout projects that blend creativity, strategy, and cutting-edge design.
                </p>
                <button className="max-w-1/2 bg-black text-white px-3 py-2 rounded-xl mt-5">
                  SEE ALL WORK
                </button>
              </div>
              <section className=' flex-2 flex flex-col gap-8 lg:border-l lg:pl-10  justify-between '>
        <div className='flex flex-col  gap-3 border-t pt-8 lg:border-t-0 lg:pt-0'>
           <div className='rounded-2xl'>
            <motion.div 
              variants={variants}
              animate='default'
              className='cursor hidden'
              >fylla
              </motion.div>
                <img 
                 className='rounded-2xl'
                src={umbrellawoman} alt="" />
           </div>
            <div className='flex justify-between'>
                    <p className='font-medium  text-xl '>Dancing Stars</p>
                    <p className='text-xl lg:font-medium'>2026</p>   
            </div>
        </div>
        
        <article className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex flex-col gap-3 '>
                <img
                className='rounded-2xl'
                src={thinking} alt="" />
                <div className='flex justify-between'>
                    <p className='font-medium  text-xl '>Enjoy Silence</p>
                    <p className='text-xl  lg:font-medium'>2026</p>   
                </div>
            </div>
            <div className='flex flex-col gap-3  '>
                <img 
                className='rounded-2xl' 
                src={halffaced} alt="" />
                <div className='flex justify-between'>
                    <p className='font-medium  text-xl'>Pure Vision</p>
                    <p className='text-xl  lg:font-medium'>2026</p>   
            </div>
            </div>
        </article>
        <article className='flex  gap-3 flex-col lg:flex-row'>
            <div className='flex flex-col gap-3 '>
                <img
                className='rounded-2xl'
                src={culture} alt="" />
                <div className='flex justify-between'>
                    <p className='font-medium  text-xl '>New Culture</p>
                    <p className='text-xl l lg:font-medium'>2026</p>   
            </div>
            </div>
            <div className='flex flex-col gap-3 '>
                <img 
                className='rounded-2xl' 
                src={boring} alt="" />
                <div className='flex justify-between'>
                    <p className='font-medium  text-xl '>Boring Brands</p>
                    <p className='text-xl  lg:font-medium'>2026</p>   
            </div>
            </div>
        </article>
    </section>
            </div>
    
  )
}

export default FeaturedWork