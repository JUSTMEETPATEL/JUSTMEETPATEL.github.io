import React from 'react'
import { AnimatedTooltip } from './ui/AnimatedToolit'

const Skill = () => {
    return (
        <>
            <div className="mt-72"></div>
            <h1 className="md:text-7xl text-4xl mb-20 md:mx-72"><span className='text-indigo-700'>&lt;</span>Skills <span className='text-indigo-700'>/&gt;</span></h1>
            <div className='w-full md:flex md:justify-center md:items-center flex mx-16 mb-72'>
                <AnimatedTooltip items={[
                    { id: 1, name: "JavaScript", designation: "", image: "/javascript.svg" },
                    { id: 2, name: "TypeScript", designation: "", image: "/typescript.svg" },
                    { id: 3, name: "Git", designation: "", image: "/git.svg" },
                    { id: 4, name: "TailwindCSS", designation: "", image: "/tailwindcss.svg" },
                    { id: 5, name: "Express js", designation: "", image: "/express.svg" },
                    { id: 6, name: "React js", designation: "", image: "/react.svg" },
                    { id: 7, name: "NEXT js", designation: "", image: "/next.svg" },
                ]} />
            </div>
        </>
    )
}

export default Skill
