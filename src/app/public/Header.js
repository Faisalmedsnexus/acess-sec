import React from 'react'

export const Header = () => {
    return (
        <div className='hidden md:flex flex-col sm:flex-row justify-between align-center items-center px-5'>
            <img
                src="/images/logo.png"
                alt="Acces"
            />
            <div className='flex flex-row h-[60px] md:h-[50px] gap-3 pr-[50px] mb-5 md:mb-0'>
                {/* <button className=" text-[#0772AA] px-[40px] py-3 border border-[#0772AA] rounded-[25px] cursor-pointer transition">
                    Free Trial
                </button> */}
                <button className="primary-btn bg-[#FE8840] text-white px-[60px] py-3 rounded-[25px] cursor-pointer transition">
                    Login
                </button>
                
                <img
                    src="/images/shopping_basket.png"
                    alt="Acces"
                />
            </div>

        </div>
    )
}
