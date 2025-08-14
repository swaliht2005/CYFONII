import React, { useRef, useEffect, useState } from "react";
import icon1 from "../assets/image/icon1.png";
import icon2 from "../assets/image/icon2.png";
import icon3 from "../assets/image/icon3.png";
import icon4 from "../assets/image/icon4.png";
import portfolioimg from "../assets/image/portfolio.5c35beca2c37f3ee7eb9.png";

const Portfolio = () => {
  const steps = [
    { title: "Connect your wallet", desc: "Suspendisse tristique magna a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", icon: icon1, stepNum: "Step 1" },
    { title: "Buy your NFT", desc: "Suspendisse tristique magna a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", icon: icon2, stepNum: "Step 2" },
    { title: "Create collection", desc: "Suspendisse tristique magna a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", icon: icon3, stepNum: "Step 3" },
    { title: "Sell your NFT", desc: "Suspendisse tristique magna a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", icon: icon4, stepNum: "Step 4" },
  ];

  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // trigger when 30% is visible
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => {
      if (imgRef.current) observer.unobserve(imgRef.current);
    };
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#151440] to-[#211C52] min-h-screen w-full relative overflow-hidden text-white py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Decorative shapes - Enhanced responsive */}
      <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-6 md:left-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-white/10 rounded-2xl sm:rounded-3xl blur-sm animate-bounce-slow"></div>
      <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 right-8 sm:right-12 md:right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-white/5 rounded-full blur-md animate-bounce-slow-delay"></div>
      <div className="absolute top-1/4 sm:top-1/3 left-1/6 sm:left-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-white/8 rounded-xl sm:rounded-2xl blur-lg animate-float-up-down"></div>
      <div className="absolute bottom-1/3 sm:bottom-1/4 left-1/4 sm:left-1/3 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-24 lg:h-24 xl:w-28 xl:h-28 bg-white/6 rounded-2xl sm:rounded-3xl blur-sm animate-float-up-down-delay"></div>
      <div className="absolute top-1/2 right-1/4 sm:right-1/3 w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-28 lg:h-28 xl:w-36 xl:h-36 bg-white/4 rounded-full blur-xl animate-bounce-slow"></div>

      {/* Header - Enhanced responsive typography */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-6">
        <button className="px-4 sm:px-6 py-2 rounded-full bg-[#1a1b3c] border border-[#5e5e8e] hover:border-purple-400 transition-colors duration-300">
          <span className="bg-gradient-to-r from-[#6b4eff] to-[#c48fff] bg-clip-text text-transparent font-bold text-sm sm:text-base md:text-lg">
            Join NFT Portfolio
          </span>
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[65px] font-bold mt-4 leading-tight px-4">
          Become a Cyfonii <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>Player Now
        </h2>
      </div>

      {/* Content - Enhanced responsive layout */}
      <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8 gap-8 sm:gap-10 md:gap-12">
        {/* Steps - Enhanced responsive cards */}
        <div className="w-full lg:flex-1 space-y-4 sm:space-y-6">
          {steps.map((item, index) => (
            <div key={index} className="bg-[#141238] p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl flex flex-col xs:flex-row items-start gap-3 sm:gap-4 hover:bg-[#1a1b4a] transition-colors duration-300">
              <div className="flex xs:flex-col items-center xs:items-start gap-3 xs:gap-0 w-full xs:w-auto">
                <span className="text-xs bg-[#1b1951] px-2 py-1 rounded-full text-purple-400 whitespace-nowrap">
                  {item.stepNum}
                </span>
                <div className="mt-0 xs:mt-3 bg-purple-500/20 p-2 sm:p-3 rounded-lg text-purple-400 inline-block">
                  <img src={item.icon} alt={item.title} className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
              </div>
              <div className="flex-1 min-w-0 w-full xs:w-auto">
                <h4 className="font-semibold text-base sm:text-lg md:text-xl">{item.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-1 sm:mt-2 leading-relaxed break-words">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image - Enhanced responsive while keeping original */}
        <div className="w-full lg:flex-1 flex justify-center mt-8 lg:mt-0 px-4 sm:px-0">
          <img
            ref={imgRef}
            src={portfolioimg}
            alt="AI Illustration"
            className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto move-x transition-opacity duration-[1500ms] ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Animation keyframes - Enhanced with more responsive animations */}
      <style jsx>{`
        @keyframes move-x {
          0% { transform: translateX(0px); }
          25% { transform: translateX(20px); }
          50% { transform: translateX(-15px); }
          75% { transform: translateX(10px); }
          100% { transform: translateX(0px); }
        }
        .move-x {
          animation: move-x 20s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        @keyframes float-up-down-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        .animate-bounce-slow-delay {
          animation: bounce-slow-delay 8s ease-in-out infinite 2s;
        }
        .animate-float-up-down {
          animation: float-up-down 7s ease-in-out infinite;
        }
        .animate-float-up-down-delay {
          animation: float-up-down-delay 9s ease-in-out infinite 1s;
        }
        
        /* Custom responsive breakpoint for extra small screens */
        @media (min-width: 475px) {
          .xs\\:flex-row { flex-direction: row; }
          .xs\\:flex-col { flex-direction: column; }
          .xs\\:items-start { align-items: flex-start; }
          .xs\\:mt-3 { margin-top: 0.75rem; }
          .xs\\:gap-0 { gap: 0px; }
          .xs\\:w-auto { width: auto; }
        }
        
        /* Mobile-first responsive adjustments */
        @media (max-width: 640px) {
          .move-x {
            animation: move-x 15s ease-in-out infinite;
          }
        }
        
        @media (max-width: 475px) {
          .move-x {
            animation: none; /* Disable animation on very small screens for performance */
          }
        }
      `}</style>

      {/* Mobile navigation hint */}
      <div className="block sm:hidden fixed bottom-4 left-4 right-4 z-10 opacity-75">
        <div className="bg-[#141238]/90 backdrop-blur-sm p-3 rounded-xl border border-purple-500/20">
          <p className="text-center text-xs text-gray-300">
            ← Swipe to explore features →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;