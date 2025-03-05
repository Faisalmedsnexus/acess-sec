'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
export const TopMenue = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">

      <div className="md:hidden flex justify-between items-center p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>


      <div
        className={`${isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-5 md:gap-[50px] justify-center items-center md:items-center bg-black`}
      >
        <Link href="/public/access-simulator" className="inline-block">
          <button
            onClick={() => setActiveSection("choose-avatar")}
            className="text-[26px] font-normal text-white cursor-pointer">
            Free Simulator
          </button>
        </Link>
        <button 
        onClick={() => setActiveSection("access-simulator")}
        className="text-[26px] font-normal text-white cursor-pointer">
          Access Simulator
        </button>
        <Link href="/public/payment" className="inline-block">
          <button
            onClick={() => setActiveSection("products")}
            className="text-[26px] font-normal text-white cursor-pointer"
          >
            Products
          </button>
        </Link>
        <button className="text-[26px] font-normal text-white cursor-pointer">
          About Us
        </button>
        <button className="text-[26px] font-normal text-white cursor-pointer">
          Contact Us
        </button>
      </div>
    </div>
  );
};
