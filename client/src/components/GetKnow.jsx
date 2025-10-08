import React from "react";
import ceo from '../../src/assets/ceo.png'
import GetKnowImg from '../../src/assets/getknow.png'

const GetKnow = () => {
  return (
    <div>
      <div>
        <div class="w-full h-full md:h-screen p-6 px-10 text-center md:text-start space-y-20 mt-6 pb-[18%] pl-32">
          <div class="flex flex-col md:flex-row justify-between lg:gap-10">
            <div class="w-full md:w-1/2 mb-6 md:mb-0 md:space-y-4">
              <h1 class="text-[34px] font-alegreya font-semibold">
                Get To Know Us
              </h1>
              <p class="text-gray-700 leading-relaxed text-[16px] font-semibold font-Alegreya">
                Tech Pioneers Academy is a renowned technology institute
                offering a wide range of specialized courses tailored to meet
                industry standards. We focus on practical coding, mentorship
                from real-world industry professionals, and providing students
                with the skills they need to thrive in the tech world.
              </p>
              <div class="border-2 p-10 rounded-[40px] border-blue-400 mt-6">
                <div class="flex gap-4 mb-4 h-[51px] items-center text-center">
                  <img
                    class="w-[64px] h-[64px] rounded-full"
                    alt="profile img"
                    src={ceo}
                  />
                  <h1 class="text-[20px] font-bold">Engr. Talha Sartaj</h1>
                </div>
                <div class="text-[14px] font-semibold text-gray-700">
                  <p class="block md:hidden">
                    Engr. Talha Sartaj is a software engineer with expertise in
                    AI and Django and serves as the CEO of Tech Pioneers.
                  </p>
                  <p class="hidden md:block">
                    Engr. Talha Sartaj is a software engineer with expertise in
                    AI and Django and serves as the CEO of Tech Pioneers,
                    offering courses and services in development and e-commerce
                    to international clients. A passionate motorsports
                    enthusiast and blogger, Talha has also organized numerous
                    tech, non-tech, and motorsports events, blending technical
                    proficiency with hands-on event experience.
                  </p>
                  <button class="text-blue-600 underline mt-2 block md:hidden">
                    See More
                  </button>
                </div>
              </div>
            </div>
            <div class="relative w-full md:w-1/2 md:space-y-6">
              <div class="left-[1%] rounded-[40px]">
                <img
                  alt="Main Visual"
                  class="md:w-[480px] w-[480px] md:h-[380px] rounded-lg object-cover"
                  src={GetKnowImg}
                />
              </div>
            </div>
          </div>
          <a href="/about" data-discover="true">
            <div class="flex justify-center font-bold">
              <button class="h-16 w-48 text-white bg-[#007BFF] rounded-3xl">
                Know Us More
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetKnow;
