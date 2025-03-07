import React from 'react'

export const WhyChoose = () => {
  return (
    <section className='flex flex-col items-center bg-[#398EBB]'>
      <div className='py-5'>
        <h1 className='font-poppins text-[25px] md:text-[40px] font-bold text-white text-center'>Why Choose  Acces-Sec</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center m-auto gap-5 py-5'>
        <div className='max-w-[90%] md:max-w-[20%] md:h-[658px] lg:h-[480px] bg-white rounded-xl  text-center border border-[#FE8840] flex flex-col items-center'>
          <img
          className='w-[400px] h-[170px] p-0'
            src="/images/teacher.png"
            alt="Acces"
          />
          <h1 className='text-[18px] md:text-[22px] font-bold pt-5 font-poppins'>Experienced teacher</h1>
          <p className='text-[16px] md:text-[20px] font-quicksand font-normal text-[#62605b] py-5'>Instructors from all over Vietnam and around the world, providing quality learning experiences and helping students develop their full potential</p>
        </div>
        <div className='max-w-[90%] md:max-w-[20%] md:h-[658px] lg:h-[480px] bg-white rounded-xl  text-center border border-[#FE8840] flex flex-col items-center'>
        <img
          className='w-[400px] h-[170px] p-0'
            src="/images/program.png"
            alt="Acces"
          />
          <h1 className='text-[18px] md:text-[22px] font-bold px-5 pt-5 font-poppins'>Creative program</h1>
          <p className='text-[16px] md:text-[20px] font-quicksand  font-normal text-[#62605b] py-5 px-5'>Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or “study now, pay later”</p>
        </div>
        <div className='max-w-[90%] md:max-w-[20%] md:h-[658px] lg:h-[480px] bg-white rounded-xl px-5 text-center border border-[#FE8840] flex flex-col items-center'>
        <img
          className='w-[400px] h-[170px] p-0'
            src="/images/cost.png"
            alt="Acces"
          />
          <h1 className='text-[18px] md:text-[22px] font-bold px-5 pt-5 font-poppins'>Appropriate cost</h1>
          <p className='text-[16px] md:text-[20px] font-quicksand  font-normal text-[#62605b] py-5 px-5'>Thiết kế giáo trình dựa trên năng lực và nhu cầu từng học viên, hoạt động học tập hấp dẫn, tương tác 2 chiều liên tục.</p>
        </div>
      </div>
    </section>
  )
}

