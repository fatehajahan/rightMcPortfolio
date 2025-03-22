import React from 'react'
import { MdArrowOutward } from 'react-icons/md'
import resume from '../assets/projects/cv_musleh.pdf'

const Section2 = () => {
    return (
        <div className='bg-transparent md:mb-[400px] '>
            <p className='text-[20px] pb-[15px] md:hidden inline-block'>About</p>
            <div className="text-[16px] font-regular leading-6 text-[#708099] flex flex-col gap-y-[50px]">
                <div className="md:flex hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl">
                    <div className='md:w-[20%]'>2024-Current</div>
                    <div className='md:w-[80%] group'>
                        <div className='text-white flex relative '>
                            <p className='group-hover:text-[#4ec6c5]'>Senior Frontend Developer.</p>
                            <div className='ml-[15px] flex items-center absolute right-0 cursor-pointer hover:border-b-2 transition duration-500'>
                                <p>Demo.com</p>
                                <MdArrowOutward className='' />
                            </div>
                        </div>
                        <p className='pt-[15px]'>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>

                        <div className='flex items-center gap-x-[10px] pt-[15px]'>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                        </div>
                    </div>
                </div>



                <div className="md:flex hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl">
                    <div className='md:w-[20%]'>2024-Current</div>
                    <div className='md:w-[80%] group'>
                        <div className='text-white flex relative'>
                            <p className='group-hover:text-[#4ec6c5]'>Senior Frontend Developer.</p>
                            <div className='ml-[15px] flex items-center absolute right-0 cursor-pointer hover:border-b-2 transition duration-500'>
                                <p>Demo.com</p>
                                <MdArrowOutward className='' />
                            </div>
                        </div>
                        <p className='pt-[15px]'>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>

                        <div className='flex items-center gap-x-[10px] pt-[15px]'>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                        </div>
                    </div>
                </div>



                <div className="md:flex hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl">
                    <div className='md:w-[20%]'>2024-Current</div>
                    <div className='md:w-[80%] group'>
                        <div className='text-white flex relative'>
                            <p className='group-hover:text-[#4ec6c5]'>Senior Frontend Developer.</p>
                            <div className='ml-[15px] flex items-center absolute right-0 cursor-pointer hover:border-b-2 transition duration-500'>
                                <p>Demo.com</p>
                                <MdArrowOutward className='' />
                            </div>
                        </div>
                        <p className='pt-[15px]'>Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>

                        <div className='flex items-center gap-x-[10px] pt-[15px]'>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                            <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='group'>
                <a href={resume} download="rightMc-Resume.pdf ">
                    <div className='flex gap-[5px] items-center cursor-pointer font-semibold text-[16px] pt-[30px] group-hover:text-[#53cdbc] transition-transform duration-500 ease-in-out transform translate-x-0 hover:translate-x-[60px]'>
                        <p>View Full Résumé</p>
                        <MdArrowOutward />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Section2