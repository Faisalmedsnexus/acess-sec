"use client";
import React, { useState } from 'react'

export const Getintouch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className='py-[50px]'>
            <div className='border border-[#FE8840] m-[20px] sm:m-[70px] md:m-[100px] p-[50px]' style={{ borderWidth: '3px' }}>
                <div className='flex flex-row justify-center items-center'>
                    <img
                        className='hidden md:block mr-[70px] w-[86px] h-[92px]'
                        src="/images/topstar.png"
                        alt="Acces"
                    />
                    <div>
                        <p className='text-[16px] md:text-[20px] font-quicksand font-bold text-[#FE8840] text-center'>GET IN TOUCH</p>
                        <h1 className='text-[25px] md:text-[40px] font-poppins  font-bold text-center ml-[-10px]'>Needs Help? Let’s Get in Touch</h1>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-[50px]'>
                    <form onSubmit={handleSubmit} className="sm:space-y-4 md:w-[70%] md:ml-[60px]">

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="sm:w-1/2 p-3 rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]  "
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="sm:w-1/2 p-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md   "
                                required
                            />
                        </div>

                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full p-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md   "
                            required
                        />

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows="4"
                            className="w-full p-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-md   "
                            required
                        ></textarea>


                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="primary-btn font-roboto bg-[#FE8840] text-white p-3 rounded-[25px] cursor-pointer transition"
                            >
                                Get In Touch With Us
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <img
                                className="hidden md:block w-[58px] h-[62px] mt-[-40px]"
                                src="/images/bottomstar.png"
                                alt="Acces"
                            />
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}
