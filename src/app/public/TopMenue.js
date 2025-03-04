import React from 'react'
import Link from "next/link";

export const TopMenue = ({ setActiveSection }) => {
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 md:gap-[50px] bg-black justify-center items-center'>
                <Link href="/public/welcome" className="inline-block">
                    <button className="text-[26px] font-normal text-white cursor-pointer">
                        Free Simulator
                    </button>
                </Link>
                <button className="text-[26px] font-normal text-white cursor-pointer">
                    Access Simulator
                </button>
                <Link href="/public/payment" className="inline-block">
                    <button  onClick={() => setActiveSection("products")} className="text-[26px] font-normal text-white cursor-pointer">
                        Products
                    </button>
                </Link>
                <button className="text-[26px] font-normal text-white cursor-pointer">
                    About Us
                </button>
                <button className="text-[26px] font-normal text-white cursor-pointer">
                    contact Us
                </button>
            </div>
        </div>
    )
}
