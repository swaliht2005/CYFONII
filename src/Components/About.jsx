import React from 'react'
import Aboutusimg from '../assets/image/about-01.b2e3a8ef849333fdca05.png'
import Aboutimg from '../assets/image/about-05.50cc8cfe7d79282e33f1.png'
import Aboutimgsub from '../assets/image/about-02.9e29e551e4812c4673e8.png'
import Aboutimgsub1 from '../assets/image/about-03.4dc3e6d50a17fbe3cf21.png' 

function About() {
  return (
    <div className='bg-gradient-to-r from-[#151440] to-[#211C52] min-h-screen w-full relative overflow-hidden'>
      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-8 lg:py-0">
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 mb-8 lg:mb-0 order-2 lg:order-1">
          {/* Small floating images */}
          <div className="absolute top-4 sm:top-8 md:top-12 left-0 sm:left-2 z-30">
            <img src={Aboutimgsub} className='h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-2xl md:rounded-4xl move-x shadow-lg' alt="" />     
          </div>
          
          {/* Main background container */}
          <div className="bg-white/5 border border-white/10 h-[300px] w-[200px] sm:h-[400px] sm:w-[280px] md:h-[500px] md:w-[350px] lg:h-[600px] lg:w-[450px] xl:h-[700px] xl:w-[500px] flex justify-center items-center rounded-[50px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] rotate-3 lg:rotate-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] absolute animate-tilt-3d z-20">
          </div>
          
          {/* Main center image */}
          <div className="h-[280px] w-[180px] sm:h-[380px] sm:w-[260px] md:h-[480px] md:w-[330px] lg:h-[580px] lg:w-[430px] xl:h-[650px] xl:w-[500px] absolute animate-float-up-down z-20">
            <img src={Aboutusimg} className='w-full h-full object-cover opacity-90 rounded-[50px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px]' alt="" />
          </div>
          
          {/* Bottom left image */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-0 sm:left-2">
            <img src={Aboutimgsub1} className='h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-2xl md:rounded-4xl animate-float-up-down -z-20 shadow-lg' alt="" />     
          </div>
          
          {/* Bottom right image */}
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 right-0 sm:right-2 z-20">
            <img src={Aboutimg} className='h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-2xl md:rounded-4xl move-x shadow-lg' alt="" />     
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 relative z-10 order-1 lg:order-2">
          <div className="bg-gradient-to-br from-[#1a1444] via-[#2d1b69] to-[#0f0a2e] min-h-auto w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden rounded-2xl lg:rounded-none">
            {/* Background decorative elements */}
            <div className="absolute top-5 sm:top-10 left-10 sm:left-20 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-purple-500/10 rounded-full blur-2xl animate-bounce-slow"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-30 h-30 sm:w-48 sm:h-48 md:w-60 md:h-60 bg-blue-500/10 rounded-full blur-3xl animate-float-up-down-delay"></div>
            <div className="absolute top-1/2 left-5 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-pink-500/10 rounded-full blur-xl animate-bounce-slow-delay"></div>
            
            <div className="max-w-full mx-auto relative z-10 text-center lg:text-left">
              {/* About Us Tag */}
              <div className="inline-block mb-6 sm:mb-8 md:mb-12">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3">
                  <span className="text-purple-400 font-medium text-sm sm:text-base md:text-lg">About us</span>
                </div>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight">
                High Quality
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  NFT Collections
                </span>
              </h1>
              
              {/* Description Paragraphs */}
              <div className="mb-6 sm:mb-8">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-6">
                  Cyfonii is the premier marketplace for nifties, which are digital items you can 
                  truly own for yourself
                </p>
                
                <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt mollit anim id est laborum velit esse cillum dolore 
                  eu fugiat nulla pariatur epteur sint occaecat
                </p>
              </div>
              
              {/* More About Us Button */}
              <button className="bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25 border border-purple-500/30">
                More About Us
              </button>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
          </div>
        </div>
      </div>
<style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes tilt-3d {
          0%, 100% { 
            transform: perspective(1000px) rotateX(5deg) rotateY(-8deg) rotateZ(6deg);
          }
          50% { 
            transform: perspective(1000px) rotateX(8deg) rotateY(-5deg) rotateZ(8deg);
          }
        }
        
        @keyframes sub-photo-movement {
          0%, 100% { 
            transform: perspective(800px) rotateX(-10deg) rotateY(15deg) rotateZ(-5deg) translateY(0px) translateX(0px);
          }
          25% { 
            transform: perspective(800px) rotateX(-5deg) rotateY(20deg) rotateZ(-8deg) translateY(-8px) translateX(5px);
          }
          50% { 
            transform: perspective(800px) rotateX(-15deg) rotateY(12deg) rotateZ(-2deg) translateY(-12px) translateX(-3px);
          }
          75% { 
            transform: perspective(800px) rotateX(-8deg) rotateY(18deg) rotateZ(-6deg) translateY(-5px) translateX(8px);
          }
        }
        
        @keyframes sub-photo-hover {
          0%, 100% { 
            transform: perspective(800px) rotateX(-5deg) rotateY(20deg) rotateZ(-3deg) translateY(-10px) translateX(10px) translateZ(20px);
          }
          50% { 
            transform: perspective(800px) rotateX(-8deg) rotateY(25deg) rotateZ(-1deg) translateY(-15px) translateX(15px) translateZ(30px);
          }
        }
        
        @keyframes move-x {
          0% { 
            transform: translateX(0px); 
          }
          25% { 
            transform: translateX(20px); 
          }
          50% { 
            transform: translateX(-15px); 
          }
          75% { 
            transform: translateX(10px); 
          }
          100% { 
            transform: translateX(0px); 
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
        
        .animate-tilt-3d {
          animation: tilt-3d 6s ease-in-out infinite;
        }
        
        .animate-sub-photo-movement {
          animation: sub-photo-movement 5s ease-in-out infinite;
        }
        
        .animate-sub-photo-hover {
          animation: sub-photo-hover 2s ease-in-out infinite;
        }
        
        .move-x {
          animation: move-x 8s ease-in-out infinite;
        }
      `}</style>
        
    </div>
  )
}

export default About
