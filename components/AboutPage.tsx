import React from 'react';
import { CheckCircleIcon } from './Icons';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      {/* Page Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-900 rounded-full blur-[120px] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6">
            About <span className="text-orange-500">TrulyAdz</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are a team of digital architects, data scientists, and creative strategists dedicated to scaling your business without limits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                From Passion to Performance
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Founded in 2020, TrulyAdz was born from a simple belief: digital marketing shouldn't be a black box. We saw too many agencies hiding behind vanity metrics while businesses struggled to see real ROI.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We set out to change that by bridging the gap between creative storytelling and hard data analytics. Today, we help brands across the globe transform their digital presence and achieve sustainable growth.
              </p>
            </div>
             <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/800/600?grayscale&random=2" 
                  alt="Our Team Strategy Session" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse">
             <div className="lg:order-2">
              <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-4">Our Approach</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Data-Driven, Human-Centric
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We don't guess; we test. Our strategies are built on a foundation of rigorous data analysis and consumer behavior insights. But we never lose sight of the human element—because at the end of the day, you're selling to people, not pixels.
              </p>
               <div className="space-y-4">
                {[
                  "Comprehensive Market Analysis",
                  "Audience Segmentation & Targeting",
                  "Creative Optimization & A/B Testing",
                  "Real-time Performance Tracking"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:order-1">
              <div className="absolute inset-0 bg-orange-900 rounded-2xl transform -rotate-3 -translate-x-2 -translate-y-2 opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src="https://picsum.photos/800/600?grayscale&random=3" 
                  alt="Data Analysis" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    { number: "500+", label: "Clients Scaled" },
                    { number: "$50M+", label: "Ad Spend Managed" },
                    { number: "300%", label: "Avg. ROI Increase" },
                    { number: "24/7", label: "Support & Monitoring" }
                ].map((stat, idx) => (
                    <div key={idx} className="p-4">
                        <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                        <div className="text-orange-500 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

