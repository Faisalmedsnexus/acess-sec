import React from "react";

export const Hero = ({ activeSection }) => {
  return (
    <div>
      <img src="/images/herosection_bgtop.png" alt="Farrukh" className="" />
      <div
        className="flex flex-col md:flex-row gap-5 max-w-[75%] mx-auto justify-center 
      "
      >
        {activeSection === "products" ? (
          <div className="md:w-[70%] flex items-center">
            <h1 className="font-bold text-[50px] items-center">
              Payment Details
            </h1>
          </div>
        ) : (
          <div className="md:w-[70%] ">
            <h1 className="font-bold text-[50px] md:text-left text-center">
              Knowledge Connection Open the Door to the Future
            </h1>
            <p className="font-normal text-[26px] md:text-left text-center">
              Giving every student the opportunity to access the best education.
            </p>
            <div className="flex md:justify-start justify-center">
              <button className="primary-btn bg-[#FE8840] text-white px-[40px] py-3 rounded-[25px] transition cursor-pointer">
                Get started
              </button>
            </div>
          </div>
        )}

        <div className="md:w-[30%]">
          <img src="/images/hero_one.png" alt="Farrukh" className="" />
        </div>
      </div>
      <img src="/images/herosection_bgbottom.png" alt="Farrukh" className="" />
    </div>
  );
};
