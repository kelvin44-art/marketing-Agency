import mission from '../assets/mission.avif'

const Mission = () => {
  return (
    <section 
        className='flex flex-col lg:flex-row gap-10'>
        <article className='flex flex-1 lg:border-r lg:pr-10   overflow-hidden  '>
            <img 
             className='lg:object-cover rounded-2xl'
            src={mission} alt="" />
        </article>
        <article className='flex-1 flex flex-col gap-10 '>
           <div className='flex gap-8'>
            <span
            className='border w-30 h-8 flex items-center justify-center rounded-full'
            >01</span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>VISION</h1>
                <p className='leading-relaxed text-[20px]'>
                    Our relentless pursuit of a shared vision fuels our creativity and propels us forward. 
                    With clarity and foresight, we craft strategies that align with our clients' goals and aspirations,
                    transforming their dreams into reality and shaping a future worth embracing.
                </p>
            </div>
           </div>
             <div className='flex gap-8 border-t pt-5'>
            <span
            className='border w-30 h-8 flex items-center justify-center rounded-full'
            >02</span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>INNOVATION</h1>
                <p className='leading-relaxed text-[20px]'>
                    Innovation is at the core of everything we do. We embrace curiosity,
                    explore uncharted territories, and challenge the status quo. By pushing boundaries
                    and thinking outside the box, 
                    we create groundbreaking solutions that disrupt industries and inspire audiences.
                </p>
            </div>
           </div>
           <div className='flex gap-8 border-t pt-5'>
            <span
            className='border w-30 h-8 flex items-center justify-center rounded-full'
            >03</span>
            <div className='flex flex-col gap-3'>
                <h1 className='font-medium text-3xl'>CONNECTION</h1>
                <p className='leading-relaxed text-[20px]'>
                    We believe in the power of connection. We strive to build bridges between brands and
                    their audiences, fostering genuine and lasting relationships. Through compelling 
                    storytelling and meaningful interactions, we create experiences that evoke emotions,
                    strengthen bonds, and cultivate trust, ultimately turning customers into brand advocates.
                </p>
            </div>
           </div>

        </article>
    </section>
  )
}

export default Mission