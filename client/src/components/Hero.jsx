import React from 'react'
import bgvideo from '../assets/bgvideo.mp4'
 const Hero = () => {
   return (
     <div>
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <video className="absolute inset-0 w-full h-full object-cover z-0" autoplay loop playsinline>
            <source src={bgvideo} type="video/mp4"/>Your browser does not support the video tag.</video> */}
            <video 
  className="absolute inset-0 w-full h-full object-cover z-0" 
  autoPlay 
  loop 
  muted 
  playsInline
>
  <source src={bgvideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">Tech Pioneers</h1>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-[#c9e4ff] mb-10 tracking-wide">Join Us To Pioneer Your Tech Career</h2>
                <button className="px-10 py-4 rounded-xl bg-blue-600/70 backdrop-blur-md border border-white/20 text-white font-semibold text-lg shadow-md hover:shadow-2xl hover:scale-105 hover:bg-white hover:text-[#1d4ed8] transition-all duration-300">Get Started</button>
                </div>
            </section>


      {/* <video className="absolute inset-0 w-full h-full object-cover z-0" autoplay="" loop="" playsinline=""><source src={bgVideo} type="video/mp4"/>Your browser does not support the video tag.
      </video> */}

      {/* <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto"><h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">Tech Pioneers</h1><h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-[#c9e4ff] mb-10 tracking-wide">Join Us To Pioneer Your Tech Career</h2><button className="px-10 py-4 rounded-xl bg-blue-600/70 backdrop-blur-md border border-white/20 text-white font-semibold text-lg shadow-md hover:shadow-2xl hover:scale-105 hover:bg-white hover:text-[#1d4ed8] transition-all duration-300">Get Started</button></div>  */}
     </div>
   )
 }
 export default Hero


