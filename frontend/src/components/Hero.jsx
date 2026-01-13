import hero from '../assets/hero.jpg'

export const Hero = () => {
    return (
        <section id='home' className='h-screen bg-slate-300'>
            <div className='absolute'>
                <img
                    src={hero}
                    className='z-1 h-[80vh] md:h-[90vh] w-screen  object-cover object-center'
                    alt="heroImage" />
            </div>

            <div className='relative flex flex-col  h-screen  justify-center items-center   '>
                <div className='bg-[#0f172bd1] py-3 px-2 flex flex-col gap-5 items-center h-auto w-auto'>

                    <h1 className='text-white italic text-2xl md:font-bold md:text-4xl md:px-5 md:py-7'>Enroll Now For The Better Future</h1>
                    
                        <a href="#courses">
                            <button className='border bg-blue-500 text-white cursor-pointer py-2 px-3 md:px-7 md:py-3 '>
                                Explore More
                            </button>
                        </a>
                   

                </div>
            </div>
        </section>
    )
}
