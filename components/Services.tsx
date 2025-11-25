import React from 'react';
import { BarChartIcon, RocketIcon, TargetIcon } from './Icons';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Performance SEO",
      description: "Dominate search rankings with our proprietary optimization strategies that drive organic traffic.",
      icon: <BarChartIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Social Media Ads",
      description: "High-converting campaigns across Meta, TikTok, and LinkedIn designed to scale your ROI rapidly.",
      icon: <TargetIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Growth Strategy",
      description: "Full-funnel analysis and data-driven consulting to unlock new revenue streams for your business.",
      icon: <RocketIcon className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-black mb-4">Results Driven Marketing</h3>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            We don't just chase vanity metrics. We focus on what matters: leads, sales, and revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-24 h-24 bg-orange-500 rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-black mb-6 shadow-lg group-hover:bg-orange-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;