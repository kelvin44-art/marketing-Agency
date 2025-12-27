import silence from '../assets/silence.webp'
import silence1 from '../assets/silence1.webp'
import silence2 from '../assets/silence3.avif'
import Contact from '../Components/Contact'
import diamond from '../assets/diamond1.svg'
const Reroute = () => {
  return (
    <section className='flex flex-col gap-15'>
        <article className='flex flex-col lg:flex-row gap-10'>
            <div className='flex-4 lg:border-r flex gap-10 lg:gap-15 flex-col lg:pr-15   '>
                <h1 className='font-bold text-6xl lg:text-8xl uppercase tracking-wide '>
                    Enjoy Silence
                </h1>
                <p className='text-[18px] lg:text-[20px]'>
                    Discover how we reimagined their brand identity, 
                    crafting a compelling narrative that authentically 
                    connects with their audience and propels their business forward.
                </p>
            </div>
            <div className='flex-1 lg:px-10 flex flex-col gap-5'  >
                <div>
                    <h1 className='text-gray-500'>CLIENT</h1>
                    <p>DESIGN AGENCY</p>
                </div>
                <div>
                    <h1 className='text-gray-500'>TIMELINE</h1>
                    <p>3 MONTHS</p>
                </div>
                <div>
                    <h1 className='text-gray-500'>SEVICES</h1>
                    <p>BRANDING</p>
                </div>
                <div>
                    <h1 className='text-gray-500'>WEBSITE</h1>
                    <p>GOLA.AI</p>
                </div>

            </div>

        </article>
        <article className='flex flex-col lg:flex-row border-t gap-10 py-15'>
           <div className='flex-2 flex flex-col gap-10'>
            <div className='flex flex-col gap-5'>
                    <img 
                    className='h-20 w-20'
                    src={diamond} alt="" />
                    <div>
                        <h1 className='font-medium text-xl tracking-wide'>CHALLENGE</h1>
                        <p className='leading-relaxed text-[17px] text-gray-800'>
                            Our client needed a brand refresh to better reflect 
                            their evolving business values and appeal to a younger demographic.
                        </p>
                    </div>
                </div>
                
                <div className='flex flex-col gap-5'>
                    <img 
                    className='h-20 w-20'
                    src={diamond} alt="" />
                    <div>
                        <h1 className='font-medium text-xl tracking-wide'>SOLUTION</h1>
                        <p className='leading-relaxed text-[17px] text-gray-800'>
                           We conducted in-depth market research, 
                           refined their brand messaging, and created 
                           a modern visual identity that captured their essence.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <img 
                    className='h-20 w-20'
                    src={diamond} alt="" />
                    <div>
                        <h1 className='font-medium text-xl tracking-wide'>RESULT</h1>
                        <p className='leading-relaxed text-[17px] text-gray-800'>
                            The rebranded company experienced increased customer engagement, 
                            a boost in sales, and a stronger brand presence in the market.
                        </p>
                    </div>
                </div>


           </div>
           <div className='flex-4 flex flex-col gap-8 lg:border-l border-t py-10 lg:pl-15'>
                <img className='lg:h-140 rounded-2xl object-cover' src={silence1} alt="" />
                <img className='lg:h-140 rounded-2xl object-cover' src={silence} alt="" />
                <img className='lg:h-140 rounded-2xl object-cover' src={silence2} alt="" />
           </div>

        </article>
        <Contact/>
    </section>
  )
}

export default Reroute