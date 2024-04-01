import React from 'react'

const frontendSkills = [
  {
    name: 'GitHub',
    image: 'Images/github.svg',
    url: 'https://github.com/aniketsutrawe/',
  },
  {
    name: 'HTML-5',
    image: 'Images/html.svg',
    url: 'https://html.com/',
  },
  {
    name: 'React',
    image: '/Images/react.svg',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Tailwind CSS',
    image: 'Images/tailwindlogo.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Bootstrap',
    image: 'Images/bootstrap.svg',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'Java Script',
    image: 'Images/js.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'NodeJS',
    image: 'Images/node-js.svg',
    url: 'https://nodejs.org/en',
  },
  {
    name: 'NextJS',
    image: 'Images/nextjs.svg',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Git',
    image: 'Images/git.svg',
    url: 'https://git-scm.com/',
  },
  {
    name: 'NPM',
    image: 'Images/npm.svg',
    url: 'https://www.npmjs.com/',
  },
  {
    name: 'MongoDB',
    image: 'Images/mongodb.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'VS Code',
    image: 'Images/vs-code.svg',
    url: 'https://code.visualstudio.com/',
  },
];

const Skills = () => {
  return (
    <>
    <div id='skills' className="p-10 w-full min-h-screen bg-gradient-to-br from-rose-600 to-sky-500 flex flex-col items-center justify-center">
        <h1 className='text-5xl md:text-7xl font-bold text-center text-white mb-10 font-heading'>My Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 animate-pulse ">
          {frontendSkills.map((skill, index) => (
            <a key={index} href={skill.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <img src={skill.image} alt={skill.name} className="w-20 h-20 object-cover mb-2" />
              <span className="mt-2 text-white font-semibold">{skill.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills