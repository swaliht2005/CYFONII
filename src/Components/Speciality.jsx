import React from 'react';
import banner1 from '../assets/image/banner1.png';

function Specialitys() {
  const specialities = [
    {
      id: "01",
      image: banner1,
      title: "Huge Collection",
      description: "Oficia dese runt mollit anim id est labo met, consectetur adipis"
    },
    {
      id: "02", 
      title: "High Quality",
      image: banner1,
      description: "Oficia dese runt mollit anim id est labo met, consectetur adipis"
    },
    {
      id: "03",
      title: "Top Resource",
      image: banner1,
      description: "Oficia dese runt mollit anim id est labo met, consectetur adipis"
    },
    {
      id: "04",
      title: "Big Community", 
      image: banner1,
      description: "Oficia dese runt mollit anim id est labo met, consectetur adipis"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#2a1a5e] via-[#1a1444] to-[#0f0a2e] min-h-screen w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-10 sm:right-20 w-30 h-30 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-purple-400/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Tag */}
        <div className="inline-block mb-6 sm:mb-8">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <span className="text-purple-400 font-medium text-sm sm:text-base">Our Speciality</span>
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-4">
          Complete Solutions
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            for your NFT
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
          Cyfonii is the premier marketplace for nifties, which are digital items you can 
          truly own for yourself
        </p>
        
        {/* Speciality Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 px-4">
          {specialities.map((item, index) => (
            <div 
              key={item.id}
              className="relative group hover:transform hover:scale-105 transition-all duration-500"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Card Background */}
              <div className="bg-gradient-to-br from-gray-800/20 via-gray-900/10 to-transparent backdrop-blur-sm border border-gray-700/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 h-full relative overflow-hidden group-hover:border-purple-500/50 transition-all duration-300">
                
                {/* Image Circle */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300 shadow-2xl group-hover:shadow-purple-500/25 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-cover rounded-full"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>
                
                {/* Large Number Background */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-4xl sm:text-6xl md:text-8xl font-black text-gray-800/20 select-none group-hover:text-white/30 transition-colors duration-300">
                  {item.id}
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Floating Animation */}
              <style jsx>{`
                .group:nth-child(1) {
                  animation: float1 6s ease-in-out infinite;
                }
                .group:nth-child(2) {
                  animation: float2 6s ease-in-out infinite 1s;
                }
                .group:nth-child(3) {
                  animation: float3 6s ease-in-out infinite 2s;
                }
                .group:nth-child(4) {
                  animation: float4 6s ease-in-out infinite 3s;
                }
                
                @keyframes float1 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
                
                @keyframes float2 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                
                @keyframes float3 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                
                @keyframes float4 {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-12px); }
                }
              `}</style>
            </div>
          ))}
        </div>
      </div>
      
      {/* Overall Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-blue-900/5 pointer-events-none"></div>
    </div>
  );
}

export default Specialitys;