

const HowWeWork = () => {
  return (
   <section className="flex flex-col  md:flex-row lg:h-screen">
        <article className="flex flex-col flex-4  md:pt-10 gap-3 md:mr-10 md:border-r mt-5 ">
            <h1 className="uppercase tracking-wide text-[13px]">How We Work</h1>
            <p className="text-5xl md:text-6xl font-medium tracking-wide">
                We help our clients succeed with innovative strategies.
            </p>

        </article>
        <article className="flex-2 flex justify-between flex-col md:pt-10 gap-6 md:mr-10  mt-5 ">
            <p className="text-[20px] md:text-[22px] leading-relaxed">
                Through careful analysis, creative thinking, and a deep understanding of their goals,
                we empower businesses to surpass expectations and thrive in today's dynamic and
                competitive landscape.
            </p>
            <button className="bg-black rounded-xl text-white py-2 w-1/2">
                OUR SERVICES
            </button>

        </article>
   </section>
  )
}

export default HowWeWork