import React from 'react'
import Bannerimage from '../assets/image/banner.b41e8bd3384755f8ff18.png'
import bannerimageprofile from '../assets/image/bannerimg2.png'
import bannerimage1 from'../assets/image/banner1.png'

function Banner() {
  return (
    <div className='bg-gradient-to-r from-[#151440] to-[#211C52] min-h-screen w-full relative overflow-hidden'>
      {/* Animated background divs */}
      <div className="absolute top-20 left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white/10 rounded-3xl blur-sm animate-bounce-slow"></div>
      <div className="absolute bottom-32 right-20 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-md animate-bounce-slow-delay"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/8 rounded-2xl blur-lg animate-float-up-down"></div>
      <div className="absolute bottom-1/4 left-1/3 w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white/6 rounded-3xl blur-sm animate-float-up-down-delay"></div>
      <div className="absolute top-1/2 right-1/3 w-18 h-18 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white/4 rounded-full blur-xl animate-bounce-slow"></div>
      
      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-8 lg:py-0">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start justify-center text-white relative z-10 text-center lg:text-left">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
              Collect Next
              <br />
              Generation
              <br />
              <span className="bg-blue-600 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">NFTs</span>
              <br />
              Today
            </h1>
            
            {/* Decorative curved line - hidden on mobile */}
            <div className="hidden sm:flex justify-center lg:justify-start mb-8 md:mb-12 w-full">
              <svg width="200" height="30" viewBox="0 0 400 60" className="sm:w-[300px] sm:h-[45px] md:w-[400px] md:h-[60px] text-purple-400">
                <path
                  d="M10 30 Q200 10 390 30"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="opacity-70"
                />
              </svg>
            </div>
            
            {/* Description text */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-8 md:mb-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed px-4 lg:px-0">
              Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
            </p>
            
            {/* CTA Button */}
            <div className="relative group cursor-pointer transform-gpu transition-all duration-500" style={{ perspective: '1000px' }}>
              <div className="bg-white/5 border border-white/10 flex justify-center items-center rounded-xl md:rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] p-2 md:p-4 transform-gpu transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-6 sm:px-8 md:px-12 lg:px-16 py-2 sm:py-3 md:py-4 rounded-lg md:rounded-xl shadow-2xl transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 border border-purple-500/30 relative overflow-hidden">
                  <span className="relative z-10 drop-shadow-sm">Get Connected</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg md:rounded-xl pointer-events-none opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg md:rounded-xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
                </button>
              </div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-30"></div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Avatar */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative animate-slide-left-right" style={{ perspective: '1000px' }}>
            {/* Main 3D Avatar Container */}
            <div className="w-[250px] h-[300px] sm:w-[350px] sm:h-[420px] md:w-[450px] md:h-[540px] lg:w-[500px] lg:h-[600px] xl:w-[600px] xl:h-[700px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-[50px] sm:rounded-[70px] md:rounded-[80px] lg:rounded-[100px] shadow-2xl relative overflow-hidden backdrop-blur-sm transform-gpu">
              <div className="absolute inset-0 rounded-[50px] sm:rounded-[70px] md:rounded-[80px] lg:rounded-[100px] overflow-hidden">
                <img 
                  src={Bannerimage}
                  alt="3D Avatar" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-600/50 rounded-[50px] sm:rounded-[70px] md:rounded-[80px] lg:rounded-[100px]"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-[50px] sm:rounded-[70px] md:rounded-[80px] lg:rounded-[100px]"></div>
              </div>
            </div>
            
            {/* Leslie Alexander Card */}
            <div className="absolute -left-8 sm:-left-12 md:-left-16 lg:-left-20 bottom-16 sm:bottom-20 md:bottom-24 lg:top-80 transform-gpu animate-float-gentle-3d hover:animate-none group cursor-pointer">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 shadow-2xl border border-white/30 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl scale-75 sm:scale-90 md:scale-100">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full overflow-hidden ring-1 sm:ring-2 ring-blue-100 shadow-lg">
                    <img 
                      src={bannerimageprofile}
                      alt="Leslie Alexander"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-xs sm:text-sm md:text-lg lg:text-xl">Leslie Alexander</h3>
                    <p className="text-gray-500 text-xs sm:text-xs md:text-sm font-medium">@leslie754</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl md:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
            
            {/* Current Bid Card */}
            <div className="absolute -right-8 sm:-right-12 md:-right-16 top-8 sm:top-12 md:top-16 transform-gpu animate-float-gentle-delay-3d hover:animate-none group cursor-pointer">
              <div className="bg-white/95 backdrop-blur-lg rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 shadow-2xl border border-white/30 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl scale-75 sm:scale-90 md:scale-100">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg ring-1 sm:ring-2 ring-purple-200">
                    <img src={bannerimage1} alt="" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs md:text-sm font-semibold uppercase tracking-wide">Current Bid</p>
                    <p className="text-gray-900 font-bold text-sm sm:text-base md:text-lg lg:text-xl">2.26 ETH</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-transparent rounded-2xl md:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slide-left-right {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(10px); }
        }
        
        @keyframes float-gentle-3d {
          0%, 100% { 
            transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) translateY(0px) translateZ(0px);
          }
          50% { 
            transform: perspective(1000px) rotateY(-12deg) rotateX(8deg) translateY(-12px) translateZ(20px);
          }
        }
        
        @keyframes float-gentle-delay-3d {
          0%, 100% { 
            transform: perspective(1000px) rotateY(15deg) rotateX(-5deg) translateY(0px) translateZ(0px);
          }
          50% { 
            transform: perspective(1000px) rotateY(12deg) rotateX(-8deg) translateY(-10px) translateZ(20px);
          }
        }
        
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-bounce-slow-delay { animation: bounce-slow 4s ease-in-out infinite 1s; }
        .animate-float-up-down { animation: float-up-down 5s ease-in-out infinite; }
        .animate-float-up-down-delay { animation: float-up-down 5s ease-in-out infinite 2s; }
        .animate-slide-left-right { animation: slide-left-right 6s ease-in-out infinite; }
        .animate-float-gentle-3d { animation: float-gentle-3d 4s ease-in-out infinite; }
        .animate-float-gentle-delay-3d { animation: float-gentle-delay-3d 4s ease-in-out infinite 1.8s; }
        .shadow-3xl { box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5); }
      `}</style>
    </div>
  )
}

export default Banner