import React from 'react'
import logo from '../assets/techpioneers-logo.png'
const Navbar = () => {
  return (
    <>
    <nav className="z-50 sticky top-0 w-full px-4 sm:px-6 py-3 sm:py-4">
        <div className="rounded-2xl px-4 sm:px-8 py-3 sm:py-4 mx-auto max-w-[1450px] border border-white/40 hover:border-white/60 transition-all duration-300 font-poppins"  style={{background: "rgba(255, 255, 255, 0.3)", backdropFilter: "blur(6.3px)", boxShadow: "0px 8px 32px 0px rgba(0, 0, 0, 0.1)"}}>
        <div className="flex items-center justify-between">
            <a className="flex items-center gap-2 sm:gap-4 group" href="/" data-discover="true">
            <div className="h-14 w-14 sm:h-20 sm:w-20 flex-shrink-0">
                <img alt="logo" className="h-full w-full object-contain" src={logo}/></div>
                <div className="leading-tight">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0a192f] tracking-wide group-hover:scale-105 transition-transform duration-300">Tech Pioneers</h1>
                    <p className="text-xs sm:text-sm md:text-base text-black/65 font-medium opacity-80">Pioneer Your Tech Career</p></div>
                </a>
                <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
                    <a className="text-[#0a192f]  text-[16px] lg:text-[18px] hover:text-blue-600 hover:scale-105 transition font-bold" href="/" data-discover="true">Home</a>
                    <a className="text-[#0a192f] text-[16px] lg:text-[18px] hover:text-blue-600 hover:scale-105 transition font-bold" href="/about" data-discover="true">About</a>
                    <a className="text-[#0a192f] text-[16px] lg:text-[18px] hover:text-blue-600 hover:scale-105 transition font-bold" href="/courses" data-discover="true">Courses</a>
                    <a className="text-[#0a192f] text-[16px] lg:text-[18px] hover:text-blue-600 hover:scale-105 transition font-bold" href="/academy-process" data-discover="true">Academy Process</a>
                    <a className="text-[#0a192f] text-[16px] lg:text-[18px] hover:text-blue-600 hover:scale-105 transition font-bold" href="/facilities-detail" data-discover="true">Facilities</a>
                    <a className="text-[#0a192f] text-[16px] lg:text-[18px] hover:text-blue-600 hover:scale-105 transition font-bold" href="/team" data-discover="true">Team</a></div>
                    <div className="hidden md:block">
                        <button className="text-white bg-blue-600/80 backdrop-blur-md hover:bg-white hover:text-blue-600 hover:scale-105 transition font-semibold px-6 py-2 rounded-xl shadow-md text-[15px] md:text-[16px]">Contact Us</button></div>
                    <div className="md:hidden">
                        <button className="text-[#0a192f] hover:bg-white/80 rounded-xl w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu w-6 h-6" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
                        </button>
                        </div>
                        </div>
                        </div>
                        </nav>
    </>
  )
}

export default Navbar


