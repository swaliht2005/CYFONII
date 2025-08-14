import React, { useState } from 'react'
import cyfoniilogo from '../assets/image/cyfoniilogo.png'

function Navbar({ id = '' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="h-auto min-h-[80px] md:h-[120px] lg:h-[150px] w-full bg-[#070a29] flex items-center justify-between px-4 sm:px-6 md:px-8 text-white shadow-lg relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" className="flex items-center">
          <img src={cyfoniilogo} alt="Cyfonii company logo" className="h-6 sm:h-8 md:h-10" />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        <ul className="flex items-center space-x-6 xl:space-x-8 text-lg xl:text-xl 2xl:text-3xl font-medium">
          <li>
            <a href="/about" className="hover:text-[#5c27fe] transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="hover:text-[#5c27fe] transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="/services" className="hover:text-[#5c27fe] transition-colors duration-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#5c27fe] transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden flex flex-col space-y-1 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Join Now Button - Desktop */}
      <div className="hidden md:flex bg-white/5 border border-white/10 h-[60px] md:h-[70px] lg:h-[80px] w-[140px] md:w-[160px] lg:w-[170px] justify-center items-center rounded-xl lg:rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <button className="px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-lg lg:rounded-xl bg-gradient-to-r from-purple-700 to-purple-300 text-white font-bold text-sm md:text-base lg:text-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:opacity-90 transition">
          Join Now
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#070a29] border-t border-white/10 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <a href="/about" className="block py-2 text-lg hover:text-[#5c27fe] transition-colors duration-300">Home</a>
          </li>
          <li>
            <a href="/about" className="block py-2 text-lg hover:text-[#5c27fe] transition-colors duration-300">About</a>
          </li>
          <li>
            <a href="/services" className="block py-2 text-lg hover:text-[#5c27fe] transition-colors duration-300">Services</a>
          </li>
          <li>
            <a href="/contact" className="block py-2 text-lg hover:text-[#5c27fe] transition-colors duration-300">Contact</a>
          </li>
          <li className="pt-4">
            <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 to-purple-300 text-white font-bold text-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:opacity-90 transition">
              Join Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar