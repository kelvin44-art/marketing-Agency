import { div } from 'motion/react-client'
import diamond from '../assets/diamond1.svg'

const Work = () => {
  return (
    <section className='flex flex-row my-10'>
        <article className='hidden lg:flex flex-1'>
            <p className='uppercase'>WHAT WE DO</p>

        </article>

        
        <article className='flex-4 lg:border-l gap-4 lg:px-8'>
            <div className='flex flex-col lg:flex-row gap-8 py-15 '>
            <span
            className=' w-20 h-8 flex items-center justify-center rounded-full'
            >
                <img src={diamond} alt="" />
            </span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>BRANDING</h1>
                <p className='leading-relaxed text-[20px]'>
                    We craft compelling brand identities that leave a lasting impression.
                </p>
            </div>
           </div>


           <div className='flex flex-col lg:flex-row gap-8 py-15 border-t'>
            <span
            className=' w-20 h-8 flex items-center justify-center rounded-full'
            >
                <img src={diamond} alt="" />
            </span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>VISUAL</h1>
                <p className='leading-relaxed text-[20px]'>
                    Captivating visual storytelling that engages and resonates with your audience.      
                </p>
            </div>
           </div>


           <div className='flex flex-col lg:flex-row gap-8  py-15 border-t'>
            <span
            className=' w-20 h-8 flex items-center justify-center rounded-full'
            >
                <img src={diamond} alt="" />
            </span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>INNOVATE</h1>
                <p className='leading-relaxed text-[20px]'>
                        Innovative and aesthetic designs that bring your ideas to life.
                </p>
            </div>
           </div>
           <div className='flex flex-col lg:flex-row gap-8 py-15 border-t'>
            <span
            className=' w-20 h-8 flex items-center justify-center rounded-full'
            >
                <img src={diamond} alt="" />
            </span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>DESIGN</h1>
                <p className='leading-relaxed text-[20px]'>
                    Engaging and persuasive content that captures attention and sparks meaningful connections.
                </p>
            </div>
           </div>

        </article>

    </section>
  )
}

export default Work