import React from 'react';
import HeroText from './HeroText';
import TagList from './TagList';
import heroimg from './hero.jpeg';
import Stats from './Stats';
import { ArrowRight, ChevronRight, Leaf, Apple, Heart, Users, Star } from 'lucide-react';

const HealthLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start bg-gradient-to-br from-white to-green-50/30 min-h-screen">
      <div className="w-full lg:w-[55%] min-h-[90vh] px-4 md:px-8 lg:px-28 flex flex-col justify-start items-center pt-4 lg:pt-8">
        <nav className="w-full lg:w-[85%] mb-8 lg:mb-20">
          <div className="flex items-center justify-between lg:justify-start lg:gap-12">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
              <span className="text-lg lg:text-xl font-bold text-gray-900">Bio Nutriva</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Navigation links */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-16 lg:top-0 left-0 lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none gap-4 lg:gap-12`}>
              {['Home', 'Product', 'Shop'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-green-600 transition-all duration-300 text-base lg:text-lg relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </nav>
        <div className="w-full lg:w-[85%]">
          <HeroText />
          <TagList />
          <Stats />
        </div>
      </div>
      <div className="w-full lg:w-[45%] px-4 lg:px-0 py-8 lg:pt-16 lg:pr-12">
        <div className="w-full max-w-2xl mx-auto lg:mx-0 relative">
          <div className="absolute -left-8 -top-8 w-24 lg:w-32 h-24 lg:h-32 bg-green-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -right-8 -bottom-8 w-24 lg:w-32 h-24 lg:h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />
          <div className="bg-gradient-to-br from-green-50 to-blue-50/30 rounded-[1.5rem] lg:rounded-[2.5rem] p-4 lg:p-8 relative transition-all duration-500">
            <img 
              src={heroimg}
              alt="Healthy foods arrangement" 
              className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
            />
            <div className="hidden md:block absolute -left-0 -bottom-0 bg-white rounded-t-[30px] p-6">
              <div className="flex items-center gap-3 p-6 bg-gray-300 rounded-[30px]">
                <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Star className="w-5 lg:w-6 h-5 lg:h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-gray-600">Trusted by</p>
                  <p className="text-base lg:text-lg font-bold text-gray-900">10k+ Customers</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block absolute -right-0 -top-0 bg-white rounded-b-[50%] p-10">
              <div className="flex items-center gap-3 p-10 bg-gray-300 rounded-[50%]">
                  <ArrowRight className="w-5 lg:w-6 h-5 lg:h-6 text-green-600" />
              </div>
            </div>
            {/* <div className="hidden md:block absolute -right-6 -bottom-6 bg-white rounded-xl lg:rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Star className="w-5 lg:w-6 h-5 lg:h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm text-gray-600">Trusted by</p>
                  <p className="text-base lg:text-lg font-bold text-gray-900">10k+ Customers</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthLanding;