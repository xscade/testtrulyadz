import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Abstract Shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-orange-600 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-900 rounded-full blur-[140px] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-orange-500 font-bold text-lg sm:text-xl tracking-widest uppercase mb-4 animate-fade-in-up">
          Digital Marketing
        </h2>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-8 max-w-4xl mx-auto">
          GROWTH <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            WITHOUT LIMITS
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-6">
          TrulyAdz transforms brands with data-driven strategies, cutting-edge SEO, and campaigns that actually convert.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-black bg-orange-500 hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.5)]"
          >
            Get Started
          </Link>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-bold rounded-full text-white bg-transparent hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
