import React from 'react';

const AboutMe = () => {
    return (
        <div id='AboutMe' className="min-w-screen min-h-screen bg-gradient-to-br from-rose-600 to-sky-500 px-4 py-8 flex flex-col items-center justify-center">
            <div className="text-center mb-10">
                <img
                    className="w-32 h-32 shadow-xl sm:w-40 sm:h-40 mx-auto rounded-full"
                    src="https://avatars.githubusercontent.com/u/145787360?v=4"
                    alt="Sutrawe A. C." 
                />
                <h1 className="text-3xl sm:text-4xl p-2 inline-block font-bold font-heading mt-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-purple-500 to-rose-600">Sutrawe A. C.</h1>
                <p className="text-md sm:text-lg italic align-middle mt-2 text-white shadow-xl "> 
                    <img src="/Images/react.svg" className='w-5 sm:w-7 inline-block align-middle mr-2' alt="reactabout" /> 
                    ReactJS Developer | Crafting Seamless User Experiences to Elevate Brands 
                </p>
            </div>

            <div className="text-md sm:text-lg p-4 text-center sm:text-left text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">About Me</h2>
                <p className="mb-4 sm:w-3/4 max-sm:mx-auto text-justify">
                &emsp; &emsp; I am a MERN stack Frontend developer with a passion for creating interactive and responsive websites and web applications. 
                Also seeking knowledge of backend developement with Next.js. 
                I have experience working with <strong> JavaScript, React, Redux, Node.js, Express, Tailwind CSS, MongoDB, HTML, CSS, and Git. </strong>
                I am a quick learner and I am always looking to expand my knowledge and skill set.
                </p>
                
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interests</h2>
                <ul className="list-none pl-5 max-sm:mx-auto sm:w-3/4">
                    <li>Watching videos <img src="Images/youtube.svg" alt="youtube" className='w-8 sm:w-12 inline-block' /></li>
                    <li>Meditating <img src="Images/meditating.svg" alt="meditating" className='w-8 sm:w-12 inline-block' /></li>
                    <li>Travelling <img src="Images/travel.svg" alt="travel" className='w-8 sm:w-12 inline-block' /></li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;
