import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import webdev from "../assets/webdev.png";
import appdev from "../assets/appdev.png";
import aidev from "../assets/aidev.jpg";
import amazon from "../assets/amazon.png";
import ccna from "../assets/ccna.png";
import cybersec from "../assets/cybersec.png";
import digmar from "../assets/digmar.png";
import freelancing from "../assets/freelancing.png";
import projectmanagement from "../assets/projectmanagement.png";
import shopify from "../assets/shopify.png";
import softwaretesting from "../assets/softwaretesting.png";
import tiktok from "../assets/tiktok.png";
import trading from "../assets/trading.png";
import uiux from "../assets/uiux.png";
import '../App.css'

const Test = () => {
  return (
    <>
      <div id="services">
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-8 py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-5 mb-8 text-gray-800 text-center">
            Our Courses
          </h1>
          <div className="swiper swiper-initialized swiper-horizontal w-full max-w-[1400px] ">
            {/* navigation button start */}
         <div className="flex items-center justify-between relative text-white top-6">
          <div style={{ color: "white", fontSize: "24px", }} className="swiper-button-prev swiper-button-disabled mr-5 pr-6 bg-blue-500 p-4 rounded-2xl hover:bg-blue-400 absolute">&#10094;</div>
          <div style={{ color: "white",  fontSize: "24px",}} className="swiper-button-next bg-blue-500 p-4 rounded-2xl hover:bg-blue-400 absolute">&#10095;</div>
         </div>
          {/* navigation button end */}
            <div className="swiper-wrapper ">
              <Swiper
                slidesPerView={3}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Navigation]}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                className="mySwiper">
                 
                <SwiperSlide>
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={webdev}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Web Development
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Hands-on training to create responsive websites
                                and interactive apps.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Front-end: HTML, CSS, JavaScript, React |
                                Back-end: Node.js, MongoDB
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Live projects, GitHub portfolio, and deployment
                                skills
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
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
                    className="swiper-slide swiper-slide-active "
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={appdev}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            App Development (Dart &amp; Flutter)
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Master cross-platform development using Flutter
                                for iOS &amp; Android.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Firebase integration, animations, APIs, and
                                local database
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Real-world projects, PlayStore publishing, and
                                Git workflow
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          App Development (Dart &amp; Flutter)
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={aidev}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Artificial Intelligence (AI)
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Comprehensive AI training: ML, NLP, and
                                robotics.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Python, TensorFlow, computer vision, and
                                chatbots
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                AI-based project development and deployment
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Artificial Intelligence (AI)
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
                  {" "}
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={uiux}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Graphics and UI/UX Design
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Design user-friendly digital interfaces and
                                graphics.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Master Adobe Photoshop, Illustrator, Figma &amp;
                                Canva
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Branding, UI/UX design, portfolio building &amp;
                                freelancing
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Graphics and UI/UX Design
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={amazon}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Amazon FBA
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Learn to sell products on Amazon using FBA
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Product hunting, sourcing, listing &amp; PPC
                                campaigns
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Training for VA (Virtual Assistant) &amp;
                                private label sellers
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Amazon FBA
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={shopify}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Shopify
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Create and manage online stores using Shopify.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Store setup, theme customization, and
                                dropshipping
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Facebook/TikTok Ads, upselling, and store
                                optimization
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Shopify
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={cybersec}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Cyber Security
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Understand cybersecurity principles and
                                practices.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Ethical hacking, vulnerability scanning, and
                                firewalls
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Threat detection, risk management &amp; hands-on
                                labs
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Cyber Security
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={trading}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Trading (Forex, Stocks, Crypto)
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Learn trading strategies for Forex, stocks, and
                                cryptocurrencies.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Technical analysis, chart patterns, and
                                indicators
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Risk management, live trading sessions &amp;
                                tools
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Trading (Forex, Stocks, Crypto)
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={ccna}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            CCNA (Cisco Certified Network Associate)
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Gain foundational networking skills with CCNA
                                certification.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                IP addressing, routing, switching, security, and
                                protocols
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Lab simulations with Packet Tracer &amp; career
                                guidance
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          CCNA (Cisco Certified Network Associate)
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={digmar}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Digital Marketing
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Master online marketing: SEO, social media, PPC.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Facebook, Google &amp; TikTok Ads, email &amp;
                                content marketing
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Analytics, campaign building &amp; freelancing
                                skills
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Digital Marketing
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={tiktok}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            TikTok Shop
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Learn to set up and manage a TikTok shop..
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Content creation, live selling &amp; influencer
                                strategies
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Monetization through affiliate &amp; product
                                campaigns
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          TikTok Shop
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={freelancing}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Freelancing Course
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Learn to start and scale your freelancing
                                career.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Upwork, Fiverr &amp; Freelancer profile building
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Client communication, bidding, and project
                                delivery
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Freelancing Course
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={softwaretesting}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Software Testing
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Learn software testing methodologies and tools.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Manual &amp; automated testing, test cases, and
                                bug tracking
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Selenium, JIRA, and real project simulations
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Software Testing
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
                    className="swiper-slide swiper-slide-active"
                    style={{ width: "301.667px", marginRight: "30px" }}
                  >
                    <div className="relative bg-white h-[460px] sm:h-[500px] w-[300px] sm:w-[340px] md:w-[360px] mb-20 mt-10 rounded-[32px]     shadow-lg   perspective-1000 group cursor-pointer mx-auto">
                      <a href="/courses/web-development" data-discover="true">
                        <div className="absolute w-full h-full p-5 flex flex-col justify-start items-center text-center space-y-5 backface-hidden group-hover:rotate-y-180 transition-transform duration-500">
                          <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-[28px] bg-blue-300 flex items-center justify-center">
                            <img
                              alt="Web Development"
                              className="w-12 h-12 object-contain"
                              src={projectmanagement}
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">
                            Software Project Management
                          </h3>
                          <ul className="list-none text-xs sm:text-sm text-gray-600 w-full px-2 space-y-2 text-left">
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                 Lead software projects from planning to delivery.
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Agile, Scrum, team management &amp; budgeting
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Tools: Trello, Jira, MS Project + Real scenarios
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="mr-2 text-blue-500">●</span>
                              <span>
                                Duration: 3 months | On-campus &amp; online |
                                Live + recorded sessions
                              </span>
                            </li>
                          </ul>
                        </div>
                      </a>
                      <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-[32px] flex flex-col items-center justify-center backface-hidden rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center px-4">
                          Software Project Management
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
              </Swiper>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
