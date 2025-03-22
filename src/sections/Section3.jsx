import React from 'react'
import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Section3 = () => {
    return (
        <div className='bg-transparent pb-[150px]'>
            <p className='text-[20px] pb-[15px] md:hidden inline-block'>Projects</p>
            
            <div className="text-[16px] font-regular leading-6 text-[#708099] flex flex-col gap-y-[50px]">
                <div className='group md:flex gap-x-[30px] hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl'>
                    <div className=""><img src={project1} alt="" className='md:w-[200px]' /></div>
                    <div className="md:w-[70%]">
                        <p className='head text-[20px] pb-[15px] group-hover:text-[#53cdbc] transition md:pt-0 pt-[20px]'>Build a Spotify Connected</p>
                        <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                    </div>
                </div>

                <div className='group hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl'>
                    <div className='md:flex gap-x-[30px] '>
                        <div className=""><img src={project2} alt="" className='md:w-[200px] mx-auto' /></div>
                        <div className="md:w-[70%]">
                            <p className='head text-[20px] pb-[15px] group-hover:text-[#53cdbc] transition md:pt-0 pt-[20px]'>Build a Spotify Connected</p>
                            <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-[10px] pt-[15px]'>
                        <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                        <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                        <p className='bg-[#122b3a] text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>Javascript</p>
                    </div>
                </div>


                <div className='group hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl'>
                    <div className=' md:flex gap-x-[30px]'>
                        <div className=""><img src={project3} alt="" className='md:w-[200px] mx-auto' /></div>
                        <div className="md:w-[70%]">
                            <p className='head text-[20px] pb-[15px] group-hover:text-[#53cdbc] transition md:pt-0 pt-[20px]'>Build a Spotify Connected</p>
                            <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-[10px] pt-[15px]'>
                        <p className='text-[#53cdbc] py-[5px] text-center px-[10px] rounded-full'>100K+ Installs</p>
                    </div>
                </div>


                <div className='group md:flex gap-x-[30px] hover:bg-[#39476993] transition duration-500 ease-in-out py-[20px] px-[20px] rounded-3xl'>
                    <div className=""><img src={project4} alt="" className='md:w-[200px] mx-auto' /></div>
                    <div className="md:w-[70%]">
                        <p className='head text-[20px] pb-[15px] group-hover:text-[#53cdbc] transition md:pt-0 pt-[20px]'>Build a Spotify Connected</p>
                        <p>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
                    </div>
                </div>
            </div>

            <div className="group">
                <div className='flex gap-[5px] items-center cursor-pointer font-semibold text-[16px] pt-[30px] group-hover:text-[#53cdbc] transition-transform duration-500 ease-in-out transform translate-x-0 hover:translate-x-[60px]'>
                    <Link to="/archiveProjects">View Full Project Archive</Link>
                    <MdArrowOutward />
                </div>
            </div>
        </div>
    )
}

export default Section3