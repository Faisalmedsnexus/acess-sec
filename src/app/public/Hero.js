"use client"

import React, { useState } from "react";
import { UserAuthContext } from "../contexts/auth-context";
import { DictionariesContext } from "../contexts/dictionary-context";


export const Hero = ({ activeSection }) => {
  const { lng } = UserAuthContext();
  const { dictionaries } = DictionariesContext();

  console.log(dictionaries,"dictionaries")
  console.log(lng,"lng")
 
  const [isLoading, setIsLoading] = useState(true); // Loading state
  return (
    <div>
      <img src="/images/herosection_bgtop.png" alt="Farrukh" className="w-[100%]" />
      <div
        className="flex flex-col md:flex-row gap-5 max-w-[75%] mx-auto justify-center mb-[-60px]"
      >
        {activeSection === "products" ? (
          <>
            <div className="md:w-[70%] flex items-center">
              <h1 className="font-bold text-[30px] md:text-[50px] font-quicksand items-center">
                Payment Details
              </h1>
            </div>
            <div className="md:w-[30%]">
              <img src="/images/hero_one.png" alt="Farrukh" className="" />
            </div>
          </>
        ) : activeSection === "choose-avatar" ? (
          <>
            <div className="md:w-[55%] flex items-center">
              <h1 className="font-bold text-[30px] md:text-[50px] font-quicksand items-center">
                Choose Your Favorite Avatar
              </h1>
            </div>
            <div className="md:w-[45%] flex flex-col lg:flex-row gap-5 items-center">
              <img
                className="w-[145px] h-[160px]"
                src="/images/choose-avatar/avatar1.png"
                alt="Farrukh"
              />
              <img
                className="w-[206px] h-[232px]"
                src="/images/choose-avatar/avatar2.png"
                alt="Farrukh"
              />
              <img
                className="w-[301px] h-[330px]"
                src="/images/choose-avatar/avatar3.png"
                alt="Farrukh"
              />
            </div>
          </>
        ) : activeSection === "access-simulator" ? (
          <>
            <div className="md:w-[70%] flex items-center">
              <h1 className="font-bold text-[30px] md:text-[50px] font-quicksand items-center">
                Child Access
              </h1>
            </div>
            <div className="md:w-[30%]">
              <img src="/images/hero_one.png" alt="Farrukh" className="" />
            </div>
          </>
        ) : activeSection === "quiz" ? (
          <>
            <div className="md:w-[70%] flex items-center">
              <h1 className="font-bold text-[30px] md:text-[50px] font-quicksand items-center">
                Let’s Explore Acces-Sec’s Simulator
              </h1>
            </div>
            <div className="md:w-[30%]">
              <img src="/images/hero_one.png" alt="Farrukh" className="" />
            </div>
          </>
        ) : (
          <>
            <div className="md:w-[70%] ">
              <h1 className="font-bold font-quicksand text-[30px] md:text-[50px] font-quicksand md:text-left text-center">
                {dictionaries?.Home_Page_Hero_Section_Title}
              </h1>
              <p className="!font-normal font-quicksand text-[18px] md:text-[26px] md:text-left text- text-[#1F1C14]">
                Giving every student the opportunity to access the best
                education.
              </p>
              <div className="flex flex-row items-center my-5">
                <p className="text-[14px] font-normal text-[#0D1216] font-quicksand md:text-left text-center">
                  4.8/5.0
                </p>
                <img src="/images/rating_star.png" alt="Farrukh" className="" />
                <p className="text-[14px] font-normal text-[#0D1216] font-quicksand md:text-left text-center">
                  Based on 2000 reviews
                </p>
              </div>
              <div className="flex md:justify-start justify-center">
                <button className="primary-btn bg-[#FE8840] text-white px-[40px] py-3 rounded-[25px] transition cursor-pointer">
                  Get started
                </button>
              </div>
            </div>
            <div className="md:w-[30%]">
              <img src="/images/hero_one.png" alt="Farrukh" className="" />
            </div>
          </>
        )}
      </div>
      <img src="/images/herosection_bgbottom.png" alt="Farrukh" className="w-[100%]" />
    </div>
  );
};
