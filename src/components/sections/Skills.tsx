import tools from '@/constants/tools'
import React from 'react'

const Skills = () => {
    return (
        <div className="container mx-auto p-12" id="skills">
            <h3 className="flex align-center font-semibold text-2xl">
                Herramientas
                <span className="material-symbols-outlined rotate-90">
                    arrow_right_alt
                </span>
            </h3>
            <div className='flex justify-center my-20 gap-12 flex-wrap'>
                {
                    tools.map((tool, index) => (
                        <img key={index} src={tool.image} alt={tool.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills