import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay  } from "swiper/modules";
import 'swiper/swiper-bundle.css'
// import {webdevelopment} from '../../src/assets/web-development.png'

const Courses = () => {
  return (
    <>
    
      <div id="services">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-8 py-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-5 mb-8 text-gray-800 text-center">
            Our Courses
          </h2>
          <Swiper
          modules={[Navigation, Pagination, Autoplay]}
         spaceBetween={30}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true, dynamicBullets: true, }}

         autoplay={{ delay: 2500, disableOnInteraction: false }}
         className="mySwiper">
          <div className="swiper swiper-initialized swiper-horizontal w-full max-w-[1400px]">
            <div className="swiper-wrapper">
              <SwiperSlide>
              <div
                className="swiper-slide swiper-slide-active"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/web-development" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                        <img
                          alt="Web Development"
                          className="w-12 h-12 object-contain"
                          src=''
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Web Development
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Hands-on training to create responsive websites and
                            interactive apps.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Front-end: HTML, CSS, JavaScript, React | Back-end:
                            Node.js, MongoDB
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Live projects, GitHub portfolio, and deployment
                            skills
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online | Live +
                            recorded sessions
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Web Development
                    </h3>
                    <a href="/courses/web-development" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide swiper-slide-next"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/app-development" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-gray-400 flex items-center justify-center">
                        <img
                          alt="App Development (Dart &amp; Flutter)"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        App Development (Dart &amp; Flutter)
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Master cross-platform development using Flutter for
                            iOS &amp; Android.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Firebase integration, animations, APIs, and local
                            database
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Real-world projects, PlayStore publishing, and Git
                            workflow
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | Format: On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      App Development (Dart &amp; Flutter)
                    </h3>
                    <a href="/courses/app-development" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/ai" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-orange-300 flex items-center justify-center">
                        <img
                          alt="Artificial Intelligence (AI)"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Artificial Intelligence (AI)
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Comprehensive AI training: ML, NLP, and robotics.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Python, TensorFlow, computer vision, and chatbots
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            AI-based project development and deployment
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | Format: On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Artificial Intelligence (AI)
                    </h3>
                    <a href="/courses/ai" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/graphic-design" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-purple-300 flex items-center justify-center">
                        <img
                          alt="Graphics and UI/UX Design"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Graphics and UI/UX Design
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Design user-friendly digital interfaces and
                            graphics.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Master Adobe Photoshop, Illustrator, Figma &amp;
                            Canva
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Branding, UI/UX design, portfolio building &amp;
                            freelancing
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Graphics and UI/UX Design
                    </h3>
                    <a href="/courses/graphic-design" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/amazon" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-yellow-100 flex items-center justify-center">
                        <img
                          alt="Amazon FBA"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Amazon FBA
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Learn to sell products on Amazon using FBA.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Product hunting, sourcing, listing &amp; PPC
                            campaigns
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Training for VA (Virtual Assistant) &amp; private
                            label sellers
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Amazon FBA
                    </h3>
                    <a href="/courses/amazon" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/shopify" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-green-200 flex items-center justify-center">
                        <img
                          alt="Shopify"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Shopify
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Create and manage online stores using Shopify.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Store setup, theme customization, and dropshipping
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Facebook/TikTok Ads, upselling, and store
                            optimization
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Shopify
                    </h3>
                    <a href="/courses/shopify" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/cyber-security" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                        <img
                          alt="Cyber Security"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Cyber Security
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Understand cybersecurity principles and practices.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Ethical hacking, vulnerability scanning, and
                            firewalls
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Threat detection, risk management &amp; hands-on
                            labs
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Cyber Security
                    </h3>
                    <a href="/courses/cyber-security" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/trading" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                        <img
                          alt="Trading (Forex, Stocks, Crypto)"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Trading (Forex, Stocks, Crypto)
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Learn trading strategies for Forex, stocks, and
                            cryptocurrencies.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Technical analysis, chart patterns, and indicators
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Risk management, live trading sessions &amp; tools
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Trading (Forex, Stocks, Crypto)
                    </h3>
                    <a href="/courses/trading" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/ccna" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                        <img
                          alt="CCNA (Cisco Certified Network Associate)"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        CCNA (Cisco Certified Network Associate)
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Gain foundational networking skills with CCNA
                            certification.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            IP addressing, routing, switching, security, and
                            protocols
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Lab simulations with Packet Tracer &amp; career
                            guidance
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      CCNA (Cisco Certified Network Associate)
                    </h3>
                    <a href="/courses/ccna" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/digital-marketing" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-pink-300 flex items-center justify-center">
                        <img
                          alt="Digital Marketing"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Digital Marketing
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Master online marketing: SEO, social media, PPC.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Facebook, Google &amp; TikTok Ads, email &amp;
                            content marketing
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Analytics, campaign building &amp; freelancing
                            skills
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Digital Marketing
                    </h3>
                    <a href="/courses/digital-marketing" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/tiktok-shop" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-gray-200 flex items-center justify-center">
                        <img
                          alt="TikTok Shop"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        TikTok Shop
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>Learn to set up and manage a TikTok shop.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Content creation, live selling &amp; influencer
                            strategies
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Monetization through affiliate &amp; product
                            campaigns
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      TikTok Shop
                    </h3>
                    <a href="/courses/tiktok-shop" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/freelancing" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                        <img
                          alt="Freelancing Course"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Freelancing Course
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Learn to start and scale your freelancing career.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Upwork, Fiverr &amp; Freelancer profile building
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Client communication, bidding, and project delivery
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Freelancing Course
                    </h3>
                    <a href="/courses/freelancing" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/software-testing" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                        <img
                          alt="Software Testing"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Software Testing
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Learn software testing methodologies and tools.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Manual &amp; automated testing, test cases, and bug
                            tracking
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Selenium, JIRA, and real project simulations
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Software Testing
                    </h3>
                    <a href="/courses/software-testing" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div
                className="swiper-slide"
                style="width: 301.667px; margin-right: 30px;">
                <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px] shadow-lg perspective-1000 group cursor-pointer mx-auto">
                  <a href="/courses/project-management" data-discover="true">
                    <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                      <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-200 flex items-center justify-center">
                        <img
                          alt="Software Project Management"
                          className="w-12 h-12 object-contain"
                          src=""
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                        Software Project Management
                      </h3>
                      <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Lead software projects from planning to delivery.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Agile, Scrum, team management &amp; budgeting
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Tools: Trello, Jira, MS Project + Real scenarios
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-blue-500"></span>
                          <span>
                            Duration: 3 months | Format: On-campus &amp; online
                          </span>
                        </li>
                      </ul>
                    </div>
                  </a>
                  <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                      Software Project Management
                    </h3>
                    <a href="/courses/project-management" data-discover="true">
                      <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                        View Details
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            </div>
            <div className="swiper-button-prev swiper-button-disabled"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Courses;

// const Courses = () => {
//   return (
//     <div className="p-8 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-6">Our Courses</h2>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         slidesPerView={3}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="bg-white p-6 rounded-xl shadow-md text-center">
//             <h3 className="font-semibold text-xl mb-2">Web Development</h3>
//             <p>Learn HTML, CSS, JavaScript, and React.</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="bg-white p-6 rounded-xl shadow-md text-center">
//             <h3 className="font-semibold text-xl mb-2">Graphic Design</h3>
//             <p>Master Photoshop, Illustrator, and more.</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="bg-white p-6 rounded-xl shadow-md text-center">
//             <h3 className="font-semibold text-xl mb-2">Digital Marketing</h3>
//             <p>Become an expert in SEO and social media ads.</p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Courses;
