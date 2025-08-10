import React from 'react'
import cyfoniilogo from '../assets/image/cyfoniilogo.png'

function Navbar({ id = '' }) {
  return (
    <nav className="h-[150px] w-full bg-[#070a29] flex items-center justify-between px-4 sm:px-8 text-white shadow-lg">
        <div className="">
            <a href="/" className="flex items-center">
                <img src={cyfoniilogo} alt="Cyfonii company logo" className="h-10" />
             </a>
        </div>
        <div className="">
            <ul className=" flex items-center space-x-8 text-3xl font-medium ">
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
        <div className="bg-white/5 border border-white/10 h-[80px] w-[170px] flex justify-center items-center rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-700 to-purple-300 text-white font-bold text-lg shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:opacity-90 transition">
                    Join Now
                </button>
        </div>

    </nav>
  )
}

export default Navbar
