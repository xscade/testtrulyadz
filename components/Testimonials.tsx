import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      quote: "TrulyAdz transformed our digital presence. Their data-driven approach increased our qualified leads by 200% in just three months.",
      image: "https://picsum.photos/seed/sarah/200/200"
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthFlow',
      quote: "The most transparent agency we've worked with. Their reporting is clear, and the results speak for themselves. Highly recommended.",
      image: "https://picsum.photos/seed/michael/200/200"
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, EcoStyle',
      quote: "They truly understand brand storytelling. Our social media engagement skyrocketed after we started working with the TrulyAdz team.",
      image: "https://picsum.photos/seed/emily/200/200"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-orange-500 font-bold tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Our Clients <span className="text-orange-500">Say</span>
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the businesses we've helped scale to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-neutral-900 p-8 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-orange-500"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

