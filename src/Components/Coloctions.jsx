import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Coloction1 from '../assets/image/project-01.181d05636ae19882435d (1).png'
import Coloction2 from '../assets/image/project-02.e9c6cde09013c72c5dbd (1).png'
import Coloction3 from '../assets/image/project-03.1ce7109df0be2a58a2f3.png'
import Coloction4 from '../assets/image/project-04.6b898cba226dc2348f9f.png'
import Coloction5 from '../assets/image/project-05.c9468f210d1d62723c47.png'

function Collections() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Mock NFT collection data
        const collections = [
        {
          id: 1,
          title: "Cyber Doge",
          image: Coloction1,
          gradient: "from-blue-600 to-purple-600"
        },
        {
          id: 2,
          title: "Nintendo Switch",
          image: Coloction2,
          gradient: "from-gray-700 to-gray-900"
        },
        {
          id: 3,
          title: "The Strange Art",
          image: Coloction3,
          gradient: "from-gray-400 to-gray-600"
        },
        {
          id: 4,
          title: "3D Digital Artwork",
          image:Coloction4,
          gradient: "from-pink-500 to-purple-500"
        },
        {
          id: 5,
          title: "King of Crypto",
          image: Coloction5,
          gradient: "from-green-500 to-emerald-600"
        },
      
      ];
    
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate slides to show based on screen size
  const getSlidesToShow = useCallback(() => {
    if (windowWidth >= 1024) return 3; // lg and up
    if (windowWidth >= 640) return 2;  // sm and up
    return 1; // mobile
  }, [windowWidth]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % collections.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, collections.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Calculate visible slides
  const getVisibleSlides = useCallback(() => {
    const slides = [];
    const slidesToShow = getSlidesToShow();
    
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentSlide + i) % collections.length;
      slides.push({
        ...collections[slideIndex],
        index: slideIndex,
        position: i
      });
    }
    
    return slides;
  }, [currentSlide, getSlidesToShow]);

  const visibleSlides = getVisibleSlides();

  return (
    <div className='bg-gradient-to-br from-[#151440] via-[#1a1854] to-[#211C52] min-h-screen w-full relative overflow-hidden text-white'>
      {/* Background decorative elements - More responsive */}
      <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 left-2 sm:left-4 md:left-6 lg:left-10 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-24 xl:h-24 bg-white/10 rounded-lg sm:rounded-xl md:rounded-2xl blur-sm animate-bounce"></div>
      
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 right-4 sm:right-6 md:right-8 lg:right-12 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bg-white/5 rounded-full blur-md animate-pulse"></div>
      
      <div className="absolute top-1/4 left-1/6 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-white/8 rounded-lg blur-lg animate-bounce" style={{animationDelay: '1s'}}></div>
      
      <div className="absolute bottom-1/3 left-1/4 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-14 lg:h-14 xl:w-20 xl:h-20 bg-white/6 rounded-xl blur-sm animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="absolute top-1/2 right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-18 lg:h-18 xl:w-24 xl:h-24 bg-white/4 rounded-full blur-xl animate-bounce" style={{animationDelay: '0.5s'}}></div>

      <section className="min-h-screen flex flex-col justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 w-full max-w-4xl">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <button className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full bg-[#1a1b3c]/80 backdrop-blur-sm border border-[#5e5e8e]/50 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-[#6b4eff] to-[#c48fff] bg-clip-text text-transparent font-bold text-xs sm:text-sm md:text-base lg:text-lg">
                Our Speciality
              </span>
            </button>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-wide leading-tight">
            OUR{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              COLLECTION
            </span>
          </h1>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Cards Grid - Enhanced responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-2 sm:px-4">
            {visibleSlides.map((slide, index) => (
              <div 
                key={`${slide.id}-${slide.position}`} 
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
                onClick={() => goToSlide(slide.index)}
              >
                {/* Card Container */}
                <div className="relative bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 p-3 sm:p-4">
                  {/* Image Container */}
                  <div className="aspect-square relative overflow-hidden rounded-lg sm:rounded-xl">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="m-2 sm:m-3 md:m-4 p-2 sm:p-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 group-hover:bg-white/30">
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white text-center drop-shadow-lg group-hover:text-purple-300 transition-colors duration-300">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Dots Navigation - More responsive */}
            <div className="flex justify-center flex-wrap gap-2 sm:gap-3 max-w-xs">
              {collections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 scale-125 shadow-lg shadow-purple-400/50'
                      : 'w-2 h-2 sm:w-3 sm:h-3 bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress indicator for mobile */}
          <div className="flex sm:hidden justify-center mt-4">
            <div className="bg-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
              <span className="text-xs text-white/80">
                {currentSlide + 1} of {collections.length}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collections;