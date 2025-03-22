import React, { useEffect, useState } from 'react'
import Section1 from '../../sections/Section1';
import Section2 from '../../sections/Section2';
import Section3 from '../../sections/Section3';
import logo from '../../assets/logo.png'
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const sections = [
    { id: "section1", label: <p><Section1 /></p>, section: 'ABOUT' },

    { id: "section2", label: <p><Section2 /></p>, section: 'EXPERIENCE' },

    { id: "section3", label: <p><Section3 /></p>, section: 'PROJECTS' },
];

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    if (top <= 300) {
                        current = section.id;
                    }
                }
            });

            if (current) {
                setActiveSection(current);
            }
        };
        if (window.innerWidth > 768) {
            window.addEventListener("scroll", handleScroll);
        }

        // window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='container'>
            <img src={logo} alt="" className='md:fixed mx-auto' />
            <div className="md:flex text-white bg-transparent md:px-0 px-[30px]">
                {/* Sidebar */}
                <div className="md:fixed md:top-[200px] md:pt-0 pt-[30px]">
                    <div>
                        <p className='md:text-[20px] text-[15px] md:pt-[5px]'>Front End Engineer</p>
                        <p className='text-[16px] pt-[5px] w-[300px] text-[#94a3b8]'>I build accessible, pixel-perfect digital experiences for the web.</p>
                        <ul className="space-y-3 pt-[30px] md:inline-block hidden">
                            {sections.map((section) => (
                                <li
                                    key={section.id}
                                    className={`cursor-pointer font-Montserrat text-[20px] font-semibold p-2 rounded-md transition-all duration-500 hover:pl-[20px] hover:text-white hover:opacity-[100%] 
                                ${activeSection === section.id
                                            ? "text-white ml-[80px] opacity-100 scale-110 "
                                            : "text-gray-400 ml-[20px] opacity-50"
                                        }`}
                                >
                                    {section.section}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex items-center text-[30px] gap-x-[20px] md:py-[60px] py-[25px]'>
                        <FaFacebook className='cursor-pointer text-[#94a3b8] hover:text-white transition duration-500' />
                        <FaTwitter className='cursor-pointer text-[#94a3b8] hover:text-white transition duration-500' />
                        <FaLinkedinIn className='cursor-pointer text-[#94a3b8] hover:text-white transition duration-500' />
                        <FaGithub className='cursor-pointer text-[#94a3b8] hover:text-white transition duration-500' />
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:ml-[50%] flex flex-col md:gap-y-[300px] gap-y-[100px]">
                    {sections.map((section) => (
                        <div
                            id={section.id}
                            key={section.id}
                            className="md:h-screen justify-center flex items-center"
                        >
                            <p className="text-[12px] font-semibold">{section.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar