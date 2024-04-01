import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='p-10 grid grid-cols-1 leading-snug md:grid-cols-2 items-center mt-[-20px] lg:h-[calc(49%+2rem)] max-md:h-[calc(70%+2rem)] max-sm:h-[calc(70%+2rem)]'>

      <div>
        <h4 className='font-bold  text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>Hello, I’m Aniket Sutrawe</h4>
        <h1 className='font-extrabold text-[45px]'> Professional Front-End<br></br>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 '>Developer</span>
        </h1>
        <h1 className='text-orange-500 text-2xl font-semibold mt-3'>Welcome to my Landing Page</h1>

        <div className='mt-6 flex gap-7'>
          <button className='bg-gradient-to-r from-blue-600 to-purple-600  px-3 py-1 text-white pb-2 rounded-full hover:scale-105 transition-all duration-300'>
            Resume
          </button>
          
          <button className=' px-3 text-blue-600 pb-1 rounded-full border-blue-600 border-[1px] border-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition-all duration-300'>
            Read More
          </button>
        </div>
      
      </div>

      <div className='lg:w-[400px] lg:h-[400px] max-sm:w-[200px] max-sm:h-[200px] md:w-[300px] md:h-[300px]  bg-gradient-to-tr from-red-500 via-purple-500 to-sky-600 mt-10 rounded-full xl:ml-48 max-md:mx-auto'>
        <img src="/Images/js.png" alt="js" className='absolute z-10 mt-5 max-md:w-10' width={70} />
        <img src="/Images/node.png" alt="node" className='absolute z-10 -mt-16 ml-48 max-md:w-12 max-md:-mt-5 max-md:ml-32' width={70} />
        <img src="/Images/mongodb.png" alt="mongodb" className='absolute z-10 mt-44 -ml-32 max-md:mt-32 max-md:ml-44 max-md:w-14' width={100} />
        <img src="/Images/TailwindCSS.png" alt="js" className='absolute z-10 mt-16 ml-64 max-md:w-24 max-md:ml-40' width={200} />
        <img src='/Images/heroimg1.png' className='relative md:ml-6 md:mt-6 max-md:w-[185px] max-md:ml-2 rounded-full w-[350px] z-0'/>
        <img src="/Images/reactcard.png" alt="react card" className='absolute -mt-20 z-10 max-md:w-28 max-md:-mt-14 max-md:-ml-8' />
      </div>


    </div>
  )
}

export default Hero