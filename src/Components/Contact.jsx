
const Contact = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-10 lg:h-screen pt-10 border-t mt-10">
       <article className="flex-4 lg:border-r">
        <h1 className="tracking-wide text-[15px]">CONTACT</h1>
        <p className="text-5xl lg:text-7xl uppercase">
            Let’s bring your brand to the next level
        </p>
       </article>

       <article className="flex-2 gap-10 flex flex-col justify-between lg:px-15">
        <p className="text-[20px] leading-relaxed text-gray-800">
            Together, let's elevate your brand to new heights by unleashing its full 
            potential and captivating your target audience.
        </p>
        <button className="max-w-1/2 bg-black text-white px-3 py-2 rounded-xl">
            GET IN TOUCH
        </button>

       </article>
    </section>
  )
}

export default Contact