import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
               <a href="#" className="text-3xl font-black tracking-tighter text-white">
                TRULY<span className="text-orange-500">ADZ</span>.
              </a>
              <p className="mt-4 text-gray-400 max-w-sm">
                Elevating brands through precision marketing. Let's build your future together.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Visit Us</h4>
                <p className="text-lg text-white font-medium">123 Marketing Ave, Suite 400</p>
                <p className="text-lg text-white font-medium">New York, NY 10001</p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Contact</h4>
                <p className="text-lg text-white hover:text-orange-500 transition-colors">
                  <a href="mailto:hello@trulyadz.com">hello@trulyadz.com</a>
                </p>
                <p className="text-lg text-white">
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </p>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="w-full h-[300px] lg:h-full rounded-2xl overflow-hidden border border-white/20 relative bg-gray-900">
             {/* Using a standard Google Maps Embed Iframe with a query for generic location since no specific API key is provided */}
             <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Times+Square,+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="TrulyAdz Location"
              className="grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
            {/* Overlay to style the map better for the dark theme if iframe doesn't support styling directly */}
            <div className="absolute inset-0 pointer-events-none border-4 border-orange-500/10 rounded-2xl"></div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TrulyAdz Digital Marketing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;