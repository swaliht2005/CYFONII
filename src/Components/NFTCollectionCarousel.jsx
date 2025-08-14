import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NFTCollectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Mock NFT collection data
  const collections = [
    {
      id: 1,
      title: "Cyber Doge",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop&crop=face",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Nintendo Switch",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      id: 3,
      title: "The Strange Art",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      id: 4,
      title: "3D Digital Artwork",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      id: 5,
      title: "King of Crypto",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

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
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + collections.length) % collections.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % collections.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calculate visible slides for responsive display
  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = collections.length;
    
    // Show 3 cards on desktop, 2 on tablet, 1 on mobile
    const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
    
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentSlide + i) % totalSlides;
      slides.push({
        ...collections[slideIndex],
        index: slideIndex,
        position: i
      });
    }
    
    return slides;
  };

  const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  useEffect(() => {
    setVisibleSlides(getVisibleSlides());
  }, [currentSlide]);

  return (
    
    <section className="bg-gradient-to-br from-[#0a0a2e] via-[#16213e] to-[#1a1a3a] min-h-screen flex flex-col justify-center items-center py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wide">
          OUR{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            COLLECTION
          </span>
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 px-4">
          {visibleSlides.map((slide) => (
            <div
              key={`${slide.id}-${slide.position}`}
              className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
                slide.position === 0 ? 'transform scale-110 z-10' : 'transform scale-95 opacity-80'
              }`}
              onClick={() => goToSlide(slide.index)}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                {/* Image Container */}
                <div className="aspect-square relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-20`}></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-30 blur-xl`}></div>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
                    {slide.title}
                  </h3>
                </div>

                {/* Active indicator */}
                {slide.position === 0 && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={goToPrevious}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={goToNext}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/25"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-3">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/50'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-400 flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`}></div>
        <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
      </div>
    </section>
  );
};

export default NFTCollectionCarousel;