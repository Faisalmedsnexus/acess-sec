"use client";
import React, { useState } from "react";
import usa from "../../../public/images/usa.svg";
import france from "../../../public/images/france.svg";
import Image from "next/image";
import { Select } from "antd";
export const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    console.log("Selected Language:", value);
  };
  const options = [
    {
      key: "en-opt",
      value: "en",
      label: (
        <div className=" tex-[16px] font-semibold flex gap-2 ">
          <div className="flex items-center rounded-full">
            <Image
              src={usa}
              alt="english"
              width={26}
              height={26}
              className="object-cover !w-[22px] !h-[22px]"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <span className="font-medium">English (US)</span>
        </div>
      ),
    },
    {
      key: "fr-opt",
      value: "fr",
      label: (
        <div className="tex-[16px] font-semibold flex gap-2 ">
          <Image src={france} alt="french" width={20} height={20} />
          <span className="font-medium">French</span>
        </div>
      ),
    },
  ];
  return (
    <div className="hidden md:flex flex-col sm:flex-row justify-between align-center items-center px-5">
      <img width={110} height={110} src="/images/logo.svg" alt="Acces" />
      <div className="flex flex-row h-[60px] md:h-[50px] gap-3 pr-[50px] mb-5 md:mb-0 items-center">
        {/* <button className=" text-[#0772AA] px-[40px] py-3 border border-[#0772AA] rounded-[25px] cursor-pointer transition">
                    Free Trial
                </button> */}
        <Select
          defaultValue={selectedLanguage}
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="language-select w-44 custom_select"
          options={options}
        />
        <button className="primary-btn bg-[#FE8840] text-white px-[60px] py-3 rounded-[25px] cursor-pointer transition">
          Login
        </button>

        <img src="/images/shopping_basket.png" alt="Acces" />
      </div>
    </div>
  );
};
