import React from 'react';
import { CheckCircleIcon } from './Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative side element */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-500 to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-2">About TrulyAdz</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              We Are Architects of <br />
              <span className="text-orange-500">Digital Success</span>
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, TrulyAdz was born from a simple belief: digital marketing shouldn't be a black box. We bridge the gap between creative storytelling and hard data analytics to build brands that endure.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team consists of industry veterans who have managed millions in ad spend. We don't outsource your success; we own it.
            </p>

            <div className="space-y-4">
              {[
                "100% Data-Driven Campaigns",
                "Transparent Reporting Dashboards",
                "Dedicated Account Managers",
                "Proven ROI Track Record"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <span className="text-lg font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Our Team Strategy Session" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div>
                  <p className="text-4xl font-bold text-white">500+</p>
                  <p className="text-orange-400 font-medium uppercase tracking-wider">Clients Scaled</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;