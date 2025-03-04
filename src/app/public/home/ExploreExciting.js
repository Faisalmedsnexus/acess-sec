import React from 'react'

export const ExploreExciting = () => {
    return (
        <section className='flex flex-col items-center py-[50px] bg-[#398EBB]'>
            <div className='flex flex-col md:flex-row justify-center items-center mx-[50px] md:mx-[100px] lg:mx-[200px] rounded-3xl bg-[#0772AA]'>
                <div className='ml-[100px] my-5 max-w-[45%]'>
                    <h1 className='text-[40px] font-bold text-white '>Explore exciting subjects, & play your way to brilliance</h1>
                    <p className='text-[20px] font-normal text-white'>Why settle for ordinary when you can explore the extraordinary? Join us and discover why EduPlay is not just the best – it's the magical key to unlocking creativity for your kids.</p>
                    <button className="primary-btn bg-[#FE8840] text-white px-[60px] mt-5 py-3 rounded-[25px] cursor-pointer transition">
                    explore our subjects
                    </button>
                </div>
                <div>
                <img
                    src="/images/explore_exciting.png"
                    alt="Acces"
                />
                </div>
            </div>
        </section>
    )
}
