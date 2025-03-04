import React from 'react'

export const Promotional = () => {
    return (
        <section className='flex flex-col items-center mt-[50px]'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-[40px] font-bold text-center py-5'>Our Promotional Videos</h1>
                <p className='text-[20px] font-normal text-[#62605b] text-center w-[45%] m-auto'>Online classes with teachers, continuous questions and answers during class if you do not understand. At the end of the session, the lesson is recorded for your child to review</p>
                <button className="primary-btn max-w-[500px] bg-[#FE8840] text-white my-5 px-[40px] py-3 rounded-[25px] cursor-pointer transition mx-auto">
                    Free Trial Lessons
                </button>
            </div>
            <div className='flex flex-col sm:flex-row gap-5 py-3'>
                <div className='flex flex-row items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3 rounded-3xl'>
                    <img
                        className='bg-[#F8F2FF] p-2 rounded-xl mr-2'
                        src="/images/live.png"
                        alt="Acces"
                    />
                    <h1 className='text-[22px] font-bold text-center items-center flex pr-[50px]'>Live Classes</h1>
                </div>
                <div className='flex flex-row shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3 rounded-3xl'>
                    <img
                        className='bg-[#E5FFF3] p-3 rounded-[20px] mr-2'
                        src="/images/recorded.png"
                        alt="Acces"
                    />
                    <h1 className='text-[22px] font-bold text-center items-center flex pr-[50px]'>Recorded Class</h1>
                </div>
                <div className='flex flex-row items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-3 rounded-3xl'>
                    <img
                        className='bg-[#FFF4F2] p-3 rounded-[30px] mr-2'
                        src="/images/audio.png"
                        alt="Acces"
                    />
                    <h1 className='text-[22px] font-bold text-center items-center flex pr-[50px]'>Audio Classes</h1>
                </div>

            </div>
        </section>
    )
}
