import React from 'react'
import 'remixicon/fonts/remixicon.css'

const page = () => {
  return (
    <div id='main' className='flex w-full h-full'>
      <div id='left' className="relative w-[40%] h-full bg-[url('/img/bg-left-hero2.jpg')] bg-cover bg-center">
        <div id="lnav" className='flex justify-between w-full px-8 py-5'>
          <i className="ri-arrow-left-line text-red-200"></i>
          <div id="lnavR" className='flex items-center'>
            <a href="https://drive.google.com/file/d/1NyQhLqTiEEi9Jp4pndS6GLvnB7RVtThW/view?usp=sharing" target='blank' className='mr-5 font-semibold hover:scale-125 transform transition duration-500 hover:text-blue-600 text-red-200'>My Resume</a>
            <a href="https://aniketsutrawe.vercel.app/#projects" target='blank' className='mr-5 text-red-200 font-semibold hover:scale-125 transform transition duration-500 hover:text-blue-600'>My Projects</a>
            <a href="https://linkedin.com/in/aniketsutrawe" target='blank'><i className="ri-linkedin-box-fill text-xl text-blue-600"></i></a>
          </div>
        </div>
        <div id="textcenter" className='absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-white'>
          <h1 className=' text-6xl font-bold'>Hello,</h1>
          <h3 className='text-2xl font-semibold'>I am Aniket Sutrawe</h3>
          <h5 className='text-md'> Expert <strong className='hover:cursor-default transform transition duration-500 hover:text-blue-600'>
            ReactJS Developer 🚀
          </strong>
            | Crafting Seamless User Experiences to Elevate Brands
          </h5>

          <p className=' opacity-80 text-s leading-5 mt-5 mb-5'>Welcome to my Landing Page.</p>

          <a href="https://aniketsutrawe.vercel.app" target='blank' className='border-b-2 border-b-blue-600 text-md pb-1 font-extrabold'>
            Portfolio <i className="ri-arrow-right-line text-blue-600"></i>
          </a>
        </div>
      </div>
      <div id='right' className='relative h-full w-[60%] bg-white'>
        <div id="rTop" className="flex w-full h-1/2">
          <div id="rtopleft" className="w-[55%] h-full bg-[url('/img/bg-left-hero2.jpg')] bg-cover bg-right ">
            <div className='relative top-1/2 left-1/2 pl-10 -translate-x-2/4 -translate-y-2/4'>
              <h1 className='font-bold text-4xl max-lg:text-xl text-purple-300 lg:pb-6 text-center pr-10'>My Skills</h1>
              <div className='flex text-3xl max-xl:text-sm lg:justify-between max-md:gap-4 max-lg:-ml-4 lg:mr-8 leading-relaxed '>
                <ul >
                  <li className='text-cyan-500 font-bold'><i class="ri-reactjs-line text-4xl max-lg:text-2xl font-normal"></i> React.Js</li>
                  <li className='text-cyan-500 font-bold'><i class="ri-tailwind-css-fill text-4xl max-lg:text-xl font-normal"></i> Tailwind CSS</li>
                  <li className='font-bold text-slate-300'><i class="ri-nextjs-line text-4xl max-lg:text-xl font-normal"></i> Next.Js</li>
                  <li className='font-bold text-yellow-400'><i class="ri-javascript-fill text-4xl max-lg:text-xl font-normal"></i> JavaScript</li>
                </ul>
                <ul>
                  <li className='font-bold text-emerald-500'><i class="ri-database-2-fill text-4xl max-lg:text-xl font-normal"></i> MongoDB</li>
                  <li className='font-bold text-orange-600'><i class="ri-git-merge-fill text-4xl max-lg:text-xl font-normal"></i> Git/GitHub</li>
                  <li className='font-bold text-violet-500'><i class="ri-bootstrap-fill text-4xl max-lg:text-xl font-normal"></i> BootStrap</li>
                  <li className='font-bold text-emerald-500'><i class="ri-nodejs-line text-4xl max-lg:text-xl font-normal"></i> Node.Js</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="rtopright" className="w-[45%] h-full bg-[url('/img/hero2.jpg')] bg-cover bg-top">

          </div>
        </div>
        <div id="rBottom" className="text-black w-full h-1/2 bg-[url('https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-top ">
          <div className='relative top-1/2 left-1/2 pl-16 -translate-x-2/4 -translate-y-2/4'>
            <h1 className='font-bold text-4xl max-lg:text-2xl text-transparent bg-gradient-to-r bg-clip-text from-purple-300 '>About Me,</h1>
            <p className='text-lg max-lg:text-sm font-semibold text-emerald-100 leading-7 pt-4 pr-14'>
              &emsp; &nbsp; I am a MERN stack Frontend developer with a passion for creating interactive and
              responsive websites and web applications.
              I have experience working with JavaScript, React, Redux, Node.js, Express, Tailwind CSS,
              MongoDB, HTML, CSS, and Git.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;