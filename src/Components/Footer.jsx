import React from 'react';
import footerimg from './footer.jpg'

const Footer = () => {
  return (
    <footer className="w-[99vw] bg-gradient-to-b from-white to-[#F8FAF9] pt-16">
      {/* Consultation Banner */}
      <div className="bg-[#E8F2EA] p-8 rounded-2xl mb-16 max-w-6xl mx-auto shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={footerimg} 
            alt="Woman with salad" 
            className="w-48 h-48 rounded-2xl object-cover shadow-md"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="bg-white p-6 rounded-xl inline-block mb-6 shadow-sm">
              <p className="text-xl font-medium leading-relaxed text-gray-800">
                Make sure your daily nutrition is sufficient. Consult your problem about nutrition with us.
              </p>
            </div>
            <button className="bg-[#2C2C2C] text-white px-8 py-3 rounded-xl hover:bg-black transition-colors duration-300 font-medium transform hover:scale-105 active:scale-95">
              Consult Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#E8F2EA] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold">Nutrifit</span>
            </div>
            <p className="text-gray-600 pr-4">Your trusted partner in nutrition and wellness journey.</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'ANAB0565651', 'Privacy Policy', 'Terms of Use', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help Section */}
          <div>
            <h3 className="font-bold text-lg mb-6">Need Help</h3>
            <a href="mailto:support@nutrifit.com" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200">
              support@nutrifit.com
            </a>
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Social</h3>
              {/* <div className="flex gap-6">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 transform hover:scale-110"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div> */}
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="font-bold text-lg mb-6">Location</h3>
            <address className="text-gray-600 not-italic">
              258 Chapman Road STE 4A<br />
              New Castle, DE
            </address>
            <button className="mt-4 text-emerald-600 hover:text-emerald-700 flex items-center gap-2 transition-colors duration-200">
              Get Directions →
            </button>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Nutrifit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;