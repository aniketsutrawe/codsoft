// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Landing Page</h2>
        <p className="text-lg">This is a simple landing page built with React.js and Tailwind CSS</p>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 mt-8 rounded-lg hover:bg-blue-200">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
