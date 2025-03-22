import React from 'react'
import { Link } from 'react-router-dom'


const Archives = () => {
    const projects = [
        {
            year: 2023,
            name: "Emerson Collective",
            madeAt: "Upstatement",
            builtWith: ["Next.js", "TypeScript", "SCSS", "Contentful"],
            link: "https://demo.com",
        },
        {
            year: 2023,
            name: "Harvard Business School Next.js Site",
            madeAt: "Upstatement",
            builtWith: ["React", "TypeScript", "Next.js", "Contentful"],
            link: "https://demo.edu",
        },
        {
            year: 2022,
            name: "Harvard Business School Design System",
            madeAt: "Upstatement",
            builtWith: ["Storybook", "React", "TypeScript"],
            link: "https://demo.com",
        },
        {
            year: 2022,
            name: "Threadable",
            madeAt: "Upstatement",
            builtWith: ["React Native", "Ruby on Rails", "Firebase"],
            link: "https://demo.com",
        },
        {
            year: 2022,
            name: "Pratt",
            madeAt: "Upstatement",
            builtWith: ["WordPress", "Timber", "WordPress Multisite", "Gutenberg", "JavaScript"],
            link: "https://demo.edu",
        },
    ];


    return (
        <div className='text-white py-[150px]'>
            <div className="container">
                <Link to="/"><p className='transition-transform duration-500 ease-in-out transform translate-x-0 hover:translate-x-[60px] hover:text-[#53cdbc]'>Back to rightMc HomePage</p></Link>
                <h1 className='text-[48px] font-bold font-Montserrat'>All Projects</h1>


                <div className="tableMake">
                    <table className="w-full border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr className="text-left text-gray-400">
                                <th className="pb-4">Year</th>
                                <th className="pb-4">Project</th>
                                <th className="pb-4">Made at</th>
                                <th className="pb-4">Built with</th>
                                <th className="pb-4">Link</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {projects.map((project, index) => (
                                <tr key={index} className="border-t border-gray-700 hover:bg-gray-800 transition">
                                    <td className="py-4 pr-[25px]">{project.year}</td>
                                    <td className="py-4 font-semibold">{project.name}</td>
                                    <td className="py-4 pr-[25px]">{project.madeAt}</td>
                                    <td className="py-4 flex flex-wrap gap-2">
                                        {project.builtWith.map((tech, i) => (
                                            <span key={i} className="bg-[#124e58] text-teal-300 px-3 py-1 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="py-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                                            {project.link.replace("https://", "")} ↗
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Archives