import React from "react";

const Facilities = () => {
  return (
    <div>
      <div id="facilities">
        <div class="w-full h-full flex flex-col items-center justify-center bg-white px-4 sm:px-6 md:px-8 py-10">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold pt-5 mb-10 text-center">
            Our Facilities
          </h2>
          <div class="w-full flex justify-center">
            <div class="swiper swiper-initialized swiper-horizontal w-full max-w-[1400px] swiper-backface-hidden">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide swiper-slide-active flex justify-center"
                  style="width: 453.333px; margin-right: 20px;"
                >
                  <div
                    class="relative w-full max-w-[340px] sm:max-w-[372px] mt-14 mb-14 h-[300px] sm:h-[340px] rounded-[20px] overflow-hidden shadow-md flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      alt="Working Space"
                      class="w-full h-full object-cover"
                      src="/assets/workingspace-sK_WVi1j.jpg"
                    />
                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-black/60 text-white">
                      <h3 class="text-base sm:text-lg md:text-xl font-semibold">
                        Working Space
                      </h3>
                      <p class="text-sm sm:text-base mt-2 leading-relaxed">
                        Comfortable and professional environment for learning
                        and practice.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide swiper-slide-next flex justify-center"
                  style="width: 453.333px; margin-right: 20px;"
                >
                  <div
                    class="relative w-full max-w-[340px] sm:max-w-[372px] mt-14 mb-14 h-[300px] sm:h-[340px] rounded-[20px] overflow-hidden shadow-md flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      alt="Internship After Course"
                      class="w-full h-full object-cover"
                      src="/assets/internship-Bs6kQZBx.jpg"
                    />
                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-black/60 text-white">
                      <h3 class="text-base sm:text-lg md:text-xl font-semibold">
                        Internship After Course
                      </h3>
                      <p class="text-sm sm:text-base mt-2 leading-relaxed">
                        Guaranteed internship opportunities after completing
                        your course.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide flex justify-center"
                  style="width: 453.333px; margin-right: 20px;"
                >
                  <div
                    class="relative w-full max-w-[340px] sm:max-w-[372px] mt-14 mb-14 h-[300px] sm:h-[340px] rounded-[20px] overflow-hidden shadow-md flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      alt="Scholarship, Mock Tests &amp; Installments Plan"
                      class="w-full h-full object-cover"
                      src="/assets/scholarship-DYJUBMDX.jpg"
                    />
                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-black/60 text-white">
                      <h3 class="text-base sm:text-lg md:text-xl font-semibold">
                        Scholarship, Mock Tests &amp; Installments Plan
                      </h3>
                      <p class="text-sm sm:text-base mt-2 leading-relaxed">
                        Scholarship opportunities, mock tests, and flexible fee
                        installment options.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="swiper-slide flex justify-center"
                  style="width: 453.333px; margin-right: 20px;"
                >
                  <div
                    class="relative w-full max-w-[340px] sm:max-w-[372px] mt-14 mb-14 h-[300px] sm:h-[340px] rounded-[20px] overflow-hidden shadow-md flex justify-center items-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    <img
                      alt="24/7 Light &amp; Wifi"
                      class="w-full h-full object-cover"
                      src="/assets/wifi-D7IuAQ60.jpg"
                    />
                    <div class="absolute bottom-0 left-0 right-0 p-6 bg-black/60 text-white">
                      <h3 class="text-base sm:text-lg md:text-xl font-semibold">
                        24/7 Light &amp; Wifi
                      </h3>
                      <p class="text-sm sm:text-base mt-2 leading-relaxed">
                        Uninterrupted electricity and high-speed wifi for your
                        learning needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev swiper-button-disabled"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                <span class="swiper-pagination-bullet"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
