import diamond from '../assets/diamond1.svg'
import herovideo from '../assets/HeroVideo.mp4'
import '../App.css'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row  lg:h-screen gap-6 '>
        <section className='flex gap-4 flex-col-reverse lg:flex-col lg:flex-1  lg:justify-between lg:h-full items-start justify-start'>
            <div className='flex flex-col gap-3 lg:gap-3'>
                <p className='text-5xl sm:text-4xl md:text-7xl lg:text-7xl font-medium'>
                    We are a digital agency from Lisbon.
                </p>
                <p className=' text-[17px] md:text-[20px]  lg:text-[24px]'>Elevating brands through creative digital solutions,
                     proudly representing Lisbon's vibrant innovation.
                </p>
            </div>
            <div className='flex justify-start h-23 w-20'>
                <img 
                className='w-full'
                src={diamond} alt="" 
            />
            </div>
        </section>
        <div className='flex-1 lg:h-full rounded-2xl'>
            <video className='lg:w-full lg:h-full object-cover rounded-2xl' autoPlay loop muted playsInline >
                <source src={herovideo}  type='video/mp4' />
            </video>
        </div>
        

    </section>
  )
}

export default Hero