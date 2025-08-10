import React from 'react'
import Bannerimage from '../assets/image/banner.b41e8bd3384755f8ff18.png'
import bannerimageprofile from '../assets/image/bannerimg2.png'
import bannerimage1 from'../assets/image/banner1.png'
function Banner() {
  return (
    <div className='bg-gradient-to-r from-[#151440] to-[#211C52] h-screen w-full relative overflow-hidden'>
        {/* Animated background divs - slow up and down movement */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-3xl blur-sm animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-white/5 rounded-full blur-md animate-bounce-slow-delay"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-white/8 rounded-2xl blur-lg animate-float-up-down"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-white/6 rounded-3xl blur-sm animate-float-up-down-delay"></div>
        <div className="absolute top-1/2 right-1/3 w-36 h-36 bg-white/4 rounded-full blur-xl animate-bounce-slow"></div>
        
        <div className="h-full w-full flex justify-between flex-row items-center">
            <div className="h-full w-1/2 flex justify-center items-center">
               <div className="flex flex-col items-start justify-center p-8 text-white relative z-10">
                    {/* Main heading */}
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                    Collect Next
                    <br />
                    Generation
                    <br />
                    <span className="bg-blue-600 px-4 py-2 rounded-lg inline-block">NFTs</span>
                    <br />
                    Today
                    </h1>
                    
                    {/* Decorative curved line */}
                    <div className="flex justify-start mb-12 w-full">
                    <svg width="400" height="60" viewBox="0 0 400 60" className="text-purple-400">
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
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                    Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself
                    </p>
                    
                    {/* CTA Button */}
                 
      <div 
        className="relative group cursor-pointer transform-gpu transition-all duration-500"
        style={{ perspective: '1000px' }}
      >
        {/* Outer container with glassmorphism */}
        <div 
          className="bg-white/5 border border-white/10 flex justify-center items-center rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)] p-4 transform-gpu transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          style={{ 
            transform: 'perspective(1000px) rotateX(2deg) rotateY(-3deg)',
            boxShadow: `
              0 15px 35px rgba(0,0,0,0.3),
              0 0 15px rgba(255,255,255,0.1),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `
          }}
        >
          {/* Main Button with 3D effect */}
          <button 
            className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white text-xl font-semibold px-16 py-4 rounded-xl shadow-2xl transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25 border border-purple-500/30 relative overflow-hidden"
            style={{
              boxShadow: `
                0 10px 25px rgba(147, 51, 234, 0.3),
                inset 0 1px 0 rgba(255,255,255,0.2),
                inset 0 -1px 0 rgba(0,0,0,0.2)
              `
            }}
          >
            {/* Button text with subtle 3D effect */}
            <span className="relative z-10 drop-shadow-sm">Get Connected</span>
            
            {/* 3D highlight effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-xl pointer-events-none opacity-60"></div>
            
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none"></div>
          </button>
          
          {/* 3D depth layers */}
          <div 
            className="absolute inset-0 bg-white/3 border border-white/5 rounded-2xl -z-10"
            style={{ 
              transform: 'translateZ(-5px) translateX(3px) translateY(3px)',
            }}
          ></div>
          <div 
            className="absolute inset-0 bg-white/2 border border-white/3 rounded-2xl -z-20"
            style={{ 
              transform: 'translateZ(-10px) translateX(6px) translateY(6px)',
            }}
          ></div>
        </div>
        
        {/* Floating glow effect */}
        <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-30"></div>
        
        {/* 3D reflection effect */}
        <div 
          className="absolute top-full left-0 w-full h-20 opacity-20 overflow-hidden rounded-b-2xl"
          style={{
            background: 'linear-gradient(180deg, rgba(147, 51, 234, 0.2) 0%, transparent 100%)',
            transform: 'perspective(1000px) rotateX(-60deg) translateY(-10px) scaleY(0.4)',
            transformOrigin: 'top'
          }}
        >
          <div className="w-full h-full bg-purple-500/10 blur-sm"></div>
        </div>
      </div>
    </div>
                </div>
   
            
         <div className="h-full w-1/2 flex justify-center items-center relative">
                {/* Main 3D Avatar Container - Left to Right animation */}
                <div className="relative animate-slide-left-right" style={{ perspective: '1000px' }}>
                    {/* 3D Avatar Background with image */}
                    <div className="w-[600px] h-[700px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-[100px] shadow-2xl relative overflow-hidden backdrop-blur-sm transform-gpu">
                        {/* Image container with styling to match the UI */}
                        <div className="absolute inset-0 rounded-[100px] overflow-hidden">
                            <img 
                                src={Bannerimage}
                                alt="3D Avatar" 
                                className="w-full h-full object-cover opacity-90"
                            />
                            {/* Blue gradient overlay for the futuristic effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-blue-600/50 rounded-[100px]"></div>
                            {/* Glossy overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-[100px]"></div>
                        </div>
                    </div>
                    
                    {/* Leslie Alexander Card - 3D Floating animation */}
                    <div className="absolute -left-20 top-80 transform-gpu animate-float-gentle-3d hover:animate-none group cursor-pointer">
                        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-5 shadow-2xl border border-white/30 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl"
                             style={{ 
                                 transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                                 boxShadow: '20px 20px 60px rgba(0,0,0,0.3), inset 5px 5px 10px rgba(255,255,255,0.2)'
                             }}>
                            <div className="flex items-center space-x-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-100 shadow-lg">
                                    <img 
                                        src={bannerimageprofile}
                                        alt="Leslie Alexander"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-bold text-xl">Leslie Alexander</h3>
                                    <p className="text-gray-500 text-sm font-medium">@leslie754</p>
                                </div>
                            </div>
                            {/* 3D highlight effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                        </div>
                    </div>
                    
                    {/* Current Bid Card - 3D Floating animation */}
                    <div className="absolute -right-16 top-16 transform-gpu animate-float-gentle-delay-3d hover:animate-none group cursor-pointer">
                        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-5 shadow-2xl border border-white/30 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl"
                             style={{ 
                                 transform: 'perspective(1000px) rotateY(15deg) rotateX(-5deg)',
                                 boxShadow: '-20px 20px 60px rgba(0,0,0,0.3), inset -5px 5px 10px rgba(255,255,255,0.2)'
                             }}>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg ring-2 ring-purple-200">
                                   <img src={bannerimage1} alt="" />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Current Bid</p>
                                    <p className="text-gray-900 font-bold text-xl">2.26 ETH</p>
                                </div>
                            </div>
                            {/* 3D highlight effect */}
                            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
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
            
            .animate-bounce-slow {
                animation: bounce-slow 4s ease-in-out infinite;
            }
            
            .animate-bounce-slow-delay {
                animation: bounce-slow 4s ease-in-out infinite 1s;
            }
            
            .animate-float-up-down {
                animation: float-up-down 5s ease-in-out infinite;
            }
            
            .animate-float-up-down-delay {
                animation: float-up-down 5s ease-in-out infinite 2s;
            }
            
            .animate-slide-left-right {
                animation: slide-left-right 6s ease-in-out infinite;
            }
            
            .animate-float-gentle-3d {
                animation: float-gentle-3d 4s ease-in-out infinite;
            }
            
            .animate-float-gentle-delay-3d {
                animation: float-gentle-delay-3d 4s ease-in-out infinite 1.8s;
            }
            
            .shadow-3xl {
                box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
            }
        `}</style>
    </div>
  )
}

export default Banner